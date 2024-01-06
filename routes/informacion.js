const express = require('express');
const { db } = require('../firebase')

const informacionRouter = express.Router();

informacionRouter.get('/info-establecimiento', async (req, res) => {
    const ref = db.database().ref(`Establecimiento/Informacion`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

informacionRouter.get('/portada/:type', async (req, res) => {
    const ref = db.database().ref(`Portadas/${req.params.type}`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

informacionRouter.post("/agregar-carrera", (req, res) => {
    const ref = db.database().ref('Niveles/Carreras')
    ref.set(req.body.carrera).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})


module.exports = informacionRouter;