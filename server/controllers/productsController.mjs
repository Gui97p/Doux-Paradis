import { model } from "mongoose";
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

  async GetOneProduct(req, res) {
    var { id } = req.params;
    var productsModel = model('products');

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(400).json('ID not valid');
    }

    let executed = false
    const docs = await productsModel.find({ id: id });
    docs.map(doc => res.status(200).json({
      id: doc.id,
      name: doc.name,
      price: doc.price,
      image: doc.image
    }));
    res.status(400).json("Product doesn't exit");
  }

  async insertProduct(req, res) {
    var { name, price, image } = req.body;
    const Product = productsSchema.model;

    var id = null;
    const docs = await Product.find().limit(1).sort({$natural:-1})
    .catch(e => {
      res.status(400).json('try again')
      throw e;
    });
    docs.map(doc => id = doc.id);
    id = id === null? 1 : id + 1;

    name = name.trim();
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
      throw e;
    });
  }

  async updateProduct(req, res) {
    var { id } = req.params;
    var { name, price, image } = req.body;
    const productModel = model('products');

    var update = {};

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(400).json('ID not valid');
    }

    if (typeof name === "string") {
      if (name.trim() !== '') {
        update["name"] = name;
      }
    }

    if (typeof image === "string") {
      if (image.trim() !== '') {
        update["image"] == image;
      }
    }

    if (typeof price === 'number' && price !== NaN && price !== undefined && price !== null) {
      update["price"] = price;
    }

    const filter = { id: id };

    console.log(filter, update);

    await productModel.findOneAndUpdate(filter, update)
    .then(() => {
      res.status(200).json('ok')
    })
    .catch(e => {
      res.status(400).json('Error on updating product');
      throw e;
    });
  }

  async deleteProduct(req, res) {
    var { id } = req.params;
    const productmodel = model('products');

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(400).json('ID not valid');
    }

    await productmodel.findOneAndDelete({id: id})
    .then(() => {
      res.status(200).json('ok')
    })
    .catch(e => {
      res.status(400).json('Error on deleting Product');
      throw e;
    })
  }
}

export default new ProductsController();
