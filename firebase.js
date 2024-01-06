require('dotenv').config();
const admin = require("firebase-admin");
const BUCKET = 'instituto-sanluis.appspot.com'  //gs://storage-imge.appspot.com
const db =admin.initializeApp({
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    storageBucket: BUCKET,
    databaseURL: "https://instituto-sanluis-default-rtdb.firebaseio.com"
});

const administrador = db.storage().bucket();

const bucket = db.storage().bucket();

//Cargar imagenes para perfil
const uploadImage = (req, res, next) => {
    try {
        if (!req.file) return next();
        const imagen = req.file;
        const nombreArquivo = Date.now() + "." + imagen.originalname.split(".").pop();
        const file = bucket.file('Carreras/' + nombreArquivo);
        const stream = file.createWriteStream({
            metadata: {contentType: imagen.mimetype}
        })
        stream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        })
        stream.on("finish", async () => {
            //archivo publico
            await file.makePublic().then(() => {
                const url = file.publicUrl()
                req.file.firebaseUrl = url;
                req.body.id_photo = nombreArquivo;
            });
            next();
        })
        stream.end(imagen.buffer);
    } catch (error) {
    }
}

const uploadChatSoporte = (req, res, next) => {
    try {
        if (!req.file) return next();
        const imagen = req.file;
        const nombreArquivo = Date.now() + "." + imagen.originalname.split(".").pop();
        const file = bucket.file('ChatSoporte/' + nombreArquivo);
        const stream = file.createWriteStream({
            metadata: {contentType: imagen.mimetype}
        })
        stream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        })
        stream.on("finish", async () => {
            //archivo publico
            await file.makePublic().then(() => {
                const url = file.publicUrl()
                req.file.firebaseUrl = url;
                req.body.id_photo = nombreArquivo;
            });
            next();
        })
        stream.end(imagen.buffer);
    } catch (error) {
    }
}

//    const file = bucket.file('Products/Categoria_' + req.body.categoria + '/' + nombreArquivo);
const uploadProduct = (req, res, next) => {

    try {
        if (!req.file) return next();
        const imagen = req.file;
        const nombreArquivo = Date.now() + "_" + imagen.originalname.split(".").pop();
        const file = bucket.file('Products/Categoria_' + req.body.categoria + '/' + nombreArquivo);
        const stream = file.createWriteStream({
            metadata: {
                contentType: imagen.mimetype,
            }
        })
        stream.on("error", () => {
            res.status(500).send({ message: err.message });
        })
        stream.on("finish", async () => {
            //archivo publico
            await file.makePublic().then(() => {
                const url = file.publicUrl()
                req.file.firebaseUrl = url;
                req.body.id_photo = nombreArquivo;
            });
            next();
        })
        stream.end(imagen.buffer);
    } catch (error) {

    }

}

const uploadPagos = (req, res, next) => {
    if (!req.file) return next();
    const imagen = req.file;
    const nombreArquivo = Date.now() + "_" + imagen.originalname;
    const file = bucket.file('Pagos/' + nombreArquivo);
    const stream = file.createWriteStream({
        metadata: {
            contentType: imagen.mimetype,
        }
    })

    stream.on("error", () => {
        console.error(error)
    })

    stream.on("finish", async () => {
        //archivo publico
        await file.makePublic().then(() => {
            const url = file.publicUrl()
            req.file.firebaseUrl = url;
            req.body.id_photo = nombreArquivo;
        });
        next();
    })

    stream.end(imagen.buffer);
}

const uploadImageToStorage = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No image file');
        }

        const nombreArquivo = `${file.originalname}_${Date.now()}`;
        let fileUpload = bucket.file('Pagos/' + nombreArquivo);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', async () => {
            // The public URL can be used to directly access the file via HTTP.
            await file.makePublic().then(() => {
                const url = file.publicUrl()
                req.file.firebaseUrl = url;
                req.body.id_photo = nombreArquivo;
            });
            next();
        });

        blobStream.end(file.buffer);
    });
}



module.exports = {
    db,
    uploadImage,
    uploadProduct,
    uploadPagos,
    uploadImageToStorage,
    uploadChatSoporte,
    administrador
};