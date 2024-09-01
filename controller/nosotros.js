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

const updateNoso = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE nosotros SET  titulo = $1, descripcion =$2, maxcol= $3, ubicacion= $4, url = $5,  estado= $6 where id= $7",[data.titulo, data.descripcion, data.maxcol, data.ubicacion, data.url, data.estado, data.id], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};
module.exports = {
    getNosotros,
    insertNoso,
    updateNoso
}