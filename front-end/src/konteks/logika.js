const logika = (keadaan, tindakan) => {
  switch (tindakan.tipe) {
    case 'MEMUAT':
      return {
        ...keadaan,
        sedangMemuat: true,
      };
    case 'SELESAI_MEMUAT':
      return {
        ...keadaan,
        sedangMemuat: false,
      };
    // case 'TAMPILKAN_TULISAN':
    //   return {
    //     ...keadaan,
    //     dataTulisan: tindakan.muatan,
    //     sedangMemuat: false,
    //   };
    // case 'TAMPILKAN_SATU_TULISAN':
    //   return {
    //     ...keadaan,
    //     dataTulisan: tindakan.muatan,
    //     sedangMemuat: false,
    //   };
    case 'MULAI_MODE_EDIT':
      return {
        ...keadaan,
        editTulisan: true,
        idEditTulisan: tindakan.muatan,
      };
    case 'AKHIRI_MODE_EDIT':
      return {
        ...keadaan,
        editTulisan: false,
        idEditTulisan: '',
      };
    default:
      return keadaan;
  }
};

export default logika;
