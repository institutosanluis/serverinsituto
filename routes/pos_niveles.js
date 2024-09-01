const express = require('express');
const fs = require('fs');

const niveRouter = express.Router();

const niveController = require('../controller/niveles');

niveRouter.get('/all', async (req, res) => {
    try {
        const result = await niveController.getNiveles()
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

niveRouter.get('/niveles', async (req, res) => {
    try {
        const result = await niveController.getNivelesAll()
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

niveRouter.get('/requisitos', async (req, res) => {
    try {
        const result = await niveController.getRequisitosNiveles()
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


niveRouter.get('/carreras', async (req, res) => {
    try {
        const result = await niveController.getCarreras()
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

niveRouter.get('/grados-carrera/:id', async (req, res) => {
    try {
        const result = await niveController.getGradosCarrera(req.params.id)
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

niveRouter.get('/grados-basico', async (req, res) => {
    try {
        const result = await niveController.getGrados()
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

niveRouter.get('/cursos/:carrera', async (req, res) => {
    try {
        const result = await niveController.getCursos(req.params.carrera)
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

niveRouter.get('/cursos-carrera/:carrera/:grado', async (req, res) => {
    try {
        const result = await niveController.getCursosCarreraById(req.params.carrera, req.params.grado)
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

niveRouter.get('/carreras/:id', async (req, res) => {
    try {
        const result = await niveController.getCarrerasId(req.params.id)
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: result[0]
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})


niveRouter.get('/mensualidad-nivel/:id', async (req, res) => {
    try {
        const result = await niveController.getMensualidadesByNivel(req.params.id)
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'SUCCESSFULLY',
                result: result[0]
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})


niveRouter.put('/carreras-foto/:id', async (req, res) => {
    try {
        const result = await niveController.updateCarreras(req.body)
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'UPDATE SUCCESSFULLY'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})



niveRouter.get('/gradoId=:id', async (req, res) => {
    try {
        const result = await niveController.getGradoId(req.params.id,)
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

niveRouter.put('/update-gradoId/:id', async (req, res) => {
    try {
        const result = await niveController.updateGradoId(req.body)
        if (result === undefined) {
            res.json({
                error: 'Error, Datos no encontrados'
            })
        } else {
            return res.status(200).send({
                msg: 'UPDATE SUCCESSFULLY',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
})

niveRouter.get('/grados/:nivel/:limit', async (req, res) => {
    try {
        const result = await niveController.getGradosCarreraId(req.params.nivel, req.params.limit)
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

niveRouter.get('/gradosCarrera/:nivel/:limit', async (req, res) => {
    try {
        const result = await niveController.getGradosCarreraId(req.params.nivel, req.params.limit)
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

niveRouter.get('/id/:id', async (req, res) => {
    try {
        const result = await niveController.getNivelesId(req.params.id)
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

niveRouter.get('/allGrados=:id', async (req, res) => {
    try {
        const result = await niveController.getGradosId(req.params.id)
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

niveRouter.get('/grado/:id', async (req, res) => {
    try {
        const result = await niveController.getNivelesId(req.params.id)
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

niveRouter.get('/mensualidades', async (req, res) => {
    try {
        const result = await niveController.getMensualidades()
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

niveRouter.delete('/delete-mensualidad/:id', async (req, res) => {
    try {
        const result = await niveController.deleteMensualidad(req.params.id)
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



niveRouter.post('/add', async (req, res) => {
   
    const insert = await niveController.insertNiveles(req.body)
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

niveRouter.put('/updateNivel/:id', async (req, res) => {
   
    const insert = await niveController.updateNivel(req.body)
    if (insert === undefined) {
        res.json({
            error: 'Error,en le guardado'
        })
    } else {
        return res.status(200).send({
            msg: 'UPDATE SUCCESSFULLY'
        });
    }
})

niveRouter.post('/add-requisitos', async (req, res) => {
 
    const insert = await niveController.insertRequisitosNiveles(req.body)
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

niveRouter.delete('/delete-requisitos/:id', async (req, res) => {
 console.log(req.params.id)
    const insert = await niveController.deleteRequisito(req.params.id)
    if (insert === undefined) {
        res.json({
            error: 'Error,en le guardado'
        })
    } else {
        return res.status(200).send({
            msg: 'DELETE SUCCESSFULLY',
        });
    }
})

niveRouter.post('/add-mensualidades', async (req, res) => {
   
    const insert = await niveController.insertMensualidades(req.body)
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

niveRouter.post('/addCurso', async (req, res) => {
    
    const insert = await niveController.insertCurso(req.body)
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

niveRouter.put('/updateUrlGrado', async (req, res) => {
  
    const insert = await niveController.updateUrlGrado(req.body)
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

niveRouter.post('/addGrado', async (req, res) => {
   
    const insert = await niveController.insertGrado(req.body)
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

niveRouter.post('/addGradoCarrera', async (req, res) => {
 
    const insert = await niveController.insertGradoCarrera(req.body)
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

niveRouter.post('/addCarrera', async (req, res) => {
  
    const insert = await niveController.insertCarrera(req.body)
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

module.exports = niveRouter;