const tulisan = require('./tulisan.mongo');

async function cariTulisan(filter) {
  return await tulisan.findOne(filter);
}

async function simpanTulisan(tulisanBaru) {
  tulisanBaru.tanggalTulisan = new Date();

  await tulisan.create(tulisanBaru);
}

async function getSemuaTulisan() {
  try {
    const data = await tulisan
      .find(
        {},
        {
          __v: 0,
        },
      )
      .sort([['tanggalTulisan', -1]]);
    return data;
  } catch (kesalahan) {
    throw new Error(kesalahan);
  }
}

async function getTulisan(id) {
  try {
    const data = await tulisan.findOne(
      {
        _id: id,
      },
      {
        __v: 0,
      },
    );
    return data;
  } catch (kesalahan) {
    throw new Error(kesalahan);
  }
}

async function hapusTulisan(id) {
  try {
    const data = await tulisan.findOneAndDelete({
      _id: id,
    });
    return data;
  } catch (kesalahan) {
    throw new Error(kesalahan);
  }
}

async function editTulisan(dataTulisan) {
  try {
    const { _id, judulTulisan, tanggalTulisan, isiTulisan } = dataTulisan;
    const data = await tulisan.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        judulTulisan,
        tanggalTulisan,
        isiTulisan,
      },
      {
        new: true,
      },
    );
  } catch (kesalahan) {
    throw new Error(kesalahan);
  }
}

module.exports = {
  getSemuaTulisan,
  simpanTulisan,
  getTulisan,
  hapusTulisan,
  editTulisan,
};
