const express = require('express');
const fs = require('fs');

const nosoRouter = express.Router();

const isController = require('../controller/franjas');

nosoRouter.get('/all', async (req, res) => {
    try {
        const result = await isController.getAll()
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

nosoRouter.get('/franja/:modulo/:posicion', async (req, res) => {
    try {
        const result = await isController.getById(req.params.modulo, req.params.posicion)
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: result.rows[0]
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

nosoRouter.post('/add', async (req, res) => {
    console.log("dA ", req.body)
    const insert = await isController.insert(req.body)
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

nosoRouter.put('/update-franja', async (req, res) => {
    console.log("dA ", req.body)
    const insert = await isController.update(req.body)
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