const {
  getSemuaTulisan,
  simpanTulisan,
} = require('../../model/tulisan/tulisan.model');

async function httpGetSemuaTulisan(req, res) {
  return res.status(200).json(await getSemuaTulisan());
}

async function httpPostTulisan(req, res) {
  console.log(req.body);
  try {
    await simpanTulisan(req.body);
    return res.status(201).json({
      status: 201,
      data: req.body, // object
    });
  } catch (kesalahan) {
    return res.status(500).json({
      status: 500,
      data: kesalahan, // string
    });
  }
}

module.exports = {
  httpGetSemuaTulisan,
  httpPostTulisan,
};
