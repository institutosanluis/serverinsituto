const express = require('express');
const fs = require('fs');

const naveRouter = express.Router();

const isController = require('../controller/infraestructura');

naveRouter.get('/all', async (req, res) => {
    try {
        const result = await isController.getAll();
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: result.rows
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

naveRouter.post('/add', async (req, res) => {
    console.log("dA ", req.body)
    const insert = await isController.insert(req.body)
    if (insert === undefined) {
        res.json({
            error: 'Error, en el guardado'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: insert
        });
    }
})

module.exports = naveRouter;