const {
  getSemuaTulisan,
  simpanTulisan,
  getTulisan,
} = require('../../model/tulisan/tulisan.model');

async function httpGetSemuaTulisan(req, res) {
  return res.status(200).json(await getSemuaTulisan());
}

async function httpPostTulisan(req, res) {
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

async function httpGetTulisan(req, res) {
  try {
    const data = await getTulisan(req.params.id);
    return res.status(200).json(data);
  } catch (kesalahan) {
    throw new Error(kesalahan);
  }
}

module.exports = {
  httpGetSemuaTulisan,
  httpPostTulisan,
  httpGetTulisan,
};
