const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage, administrador } = require('../firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const reseniasRouter = express.Router();


reseniasRouter.get('/tipoPersona', async (req, res) => {
    const ref = db.database().ref(`Resenias/TipoPersona/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

reseniasRouter.get('/allResenias', async (req, res) => {
    const ref = db.database().ref(`Resenias/Listado_Resenias/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})



reseniasRouter.get('/nivel/:id/:grado', async (req, res) => {
    const ref = db.database().ref(`Niveles/${req.params.id}/Carreras/${req.params.grado}/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

reseniasRouter.post("/updateNivel", (req, res) => {
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

reseniasRouter.post("/updateAreaDiversificado", (req, res) => {
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

reseniasRouter.post("/agregar", (req, res) => {
    var data = req.body;
    const ref = db.database().ref(`Resenias/Listado_Resenias`)
    ref.push(data).then((result) => {
        var update = db.database().ref(`Resenias/Listado_Resenias/${result.key}`)
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

reseniasRouter.post("/delete-area", (req, res) => {
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

module.exports = reseniasRouter;