

const { Client } = require('pg');

exports.handler = async function(event, context, callback) {
  console.log('PostgreSQL GET Function')
  const conn = 'postgres://user:pass@rdsResourceName.rdsResourceHash.us-east-1.rds.amazonaws.com/dbName'
  const client = new Client(conn)
  const queryString = `SELECT count(*) FROM census_lda;`

  await client.connect()

  const res = await client.query(queryString)
  console.log(res.rows[0])
  await client.end()
  callback(null, res.rows[0])
}


const conn = 'postgres://user:pass@rdsResourceName.rdsResourceHash.us-east-1.rds.amazonaws.com/dbName'
