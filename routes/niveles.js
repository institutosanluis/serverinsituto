const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage, administrador } = require('../firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const nivelesRouter = express.Router();


nivelesRouter.get('/all', async (req, res) => {
    const ref = db.database().ref(`Niveles/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

module.exports = nivelesRouter;