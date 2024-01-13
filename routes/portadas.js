const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage, administrador } = require('../firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const portadasRouter = express.Router();


portadasRouter.get('/all', async (req, res) => {
    const ref = db.database().ref(`Portadas/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})


portadasRouter.get('/getportada/:id', async (req, res) => {
    const ref = db.database().ref(`Portadas/${req.params.id}/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

module.exports = portadasRouter;