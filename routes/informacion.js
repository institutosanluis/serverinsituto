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
    var data = req.body.carrera;
    if(data.id == null){
        data.id = new Date();
    }

    const ref = db.database().ref(`Niveles/Carreras/`)

    ref.push(req.body.carrera).then((result) => {
     
        res.send({key:    result.key(), result: result});
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})


module.exports = informacionRouter;