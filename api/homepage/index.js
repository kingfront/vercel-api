import { PSDB } from 'planetscale-node'
const conn = new PSDB('main')
module.exports = (req, res) => {
  try {
    const [getRows, _] = await conn.query('select * from category')
    res.statusCode = 200
    res.json(getRows)
  } catch (e) {
    error = new Error('An error occurred while connecting to the database')
    error.status = 500
    error.info = { message: 'An error occurred while connecting to the database' }
    throw error
  }
  res.send(res)
}