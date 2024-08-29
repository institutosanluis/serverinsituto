// Imports
require('dotenv').config();
const { Pool } = require('pg');
const express = require("express");
//const connection = require('./mysql');
const multer = require('multer')
const fs = require('fs')
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { uploadImage, uploadProduct, uploadPagos, uploadChatSoporte } = require('./firebase');
//-----------------------------------------------------------------------
const app = express();

app.use(express.json({limit: '150mb'}));
app.use(express.urlencoded({limit: '150mb', extended: true, parameterLimit: 150000}));

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


const apiRoutes = require('./startup/routes');

app.use('/api', apiRoutes);

// Arrancar Servidor
// set port, listen for requests
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});