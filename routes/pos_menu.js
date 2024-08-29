const express = require('express');
const fs = require('fs');

const menuRouter = express.Router();

const isController = require('../controller/menu');

menuRouter.get('/all', async (req, res) => {
    try {
        const result = await isController.getMenu();
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


module.exports = menuRouter;
