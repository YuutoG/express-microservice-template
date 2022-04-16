const { Sex } = require('../../database/models/index')
const HttpStatusCodes = require('../../utilities/http-status-codes')

class SexoController {
  static async showAll (req, res) {
    const Sexes = await Sex.findAll()
    return res.status(HttpStatusCodes.OK).json(Sexes)
  }

  static async show (req, res) {
    const { id } = req.params
    const sex = await Sex.findAll({
      where: {
        id
      }
    })
    return res.status(HttpStatusCodes.OK).json(sex)
  }

  static async store (req, res) {
    const { name } = req.body

    const sex = await Sex.create({ name })

    return res.status(HttpStatusCodes.CREATED).json(sex)
  }

  static async update (req, res) {
    const { id, name } = req.body

    const sex = await Sex.update({ name }, {
      where: {
        id
      }
    })

    return res.status(HttpStatusCodes.CREATED).json(sex)
  }

  static async delete (req, res) {
    const { id } = req.body

    const sex = await Sex.destroy({
      where: {
        id
      }
    })

    return res.status(HttpStatusCodes.OK).json(sex)
  }
}

module.exports = SexoController
