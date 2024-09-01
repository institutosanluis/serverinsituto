const express = require('express');

const portaRouter = require('../routes/pos_portadas');
const menuRouter = require('../routes/pos_menu');
const nosoRouter = require('../routes/pos_nosotros');
const infraRouter = require('../routes/pos_infraestructura');
const anunRouter = require('../routes//pos_anuncios');
const niveRouter = require('../routes/pos_niveles');
const franRouter = require('../routes/pos_franjas');
const notiRouter = require('../routes/pos_noticias');
const evenRouter = require('../routes/pos_eventos');

/*
const informacionRouter = require('../routes/informacion');
const nivelesRouter = require('../routes/niveles');

const reseniasRouter = require('../routes/resenias');
const eventosRouter = require('../routes/eventos');
const portadasRouter = require('../routes/portadas');
const admisionRouter = require('../routes/admisiones');
const conexionRouter = require('../routes/conexion');*/


const apiRouter = express.Router();

/*
apiRouter.use('/informacion', informacionRouter);
apiRouter.use('/niveles', nivelesRouter);
apiRouter.use('/eventos', eventosRouter);
apiRouter.use('/portadas', portadasRouter);
apiRouter.use('/admision', admisionRouter);
apiRouter.use('/resenias', reseniasRouter);
apiRouter.use('/connect', conexionRouter);*/


//Conexion Postgressql
apiRouter.use('/porta', portaRouter);
apiRouter.use('/menu', menuRouter);
apiRouter.use('/noso', nosoRouter);
apiRouter.use('/nive', niveRouter);
apiRouter.use('/infra', infraRouter);
apiRouter.use('/anun', anunRouter);
apiRouter.use('/fran', franRouter);
apiRouter.use('/noti', notiRouter);
apiRouter.use('/even', evenRouter);

module.exports = apiRouter;