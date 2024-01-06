const express = require('express');
const { db } = require('../firebase')

const informacionRouter = express.Router();

informacionRouter.get('/info-establecimiento', async (req, res) => {
    const ref = db.database().ref(`Establecimiento/Informacion`);
    ref.once('value', snapshot => {
        res.send(snapshot.val());
    });
})


module.exports = informacionRouter;