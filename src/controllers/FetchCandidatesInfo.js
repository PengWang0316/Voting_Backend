const Logger = require('../utils/Logger');
const { getPool } = require('../DBHelper');

const SQL = 'SELECT * FROM candidates';

module.exports = (req, res) => {
  getPool().query(SQL, (err, results, fields) => {
    if (err) {
      Logger.error(SQL, err);
      throw err;
    }
    res.json(results);
  });
};
