const { Sex } = require('../../database/models/index')
const HttpStatusCodes = require('../../utilities/http-status-codes')

class SexoController {
  static async showAll (req, res) {
    const Sexes = await Sex.findAll()
    return res.status(HttpStatusCodes.OK).json(Sexes)
  }
}

module.exports = SexoController
