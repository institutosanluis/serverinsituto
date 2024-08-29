const express = require('express');
const fs = require('fs');

const portaRouter = express.Router();

const portaController = require('../controller/portadas');

portaRouter.get('/all', async (req, res) => {
    try {
        const porta = await portaController.getPortadas()
        if (porta === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: porta.rows
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

portaRouter.get('/modulo/:value', async (req, res) => {
    try {
        const porta = await portaController.getPortadaModulo(req.params.value)
        if (porta === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: porta.rows[0]
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

portaRouter.get('/byId/:id', async (req, res) => {
    try {
        const porta = await portaController.getPortadasById(req.params.id)
        if (porta === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: porta.rows[0]
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

portaRouter.post('/add', async (req, res) => {

    const insert = await portaController.insert(req.body)
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

portaRouter.post('/edit-portada', async (req, res) => {
   
    const insert = await portaController.updatePortada(req.body)
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


module.exports = portaRouter;
