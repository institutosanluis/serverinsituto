const connection = require('../postgresql');

const getAll = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT n.id, n.publicacion,  n.fechahora, 
                (select  g.url 
                from galeria g where g.idnoti= n.id order by  g.idnoti DESC limit 1 ) url
                FROM noticias n
                Order by fechahora desc`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getGaleriaNoti = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM galeria
                WHERE idnoti = ${id}`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getAllTop5 = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT n.id, n.publicacion,  n.fechahora, 
                (select  g.url 
                from galeria g where g.idnoti= n.id order by  g.idnoti DESC limit 1 ) url
                FROM noticias n
                Order by fechahora desc LIMIT 5`, (err, rows) => {
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

const insert = (publicacion, fecha, estado) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO noticias (
                publicacion,
                fechahora,
                estado) VALUES ($1, $2, $3) RETURNING *`, [
            publicacion,
            fecha,
            estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertGaleria = (id, url, fecha) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO galeria (
                idnoti,
                url, 
                fechahora) 
                VALUES ($1, $2, $3) 
                RETURNING *`, [
            id,
            url,
            fecha], (err, rows) => {
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
    getAllTop5,
    getById,
    getGaleriaNoti,
    insert,
    insertGaleria,
    update
}