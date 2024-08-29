const express = require('express');
const connection = require('../postgresql');
const fs = require('fs');

const isRouter = express.Router();

const isController = require('../controller/noticias');

isRouter.get('/all', async (req, res) => {
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

isRouter.get('/galeria-noti/:id', async (req, res) => {
    try {
        const result = await isController.getGaleriaNoti(req.params.id)
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

isRouter.get('/top5', async (req, res) => {
    try {
        const result = await isController.getAllTop5()
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

isRouter.get('/franja/:modulo/:posicion', async (req, res) => {
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

isRouter.post('/add', async (req, res) => {
    try {
        const { publicacion, fecha, imagenes, estado } = req.body;
        connection.query('BEGIN')
        const insert = await isController.insert(publicacion, fecha, estado)

        const id = insert.rows[0].id;
        for (const imageBase64 of imagenes) {
            const foto = await isController.insertGaleria(id, imageBase64.url, fecha)
        }
        connection.query('COMMIT');
        res.status(201).json({
            success: true,
            message: 'Notice saved successfully'
        });

    } catch (error) {
        console.error('Error saving noticia:', error);
        connection.query('ROLLBACK');
        res.status(500).json({
            success: false,
            message: 'Error saving noticia'
        });
    }
})

isRouter.put('/update-franja', async (req, res) => {

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


module.exports = isRouter;