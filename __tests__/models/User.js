import User from '../../src/models/User';

jest.mock('../../src/DBHelper', () => ({
  getPool: jest.fn().mockReturnValue({
    query: jest.fn().mockImplementation((sql, paramters, cb) => cb(null, [{ id: 1 }], null)),
  }),
}));

jest.mock('../../src/utils/Logger', () => ({ error: jest.fn() }));

// const FETCH_ONE_USER_SQL = 'SELECT * FROM users WHERE username = ? LIMIT 1';


describe('User Model', () => {
  test('fetchOneUser without error', async () => {
    const { error } = require('../../src/utils/Logger');
    const { getPool } = require('../../src/DBHelper');

    const result = await User.fetchOneUser('username');

    expect(getPool).toHaveBeenCalledTimes(1);
    expect(error).not.toHaveBeenCalled();
    expect(result).toEqual([{ id: 1 }]);
  });

  test('fetchOneUser with an error', async () => {
    const { error } = require('../../src/utils/Logger');
    const { getPool } = require('../../src/DBHelper');
    getPool.mockReturnValueOnce({
      query: jest.fn().mockImplementation((sql, paramters, cb) => cb({}, [{ id: 1 }], null)),
    });

    try {
      await User.fetchOneUser('username');
    } catch (err) {
      expect(getPool).toHaveBeenCalledTimes(2);
      expect(error).toHaveBeenCalledTimes(1);
    }
  });
});
