const connection = require('../postgresql');

const getAll = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT fecha FROM calendario
                where idnivel = ${id} 
                ORDER BY fecha`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getNivelId = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM calendario
                where idnivel = ${data.id} 
                AND fecha = '${data.fecha}' 
                ORDER BY fecha`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};


const insert = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO calendario (
                   idnivel ,
                    titulo ,
                    descripcion ,
                    fecha ,
                    hora_ini ,
                    hora_fin ,
                    estado) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [
            Number(data.idnivel),
            data.titulo,
            data.descripcion,
            data.fecha,
            data.hora_ini,
            data.hora_fin,
            data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};




module.exports = {
    getAll,
    insert,
    getNivelId 
}