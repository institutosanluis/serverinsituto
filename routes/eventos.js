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
    ref.orderByChild('fecha').once('value', snapshot => {
        res.send(snapshot.val());
    });
})

eventosRouter.get('/agendaFecha/:nivel/:fecha', async (req, res) => {
    const ref = db.database().ref(`Calendario/Actividades/${req.params.nivel}/`);
    ref.orderByChild('fecha').equalTo(req.params.fecha).on('child_added', snapshot => {
        res.send(snapshot.val());
    });
})



eventosRouter.post("/agendar", (req, res) => {
    var data = req.body;
    const ref = db.database().ref(`Calendario/Actividades/${data.nivel}`)
    ref.push(data).then((result) => {
        var update = db.database().ref(`Calendario/Actividades/${data.nivel}/${result.key}`)
        update.update({
            'id': result.key
        }).then((result) => {
            res.send(result);
        }).catch((error) => {
            // The write failed...
            res.send(error);
        });
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})

module.exports = eventosRouter;