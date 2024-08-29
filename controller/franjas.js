const connection = require('../postgresql');

const getAll = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM franjas ORDER BY estado desc;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getById = (modulo, posicion) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM franjas where modulo= '${modulo}' AND posicion= '${posicion}' AND estado= true`, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insert = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO eventos (modulo,
                titulo ,
                posicion,
                color,
                alto ,
                url ,
                key_url,
                estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [data.modulo, data.titulo, data.posicion, data.color, data.alto, data.url, data.key_url, data.estado], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const update = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `update franjas SET modulo='${data.modulo}',
                titulo = '${data.titulo}',
                posicion= '${data.posicion}',
                color='${data.color}',
                alto ='${data.alto}',
                url ='${data.url}',
                key_url='${data.key_url}',
                estado=${data.estado} WHERE id=${data.id}`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

module.exports = {
    getAll,
    getById,
    insert,
    update 
}