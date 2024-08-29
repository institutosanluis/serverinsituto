const connection = require('../postgresql');

const getPortadas = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT id, modulo, titulo,  url, href, estado FROM portada WHERE estado=true;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getPortadasById = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM portada WHERE id=$1",[id], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getPortadaModulo = (value) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM portada WHERE modulo = '${value}';`, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};


const insert = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO portada (modulo,
	titulo,
	top,
	left_,
	fontSize,
	color,
 	backgroundColor,
	position,
	padding,
	borderRadius,
	url,
	href,
	estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`, [data.modulo,
        data.titulo,
        data.top,
        data.left_,
        data.fontSize,
        data.color,
        data.backgroundColor,
        data.position,
        data.padding,
        data.borderRadius,
        data.url,
        data.href,
        data.estado], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};


const updatePortada = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE portada SET modulo=$1,
	titulo =$2,
	top =$3,
	left_ =$4,
	fontSize =$5,
	color=$6,
 	backgroundColor =$7,
	position =$8,
	padding =$9,
	borderRadius=$10,
	url =$11,
	href=$12,
	estado=$13 WHERE id= ${data.id}`, [data.modulo,
        data.titulo,
        data.top,
        data.left_,
        data.fontSize,
        data.color,
        data.backgroundColor,
        data.position,
        data.padding,
        data.borderRadius,
        data.url,
        data.href,
        data.estado], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

module.exports = {
    getPortadas,
    insert,
    getPortadaModulo,
    getPortadasById,
    updatePortada
}