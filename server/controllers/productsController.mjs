import { model } from "mongoose";
import productsSchema from '../models/productsSchema.mjs'

class ProductsController {
  async getAllProducts(req, res) {
    var products = [];
    const ProductsModel = model('products');

    const docs = await ProductsModel.find()
    docs.map(doc => products.push({
      id: doc.id,
      name: doc.name,
      price: doc.price,
      image: doc.image
    }))

    res.append('X-Total-Count', products.length);
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');
    return res.status(200).json(products);
  }

  async GetOneProduct(req, res) {
    var { id } = req.params;
    const productsModel = model('products');

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(406).json('ID not valid');
    }

    const docs = await productsModel.find({ id: id });
    docs.map(doc => res.status(200).json({
      id: doc.id,
      name: doc.name,
      price: doc.price,
      image: doc.image
    }));
    try {
      res.status(400).json("Product doesn't exit");
    } catch {}
  }

  async insertProduct(req, res) {
    var { name, price, image } = req.body;
    const Product = model('products');

    var id = null;
    const docs = await Product.find().limit(1).sort({$natural:-1})
    .catch(e => {
      id = 1
    });

    if (docs !== null && docs !== undefined) docs.map(doc => id = doc.id);
    id = id === null? 1 : id + 1;

    if (typeof name != 'string') return res.status(400).json('Name passed is not valid');
    if (typeof image != 'string') return res.status(400).json('Image passed is not valid');

    name = name.trim();
    if (typeof price == 'string') {
      price = Number(price)
      if (price === NaN || price === undefined || price === null) return res.status(400).json('Price passed is not valid');
    }
    image = image.trim();

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
    });
  }

  async updateProduct(req, res) {
    var { id } = req.params;
    var { name, price, image } = req.body;
    const productModel = model('products');

    var update = {};

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(406).json('ID not valid');
    }

    if (typeof name === "string") {
      if (name.trim() !== '') {
        update["name"] = name;
      }
    }

    if (typeof image === "string") {
      if (image.trim() !== '') {
        update["image"] = image;
      }
    }

    price = Number(price)
    if (typeof price === 'number' && price !== NaN && price !== undefined && price !== null) {
      update["price"] = price;
    }

    const filter = { id: id };

    await productModel.findOneAndUpdate(filter, update)
    .then(() => {
      res.status(200).json('ok')
    })
    .catch(e => {
      res.status(400).json('Error on updating product');
    });
  }

  async deleteProduct(req, res) {
    var { id } = req.params;
    const productsModel = model('products');

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(406).json('ID not valid');
    }

    await productsModel.findOneAndDelete({id: id})
    .then(() => {
      res.status(200).json('ok')
    })
    .catch(e => {
      res.status(400).json('Error on deleting Product');
    })
  }
}

export default new ProductsController();
