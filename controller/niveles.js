const connection = require('../postgresql');

const getNiveles = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM niveles;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getMensualidades = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM mensualidades;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const deleteMensualidad = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `delete from mensualidades
             where id=$1;`, [id], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getMensualidadesByNivel = (idnivel) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM mensualidades WHERE idnivel=$1;",[idnivel], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};


const getRequisitosNiveles = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM requisitos;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getNivelesAll = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "select n.id idnivel, n.titulo from niveles n", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getGradosCarrera = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT gc.* FROM gradCarrera gc
                INNER JOIN carreras c
                ON gc.idcarrera = c.id
                WHERE c.id=${id}`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getGrados = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM grados;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getCursos = (carrera) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM curso
                WHERE idcarrera =${carrera};`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
}

const getCursosCarreraById = (idcar, idgra) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM curso
                WHERE idcarrera =$1 and idgrado= $2;`, [idcar, idgra], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
}

const getCarreras = () => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM carreras;", (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const updateCarreras = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE carreras SET url=$1 WHERE id= $2;", [data.url, data.id], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getGradosCarreraId = (idNivel, limit) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `
            SELECT id, idCarrera, titulo, descripcion 
	            FROM gradCarrera WHERE idCarrera =${idNivel} 
	                order by idCarrera desc  limit ${limit}`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const getCarrerasId = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM carreras WHERE id= ${id};`, (err, rows) => {
                if (err) reject(err)
                resolve(rows.rows)
            });
    });
};

const getNivelesId = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM niveles WHERE id = ${id}`, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const getGradosId = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT g.* FROM niveles n
                INNER JOIN grados g 
                ON n.id = g.idnivel
                WHERE n.id =${id};`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};



const getGradoId = (idgrado) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `	SELECT g.* FROM niveles n
                INNER JOIN grados g 
                ON n.id = g.idnivel
                WHERE g.id =${idgrado};`, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const updateGradoId = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE grados SET url = $1 WHERE id= $2 and idnivel=$3`, [data.url, data.id, data.idnivel], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertNiveles = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO niveles (titulo, descripcion, textboton, url, estado) VALUES ($1, $2, $3, $4, $5) RETURNING *", [data.titulo, data.descripcion, data.textboton, data.url, data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const updateNivel = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE niveles SET titulo = $1, descripcion = $2, textboton= $3 ,  url= $4 WHERE id= $5", [data.titulo, data.descripcion, data.textboton, data.url, data.id], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertGrado = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO grados ( idnivel, titulo, descripcion, textboton, url, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [data.idnivel, data.titulo, data.descripcion, data.textboton, data.url, data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertGradoCarrera = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO gradCarrera ( idCarrera, titulo, descripcion, textboton, url, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [data.idnivel, data.titulo, data.descripcion, data.textboton, data.url, data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertCarrera = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO carreras ( 
            idnivel,	
            titulo,
            orientacion,
            anios,
            descripcion,
            textboton,
            url,
            estado
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [data.idnivel, data.titulo,
        data.orientacion,
        data.anios,
        data.descripcion,
        data.textboton,
        data.url,
        data.estado], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const insertCurso = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO curso (idcarrera, idgrado, curso, estado) VALUES ($1, $2, $3, $4) RETURNING *", [data.idcarrera, data.idgrado, data.curso, data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const updateUrlGrado = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE grados SET url= $1 where id = $2;`, [data.img, data.id], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const deleteRequisito = (id) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `delete from requisitos
             where id=$1;`, [id], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    });
};

const insertRequisitosNiveles = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO requisitos
            (idnivel,
                requerimiento,
                icon,
                estado) 
            VALUES 
            ($1, $2, $3, $4) RETURNING *`,
            [data.idnivel,
            data.requerimiento,
            data.icon,
            data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};

const insertMensualidades = (data) => { //getByEmail
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO mensualidades
            (	idnivel,
	mensaje,
	precio,
	oferta, 
	estado ) 
            VALUES 
            ($1, $2, $3, $4, $5) RETURNING *`,
            [data.idnivel,
            data.mensaje,
            data.precio,
            data.oferta,
            data.estado], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            });
    });
};


module.exports = {
    getNiveles,
    getNivelesId,
    getCarrerasId,
    insertCurso,
    getGradosCarreraId,
    insertGradoCarrera,
    getGrados,
    getGradosId,
    insertNiveles,
    insertGrado,
    getCarreras,
    getGradoId,
    getCarreras,
    insertCarrera,
    getCursos,
    updateUrlGrado,
    getGradosCarrera,
    getNivelesAll,
    insertRequisitosNiveles,
    getRequisitosNiveles,
    insertMensualidades,
    getMensualidades,
    updateNivel,
    updateGradoId,
    getCursosCarreraById,
    updateCarreras,
    deleteRequisito,
    getMensualidadesByNivel,
    deleteMensualidad
}