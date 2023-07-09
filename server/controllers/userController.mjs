import bcrypt from "bcrypt"
import dotenv from 'dotenv';
import { model } from "mongoose";
import usersSchema from "../models/usersSchema.mjs";
dotenv.config();
class UserController {

  async getAllUsers(req, res) {
    var users = [];
    const usersModel = model('users');

    const docs = await usersModel.find()
    docs.map(doc => users.push({
      id: doc.id,
      name: doc.name,
      email: doc.email,
      phone_number: doc.phone_number,
      isAdmin: doc.isAdmin
    }))

    res.append('X-Total-Count', users.length);
    res.append('Access-Control-Expose-Headers', 'X-Total-Count');
    return res.status(200).json(users);
  }

  async getOneUser(req, res) {
    var { id } = req.params;
    const usersModel = model('users')

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(400).json('ID not valid');
    }

    const docs = await usersModel.find({ id: id });
    docs.map(doc => res.status(200).json({
      id: doc.id,
      name: doc.name,
      email: doc.email,
      phone_number: doc.phone_number,
      isAdmin: doc.isAdmin
    }));
    try {
      res.status(400).json("User doesn't exit");
    } catch {}
  }

  async checkPassword(req, res) {
    res.status(502).json('Not working yet');
    var { id } = req.params;
    var { password } = req.body;
    const usersModel = model('users');

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(400).json('ID not valid');
    }

    var enPassword = null;
    const docs = await usersModel.find({ id: id });
    docs.map(doc => enPassword = doc.password)
    if (enPassword === null) return res.status(400).json('ID not valid');

    const check = bcrypt.compareSync(password.trim(), enPassword);

    return res.status(200).json({ check: check })
  }

  async register(req, res) {
    var { name, password, email, phone_number } = req.body;
    const User = model('users');

    var id = null;
    const docs = await User.find().limit(1).sort({$natural:-1})
    .catch(e => {
      id = 1
    });
    if (docs !== null && docs !== undefined) docs.map(doc => id = doc.id);
    id = id === null? 1 : id + 1;

    name = name.trim();
    password = bcrypt.hashSync(password.trim(), process.env.SALT);
    email = email.trim();
    phone_number = phone_number.trim();

    new User({
      id: id,
      name: name,
      password: password,
      email: email,
      phone_number: phone_number 
    })
    .save()

    .then(() => res.status(200).json('ok'))
    
    .catch(e => {
      res.status(400).json('Error on saving user');
    });
  }

  async login(req, res) {
    return res.status(502).json('Not working yet')
  }

  async updateUser(req, res) {
    var { id } = req.params;
    var { name, password, email, phone_number } = req.body;
    const usersModel = model('users');

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

    if (typeof password === "string") {
      if (password.trim() !== '') {
        update["password"] = bcrypt.hashSync(password.trim(), process.env.SALT);
      }
    }

    if (typeof email === "string") {
      if (email.trim() !== '') {
        update["email"] = email;
      }
    }

    if (typeof phone_number === "string") {
      if (phone_number.trim() !== '') {
        update["phone_number"] = phone_number;
      }
    }

    const filter = { id: id };

    await usersModel.findOneAndUpdate(filter, update)
    .then(() => {
      res.status(200).json('ok')
    })
    .catch(e => {
      res.status(400).json('Error on updating product');
    });
  }

  async deleteUser(req, res) {
    var { id } = req.params;
    const usersModel = model('users');

    id = Number(id);
    if (id === NaN || id === undefined || id === null || id === 0) {
      return res.status(400).json('ID not valid');
    }

    await usersModel.findOneAndDelete({id: id})
    .then(() => {
      res.status(200).json('ok')
    })
    .catch(e => {
      res.status(400).json('Error on deleting Product');
    })
  }
}

export default new UserController();
