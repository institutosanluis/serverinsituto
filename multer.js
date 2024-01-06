const multer = require('multer');

//specify
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './profile')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

//validar archivo
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {

        cb({ message: 'Unsupported File Fomat' }, false)
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 },
    fileFilter: fileFilter
})

module.exports = upload;