const express = require('express');
const { db } = require('../firebase');
const multer = require('multer');
const { uploadImage, administrador } = require('../firebase');

const mul = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})


const admisionRouter = express.Router();


admisionRouter.get('/all', async (req, res) => {
    const ref = db.database().ref(`Requisitos/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

admisionRouter.get('/allAdmisiones', async (req, res) => {
    const ref = db.database().ref(`Admisiones/Niveles/`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})

admisionRouter.post("/agregar-requisitos-modulo", (req, res) => {
    var data = req.body;
    const ref = db.database().ref(`Requisitos/${req.body.id}/`)
    ref.set(data).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})




/*admisionRouter.post("/agregar-requisito", (req, res) => {
    var data = req.body;
    const ref = db.database().ref(`Requisitos/${req.body.nivel}/requisitos`)
    ref.push(data.requisitos).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})*/

admisionRouter.post("/agregar-modulo-nivel-admision", (req, res) => {
    var data = req.body;
    const ref = db.database().ref(`Admisiones/Niveles/${data.id}`)
    ref.set(data).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})

admisionRouter.post("/agregar-requisito", (req, res) => {
    var data = req.body;
    const ref = db.database().ref(`Admisiones/Niveles/${data.id}/requisitos`)
    ref.push(data.requisitos).then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });
})


admisionRouter.post("/delete-nivel-admin", (req, res) => {
    var data = req.body;
    console.log(data)
    var update = db.database().ref(`Admisiones/Niveles/${data.id}`)
    update.remove().then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });

})


admisionRouter.post("/delete-requisito", (req, res) => {
    var data = req.body;
    console.log(data)
    var update = db.database().ref(`Admisiones/Niveles/${data.id}/requisitos/${data.idReq}`)
    update.remove().then((result) => {
        res.send(result);
    }).catch((error) => {
        // The write failed...
        res.send(error);
    });

})


module.exports = admisionRouter;