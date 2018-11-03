const Logger = require('../utils/Logger');
const { getPool } = require('../DBHelper');

const FETCH_ONE_USER_SQL = 'SELECT * FROM users WHERE username = ? LIMIT 1';

/* Fetching one user based on its id */
exports.fetchOneUser = username => new Promise((resolve, reject) => {
  // Return the password to allow bcrybt checking. It has to be deleted before return a user object to the user's browser.
  getPool().query(FETCH_ONE_USER_SQL, [username], (err, results, fields) => {
    if (err) {
      Logger.error(FETCH_ONE_USER_SQL, err);
      reject(err);
    }
    resolve(results);
  });
});

// exports.findUserWithUsername = username => promiseFindResult(db => db.collection(COLLECTION_USER)
//   .find({ username }, {
//     email: 0, facebookId: 0, googleId: 0,
//   }));

// exports.registerNewUser = user => new Promise((resolve, reject) => {
//   getDB().collection(COLLECTION_USER)
//     .insertOne(user, (err, response) => {
//       if (err) reject(err);
//       resolve(response.ops[0]);
//     });
// });
