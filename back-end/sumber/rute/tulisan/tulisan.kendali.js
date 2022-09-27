const {
  getSemuaTulisan,
  simpanTulisan,
  getTulisan,
  hapusTulisan,
  editTulisan,
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

async function httpHapusTulisan(req, res) {
  try {
    console.log(req.params.id);
    const data = await hapusTulisan(req.params.id);
    return res.status(200).json({
      status: 200,
      data: req.params.id,
    });
  } catch (kesalahan) {
    return res.status(500).json({
      status: 500,
      data: kesalahan,
    });
  }
}

async function httpEditTulisan(req, res) {
  try {
    const data = await editTulisan(req.body);
    return res.status(200).json({
      status: 200,
      data: req.body,
    });
  } catch (kesalahan) {
    return res.status(500).json({
      status: 500,
      data: kesalahan,
    });
  }
}

module.exports = {
  httpGetSemuaTulisan,
  httpPostTulisan,
  httpGetTulisan,
  httpHapusTulisan,
  httpEditTulisan,
};
