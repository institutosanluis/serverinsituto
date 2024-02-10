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

nivelesRouter.post("/updateAreaDiversificado", (req, res) => {
    var data = req.body;
    var update = db.database().ref(`Niveles/${data.tipo}/Carreras/${data.id}/grados/${data.idGrado}/areas/${data.index}`)
    update.update({
        'area': data.area
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });

})

nivelesRouter.post("/agregar-area", (req, res) => {
    var data = req.body;
    console.log(data)
    var update = db.database().ref(`Niveles/${data.tipo}/Carreras/${data.id}/grados/${data.idGrado}/areas/${data.idIndex}`)
    update.set(data.area).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });

})

nivelesRouter.post("/delete-area", (req, res) => {
    var data = req.body;
    console.log(data)
    var update = db.database().ref(`Niveles/${data.tipo}/Carreras/${data.id}/grados/${data.idGrado}/areas/${data.index}`)
    update.remove().then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });

})

module.exports = nivelesRouter;