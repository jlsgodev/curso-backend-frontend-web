
# 📚 AD3 - Cadastro de Cursos

Este projeto é a entrega da **AD3 - Programação Web - IFC**.


## ✅ Estrutura do Projeto

```
curso-backend-frontend-web/
├── curso-backend/
│   ├── index.js
│   ├── package.json
│   ├── public/
│   │   └── cursos.json
│   └── routes/
│       ├── cursos.js
│       └── index.js
├── curso-frontend/
│   ├── cursos.html
│   ├── cursos.js
│   ├── styles.css
│   └── Logo\_IFC\_horizontal.png
└── README.md
```
## ✅ Como rodar o projeto

### ▶️ Backend

1. Navegue até a pasta do backend:

```bash
cd curso-backend
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
```

✅ O backend estará disponível em:
`http://localhost:3001/cursos`

---

### ▶️ Frontend

1. Navegue até a pasta do frontend:

```bash
cd curso-frontend
```

2. Abra o arquivo `cursos.html` no navegador:

* No Linux →

```bash
xdg-open cursos.html
```

* Ou → **duplo clique** no arquivo.

✅ O frontend se comunicará com o backend automaticamente via `fetch()`.

---

## ✅ Funcionalidades

* ✅ Listar cursos
* ✅ Adicionar curso
* ✅ Editar curso
* ✅ Excluir curso

---

## ✅ Tecnologias utilizadas

* **Node.js** → servidor backend
* **Express** → framework para rotas HTTP
* **JavaScript** → lógica de interação
* **HTML & CSS** → estrutura e estilo
* **Fetch API** → comunicação entre frontend e backend

---

## ✅ Observações

* O backend utiliza o arquivo `public/cursos.json` para armazenar os dados.
* O frontend consome as rotas via `fetch('http://localhost:3001/cursos')`.
* O projeto foi dividido em duas partes para melhor organização: **curso-backend** e **curso-frontend**.

---

## ✅ Autor

**jlsgodev**
GitHub: [https://github.com/jlsgodev](https://github.com/jlsgodev)

---

## ✅ Licença

Projeto desenvolvido para fins educacionais no **Instituto Federal Catarinense (IFC)**.

