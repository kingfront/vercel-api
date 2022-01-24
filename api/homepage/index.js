import {PSDB} from 'planetscale-node';
const conn = new PSDB('main')
module.exports = async (req, res)  => {
  try {
    const [getRows, _] = await conn.query('select * from category')
    res.statusCode = 200
    res.json(getRows)
  } catch (e) {
    throw new Error('An error occurred while connecting to the database')
  }
  res.send(res)
}