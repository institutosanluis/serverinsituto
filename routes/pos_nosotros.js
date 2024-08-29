const express = require('express');
const fs = require('fs');

const nosoRouter = express.Router();

const nosoController = require('../controller/nosotros');

nosoRouter.get('/all', async (req, res) => {
    try {
        const result = await nosoController.getNosotros()
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


nosoRouter.post('/add', async (req, res) => {
  
    const insert = await nosoController.insertNoso(req.body)
    if (insert === undefined) {
        res.json({
            error: 'Error,en le guardado'
        })
    } else {
        return res.status(200).send({
            msg: 'SUCCESSFULLY',
            result: insert
        });
    }
})

module.exports = nosoRouter;
