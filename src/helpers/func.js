const func = {
  // Date
  tgl: function (str) {
    var tgl = str.split(/\D/g);
    return [tgl[2], tgl[1], tgl[0]].join('-');
  },

  // Number
  number: function (str) {
    return str.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  },
};

export default func;
