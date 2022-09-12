const tulisan = require('./tulisan.mongo');

// model test

const tulisanTest = {
  idTulisan: 1,
  judulTulisan: 'Judul 1',
  tanggalTulisan: new Date('December 17, 2022'),
  isiTulisan: 'Isi 1',
};

async function muatDataTulisan() {
  const muatDataAwal = await cariTulisan({
    idTulisan: 1,
  });
  console.log(muatDataAwal);
  if (muatDataAwal) {
    console.log('Data awal sudah dimuat!');
  } else {
    simpanTulisan(tulisanTest);
  }
}

async function cariTulisan(filter) {
  return await tulisan.findOne(filter);
}

async function simpanTulisan(tulisanBaru) {
  await tulisan.findOneAndUpdate(
    {
      idTulisan: tulisanBaru.idTulisan,
    },
    tulisanBaru,
    {
      upsert: true,
    }
  );
}

async function getSemuaTulisan() {
  return await tulisan.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

module.exports = {
  getSemuaTulisan,
  muatDataTulisan,
};
