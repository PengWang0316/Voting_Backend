const Logger = require('../utils/Logger');
const { getPool } = require('../DBHelper');

const SQL = 'SELECT * FROM candidates';

exports.fetchCandidatesInfo = () => new Promise((resolve, reject) => {
  getPool().query(SQL, (err, results, fields) => {
    if (err) {
      Logger.error(SQL, err);
      reject(err);
    }
    resolve(results);
  });
});
