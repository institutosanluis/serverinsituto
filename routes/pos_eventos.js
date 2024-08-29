const express = require('express');
const connection = require('../postgresql');
const fs = require('fs');

const isRouter = express.Router();

const isController = require('../controller/eventos');

isRouter.get('/all/:id', async (req, res) => {

     try {
         const result = await isController.getAll(req.params.id)
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
 

isRouter.get('/allNivelId/:id/:fecha', async (req, res) => {
   const data = {
    fecha: req.params.fecha,
    id: Number(req.params.id)
   }

   console.log(data)
    try {
        const result = await isController.getNivelId(data)
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

isRouter.post('/add', async (req, res) => {
  
    try {
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
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la data' });
    }
})


module.exports = isRouter;