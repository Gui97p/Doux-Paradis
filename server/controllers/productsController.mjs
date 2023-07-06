import connection from '../src/connection.mjs';

class ProductsController {
  async getAll(req, res) {
    const [products] = await connection.execute('SELECT * FROM products');

    return res.json({products});
  }
}

export default new ProductsController();
