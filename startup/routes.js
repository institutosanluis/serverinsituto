const express = require('express');
const informacionRouter = require('../routes/informacion');

const apiRouter = express.Router();


apiRouter.use('/informacion', informacionRouter);

module.exports = apiRouter;