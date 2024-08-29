const connection = require('../postgresql');

const getNosotros = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM nosotros ORDER BY id DESC;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertNoso = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO nosotros (titulo, descripcion, maxcol, ubicacion, url, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",[data.titulo, data.descripcion, data.maxcol, data.ubicacion, data.url, data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

module.exports = {
    getNosotros,
    insertNoso
}