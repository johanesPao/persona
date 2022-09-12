const tulisan = require('./tulisan.mongo');

// model test

const isiTulisanPertama = `
  1. Data struktur dari sebuah Aljabar
     a. Apa itu aljabar linear
     b. Sejarah singkat aljabar
     c. Tensor
     d. Skalar
     e. Vektor dan transposisi vektor
     f. Norm dan vektor unit
     g. Vektor basis, orthogonal dan orthonormal
     h. Array dalam NumPy
     i. Tensor di TensorFlow dan PyTorch

  1.a Aljabar linear adalah persamaan aritmetika yang memiliki entitas non-numerik di dalamnya seperti x dalam 2x + 5 = 25, namun jika terdapat unsur eksponensial di dalam suatu persamaan seperti
      2x^2 + 5 = 25 atau 2sqrt(x) + 5 = 25 maka persamaan ini bukanlah aljabar linear, melainkan aljabar non-linear.
      Aljabar linear digunakan untuk menjawab faktor yang tidak diketahui dalam sebuah sistem persamaan linear. Di dalam sebuah persamaan aljabar linear kita hanya dapat memiliki 3 kondisi solusi:
      - ada 1 solusi
      - tidak ada solusi
      - solusi yang tidak terbatas
      Namun dalam aljabar linear, tidak memungkinkan untuk sebuah garis berpotongan dengan garis lainnya lebih dari satu kali, kecuali dalam kasus aljabar non-linear.
      Dalam sebuah sistem persamaan kita dapat memiliki banyak persamaan dan juga banyak variabel yang tidak diketahui dalam masing - masing persamaan, seperti dalam kasus model regresi linear
      bisa saja berbentuk seperti ini:
      y = a + bx_1 + cx_2 + ... + mx_m-1  yang sebenarnya dibentuk dari sebuah dataset sebagai berikut:
      y_1 = a_1 + bx_1,1 + cx_1,2 + ... + mx_1,m-1
      y_2 = a_2 + bx_2,1 + cx_2,2 + ... + mx_2,m-1
      y_3 = a_3 + bx_3,1 + cx_3,2 + ... + mx_3,m-1
      ...
      y_n = a_n + bx_n,1 + cx_n,2 + ... + mx_n,m-1
      Dimana nilai y (y aktual) dan x (x aktual) dalam persamaan ini sudah diketahui dan kita berusaha untuk menentukan nilai dari a, b, c dstnya hingga m yang dapat menjelaskan persamaan
      y_i = a + bx_i,1 + cx_i,2 + ... + mx_i,m-1

`;

const tulisanTest = {
  idTulisan: 1,
  judulTulisan: 'Perjalanan Menuju Dunia Baru',
  tanggalTulisan: new Date('September 12, 2022'),
  isiTulisan: isiTulisanPertama,
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
    },
  );
}

async function getSemuaTulisan() {
  return await tulisan.find(
    {},
    {
      _id: 0,
      __v: 0,
    },
  );
}

module.exports = {
  getSemuaTulisan,
  muatDataTulisan,
};
