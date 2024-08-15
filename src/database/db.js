const { connectionString } = require('pg/lib/defaults');
const { Pool } = require('pg');

async function connect(){

    if(global.connection)
        return global.connection.connect();

    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();
    console.log("Criou o pool de conexão");

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectCampanha(){
    const client = await connect();
    const res = await client.query("SELECT * FROM campanha");
    return res.rows;
}

async function insertCampanha(campanha){
    const client = await connect();
    const sql = "INSERT INTO campanha(nome, descricao, imagem, valor) VALUES ($1, $2, $3, $4) "
    const valores = [campanha.nome, campanha.descricao, campanha.imagem, campanha.valor]
    await client.query(sql, valores);
}

async function updateCampanha(id, campanha){
    const client = await connect();
    const sql = "UPDATE campanha SET nome=$1, descricao=$2, imagem=$3, valor=$4 WHERE Id=$5 ";
    const valores = [campanha.nome, campanha.descricao, campanha.imagem, campanha.valor, id];
    await client.query(sql, valores);
}

async function deleteCampanha(id){
    const client = await connect();
    const sql = "DELETE FROM campanha WHERE id=$1";
    const valores = [id];
    await client.query(sql, valores);
}

module.exports = {
    selectCampanha,
    insertCampanha,
    updateCampanha,
    deleteCampanha
}



