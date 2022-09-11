const { getSemuaTulisan } = require('../../model/tulisan/tulisan.model')

async function httpGetSemuaTulisan(req, res) {
    return res.status(200).json(await getSemuaTulisan())
}

module.exports = {
    httpGetSemuaTulisan
}