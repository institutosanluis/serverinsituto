const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage, administrador } = require('../firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const conexionRouter = express.Router();


conexionRouter.get('/test', async (req, res) => {

    try {
        res.send({
            ok: 200
        });
    } catch (error) {
        res.status(500).send({ error: 'Something failed!' });
    }

})

module.exports = conexionRouter;