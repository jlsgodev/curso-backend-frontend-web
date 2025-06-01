const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/cursos.json');

// Função para ler os cursos do arquivo
function getCursos() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Função para salvar cursos no arquivo
function saveCursos(cursos) {
    fs.writeFileSync(filePath, JSON.stringify(cursos, null, 4));
}

// GET - Listar todos os cursos
router.get('/', (req, res) => {
    const cursos = getCursos();
    res.json(cursos);
});

// GET - Buscar curso por ID
router.get('/:id', (req, res) => {
    const cursos = getCursos();
    const curso = cursos.find(c => c.id === parseInt(req.params.id));
    if (!curso) return res.status(404).json({ mensagem: 'Curso não encontrado' });
    res.json(curso);
});

// POST - Criar novo curso
router.post('/', (req, res) => {
    const cursos = getCursos();
    const novoCurso = {
        id: cursos.length ? cursos[cursos.length - 1].id + 1 : 1,
        ...req.body
    };
    cursos.push(novoCurso);
    saveCursos(cursos);
    res.status(201).json(novoCurso);
});

// PUT - Atualizar curso por ID
router.put('/:id', (req, res) => {
    const cursos = getCursos();
    const index = cursos.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ mensagem: 'Curso não encontrado' });

    cursos[index] = { id: cursos[index].id, ...req.body };
    saveCursos(cursos);
    res.json(cursos[index]);
});

// DELETE - Remover curso por ID
router.delete('/:id', (req, res) => {
    let cursos = getCursos();
    const index = cursos.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ mensagem: 'Curso não encontrado' });

    const cursoRemovido = cursos.splice(index, 1);
    saveCursos(cursos);
    res.json(cursoRemovido);
});

module.exports = router;
