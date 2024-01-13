const express = require('express');
const informacionRouter = require('../routes/informacion');
const nivelesRouter = require('../routes/niveles');
const portadasRouter = require('../routes/portadas');


const apiRouter = express.Router();


apiRouter.use('/informacion', informacionRouter);
apiRouter.use('/niveles', nivelesRouter);
apiRouter.use('/portadas', portadasRouter);

module.exports = apiRouter;