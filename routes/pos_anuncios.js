const express = require('express');
const fs = require('fs');

const anunRouter = express.Router();

const isController = require('../controller/anuncios');

anunRouter.get('/all', async (req, res) => {
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

anunRouter.delete('/delete/:id', async (req, res) => {
    try {
        const result = await isController.deleteById(req.params.id);
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
                return res.status(200).send({
                    msg: 'DELETE SUCCESSFULLY'
                });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

anunRouter.get('/total', async (req, res) => {
    try {
        const result = await isController.getTotal();
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            var isVal = result.rows[0];
            var data = false;
            if (isVal.total > 0) {
                data = true;
            }
                return res.status(200).send({
                    msg: 'SUCCESSFULLY',
                    result: data
                });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

anunRouter.post('/add', async (req, res) => {
    
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

module.exports = anunRouter;
