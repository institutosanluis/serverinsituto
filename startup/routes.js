const express = require('express');
const informacionRouter = require('../routes/informacion');
const nivelesRouter = require('../routes/niveles');


const apiRouter = express.Router();


apiRouter.use('/informacion', informacionRouter);
apiRouter.use('/niveles', nivelesRouter);

module.exports = apiRouter;