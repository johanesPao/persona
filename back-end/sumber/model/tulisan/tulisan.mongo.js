const mongoose = require('mongoose');

const tulisanSchema = new mongoose.Schema(
  {
    judulTulisan: {
      type: String,
      required: true,
    },
    tanggalTulisan: {
      type: Date,
      required: true,
    },
    isiTulisan: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'tulisan',
  },
);

module.exports = mongoose.model('tulisan', tulisanSchema);
