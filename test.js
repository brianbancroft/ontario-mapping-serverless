const {Client} = require('pg')

const test = async () => {
  console.log('PostgreSQL GET Function')
  const conn = 'postgres://user:pass@rdsResourceName.rdsResourceHash.us-east-1.rds.amazonaws.com/dbName'
  const client = new Client(conn)
  const queryString = `SELECT count(*) FROM census_lda;`

  await client.connect()

  const res = await client.query(queryString)
  console.log(res.rows[0])
  await client.end()
};

const conn = 'postgres://user:pass@rdsResourceName.rdsResourceHash.us-east-1.rds.amazonaws.com/dbName';
const conn = 'postgres://brianbancroft:G6IDNv7K@ontarioelections.cmfdjvezumip.us-east-1.rds.amazonaws.com/ontarioelection';
