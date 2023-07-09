import bcrypt from "bcrypt"
import usersSchema from "../models/usersSchema.mjs";

const salt = bcrypt.genSaltSync(10)
class UserController {

  async register(req, res) {
    return res.status(502).json('Not working yet');
    var { name, password, email, phone_number } = req.body;
    const User = usersSchema.model;

    var id = null;
    const docs = await User.find().limit(1).sort({$natural:-1})
    .then(() => {
      docs.map(doc => id = doc.id);
      id = id === null? 1 : id + 1;

      name = name.trim();
      password = password.trim();
      password = bcrypt.hashSync(password, salt);
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
        throw e;
      });
    })
    .catch(e => {
      res.status(400).json('try again');
      error = true;
    });
  }

  async login(req, res) {
    return res.status(502).json('Not working yet')
  }
}

export default new UserController();
