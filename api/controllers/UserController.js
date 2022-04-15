const { User, Sexo } = require('../../database/models/index.js')
const HttpStatusCodes = require('../../utilities/http-status-codes.js')
class UserController {
  static async showAll (req, res) {
    const usuarios = await User.findAll({
      include: [
        {
          model: Sexo,
          required: true
        }
      ]
    })
    return res.status(HttpStatusCodes.OK).json(usuarios)
  }
}

module.exports = UserController
