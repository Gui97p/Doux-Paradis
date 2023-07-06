import connection from '../src/connection.mjs';

class UserController {
  async register(req, res) {
    await connection.execute('INSERT INTO ');

    return res.json('register');
  }

  async login(req, res) {
    return res.json('login');
  }
}

export default new UserController();
