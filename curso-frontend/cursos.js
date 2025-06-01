const apiUrl = 'http://localhost:3001/cursos';
let cursos = [];
let currentCursoId = null;

// Carrega os cursos
function renderCursos() {
    const tbody = document.querySelector('#cursosTable tbody');
    tbody.innerHTML = '';
    cursos.forEach((curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${curso.nome}</td>
            <td>${curso.sigla}</td>
            <td>${curso.descricao}</td>
            <td>${curso.coordenador}</td>
            <td>
                <button onclick="editCurso(${curso.id})">Editar</button>
                <button onclick="deleteCurso(${curso.id})">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Abre modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Fecha modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('addCurso').addEventListener('click', function() {
    currentCursoId = null;
    document.getElementById('cursoForm').reset();
    openModal('cursoModal');
});

document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        closeModal(this.closest('.modal').id);
    });
});

async function loadCursos() {
    const res = await fetch(apiUrl);
    cursos = await res.json();
    renderCursos();
}

document.getElementById('cursoForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const curso = {
        nome: document.getElementById('nome').value,
        sigla: document.getElementById('sigla').value,
        descricao: document.getElementById('descricao').value,
        coordenador: document.getElementById('coordenador').value
    };

    if (currentCursoId === null) {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(curso)
        });
    } else {
        await fetch(`${apiUrl}/${currentCursoId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(curso)
        });
    }

    closeModal('cursoModal');
    loadCursos();
});

async function editCurso(id) {
    const res = await fetch(`${apiUrl}/${id}`);
    const curso = await res.json();

    currentCursoId = id;
    document.getElementById('nome').value = curso.nome;
    document.getElementById('sigla').value = curso.sigla;
    document.getElementById('descricao').value = curso.descricao;
    document.getElementById('coordenador').value = curso.coordenador;

    openModal('cursoModal');
}

async function deleteCurso(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    loadCursos();
}

loadCursos();
