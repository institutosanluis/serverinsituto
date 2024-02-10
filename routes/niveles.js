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

nivelesRouter.get('/nivel/:id/:grado', async (req, res) => {
    console.log(req.params.id , " ", req.params.grado)
    const ref = db.database().ref(`Niveles/${req.params.id}/Carreras/${req.params.grado}/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

nivelesRouter.post("/updateNivel", (req, res) => {
    var data = req.body;
        var update = db.database().ref(`Niveles/${data.id}`)
        update.update({
            'titulo': data.titulo,
            'img': data.img,
            'idImg': data.idImg
        }).then((result) => {
            res.send(result);
        }).catch((error) => {
            // The write failed...
            res.send(error);
        });
  
})

module.exports = nivelesRouter;