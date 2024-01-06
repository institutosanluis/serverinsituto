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