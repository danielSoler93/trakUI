const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'miniaoshi1',
  port: 5432,
});

async function get_field(field) {
  try {
   var query = 'SELECT physio_signupmodel.' + field + ' FROM physio_signupmodel ORDER BY id ASC'
   results =  await pool.query(query)
   return results["rows"]
  } catch (e) {
   throw e;
   }
}

module.exports = {
  get_field,
}