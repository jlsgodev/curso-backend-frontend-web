const express = require('express');
const router = express.Router();

const cursosRouter = require('./cursos');

router.use('/cursos', cursosRouter);

module.exports = router;
