const mysql = require('mysql')
require('dotenv').config(); 


const db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, 
}

const db = mysql.createPool(db_config);



module.exports = db