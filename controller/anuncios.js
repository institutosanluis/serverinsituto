const connection = require('../postgresql');

const getAll = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM anuncios WHERE estado = true;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const deleteById = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `delete from anuncios where id=$1`,[id], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getTotal = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "select count(*) total from anuncios;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insert = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO anuncios(	
                modulo,
                titulo,
                descripcion,
                col_text,
                col_img ,
                url,
                estado, 
                tipoanuncio)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [data.modulo, data.titulo, data.descripcion, data.col_text, data.col_img, data.url, data.estado, data.tipoanuncio], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

module.exports = {
    getAll,
    insert,
    getTotal,
    deleteById 
}