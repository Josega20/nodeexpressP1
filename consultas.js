const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: '16894832_Jg',
database: 'likeme',
allowExitOnIdle: true
})

const agregarPost = async (titulo, img, descripcion, likes) => {
    const consulta = "INSERT INTO posts (id,titulo, img, descripcion, likes) values (DEFAULT, $1, $2,$3,$4)"
 
    const result = await pool.query(consulta, [titulo, img, descripcion, likes])
    console.log("Post agregado")
    }


const obtenerPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    
    return rows
    }
    obtenerPost()


    module.exports = { agregarPost, obtenerPost}