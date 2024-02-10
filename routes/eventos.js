const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage, administrador } = require('../firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const eventosRouter = express.Router();


eventosRouter.get('/all', async (req, res) => {
    const ref = db.database().ref(`Niveles/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

eventosRouter.get('/eventosActividades', async (req, res) => {
    const ref = db.database().ref(`EventosActividades/EventosPasados`);
    ref.orderByChild('fecha').limitToLast(6).once('value', snapshot => {
        res.send(snapshot.val());
    });
})


eventosRouter.get('/alleventosActividades', async (req, res) => {
    const ref = db.database().ref(`EventosActividades/EventosPasados`);
    ref.orderByChild('fecha'). once('value', snapshot => {
        res.send(snapshot.val());
    });
})

module.exports = eventosRouter;