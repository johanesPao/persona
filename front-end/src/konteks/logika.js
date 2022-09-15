const logika = (keadaan, tindakan) => {
  switch (tindakan.tipe) {
    case 'MEMUAT':
      return {
        ...keadaan,
        sedangMemuat: true,
      };
    case 'TAMPILKAN_TULISAN':
      return {
        ...keadaan,
        dataTulisan: tindakan.muatan,
        sedangMemuat: false,
      };
    default:
      return keadaan;
  }
};

export default logika;
