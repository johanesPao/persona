const tulisan = require('./tulisan.mongo');

async function cariTulisan(filter) {
  return await tulisan.findOne(filter);
}

async function simpanTulisan(tulisanBaru) {
  console.log(tulisanBaru);
  tulisanBaru.tanggalTulisan = new Date();

  await tulisan.create(tulisanBaru);
}

async function getSemuaTulisan() {
  try {
    const data = await tulisan.find(
    {},
    {
      __v: 0,
    },
  );
  return data;
  }
} catch (kesalahan) {
  throw new Error(kesalahan)
}

async function getTulisan(id) {
  try {
    const data = await tulisan.findOne({
      _id: id
    }, {
      __v: 0
    })
    return data
  } catch (kesalahan) {
    throw new Error(kesalahan)
  }
}

module.exports = {
  getSemuaTulisan,
  simpanTulisan,
  getTulisan
};
