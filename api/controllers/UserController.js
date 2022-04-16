const { User, Sex } = require('../../database/models/index.js')
const HttpStatusCodes = require('../../utilities/http-status-codes.js')
class UserController {
  static async showAll (req, res) {
    const usuarios = await User.findAll({
      include: [
        {
          model: Sex,
          required: true
        }
      ]
    })
    return res.status(HttpStatusCodes.OK).json(usuarios)
  }
}

module.exports = UserController
