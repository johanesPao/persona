const tulisan = require('./tulisan.mongo')

// model test

const tulisanTest = {
        judulTulisan: 'Judul 1',
        tanggalTulisan: new Date('December 17, 2022'),
        isiTulisan: 'Isi 1'
    }

async function muatDataTulisan() {
    const muatDataAwal = await cariTulisan({
        judulTulisan: 'Judul 1',
        isiTulisan: 'Isi 1'
    })
    console.log(muatDataAwal)
    if (muatDataAwal) {
        console.log('Data awal sudah dimuat!')
    } else {
        simpanTulisan(tulisanTest)
    }
}

async function cariTulisan(filter) {
    console.log(`cari tulisan ${filter}`)
    return await tulisan.findOne(filter)
}

async function simpanTulisan(tulisanBaru) {
    try {
        await tulisan.updateOne({
            _id: tulisanBaru.id
        }, {
            _id: tulisanBaru.id
        }, {
            upsert: true
        })
    } catch(kesalahan) {
        console.error(`Tidak dapat menyimpan tulisan ${kesalahan}`)
    }
}

async function getSemuaTulisan() {
    return await tulisan.find({}, {
        '_id': 0, '__v':0
    })
}

module.exports = {
    getSemuaTulisan,
    muatDataTulisan
}