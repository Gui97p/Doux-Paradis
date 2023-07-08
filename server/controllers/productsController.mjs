import productsSchema from "../models/productsSchema.mjs";

class ProductsController {
  async getAllProducts(req, res) {
    var products = [];
    var ProductsModel = productsSchema.model;

    const docs = await ProductsModel.find()
    docs.map(doc => products.push({
      id: doc.id,
      name: doc.name,
      price: doc.price,
      image: doc.image
    }))

    return res.status(200).json(products);
  }

  async insertProduct(req, res) {
    var { name, price, image } = req.body;
    const Product = productsSchema.model;

    var id = null;
    const docs = await User.find().limit(1).sort({$natural:-1})
    .catch(e => {
      res.status(400).json('try again')
      throw e;
    });
    docs.map(doc => id = doc.id);
    id = id++;

    name = name.trim();
    image = name.trim();

    new Product({
      id: id,
      name: name,
      price: price,
      image: image
    })
    .save()
    
    .then(() => res.status(200).json('ok'))

    .catch(e => {
      res.status(400).json('Error on saving product');
      throw e;
    });
  }
}

export default new ProductsController();
