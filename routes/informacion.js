const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage } = require('./firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const informacionRouter = express.Router();

informacionRouter.post('/upload_image', mul.single('image'), uploadImage, async (req, res) => {
    const url = {
        url: req.file.firebaseUrl,
        id_photo: req.body.id_photo
    }

    res.status(200).json({
        message: 'IMAGE UPLOADED SUCCESSFULLY',
        data: url
    })
})

informacionRouter.post('/delete_image', (req, res) => {
    const file = administrador.file("Carreras/" + req.body.id);
    file.delete();

    res.status(200).json({
        message: 'IMAGE DELETE  SUCCESSFULLY',
    })
})


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
    const ref = db.database().ref(`Niveles/Carreras/`)
    ref.push(data).then((result) => {
        var update = db.database().ref(`Niveles/Carreras/${result.key}`)
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


module.exports = informacionRouter;