const connection = require('../postgresql');

const getAll = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM infraestructura WHERE estado = true;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insert = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO infraestructura (titulo, descripcion, maxcol, url, estado) VALUES ($1, $2, $3, $4, $5) RETURNING *",[data.titulo, data.descripcion, data.maxcol, data.url, data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

module.exports = {
    getAll,
    insert
}