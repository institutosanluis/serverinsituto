const express = require('express');
const informacionRouter = require('../routes/informacion');
const nivelesRouter = require('../routes/niveles');
const eventosRouter = require('../routes/eventos');
const portadasRouter = require('../routes/portadas');
const admisionRouter = require('../routes/admisiones');
const conexionRouter = require('../routes/conexion');


const apiRouter = express.Router();


apiRouter.use('/informacion', informacionRouter);
apiRouter.use('/niveles', nivelesRouter);
apiRouter.use('/eventos', eventosRouter);
apiRouter.use('/portadas', portadasRouter);
apiRouter.use('/admision', admisionRouter);
apiRouter.use('/connect', conexionRouter);

module.exports = apiRouter;