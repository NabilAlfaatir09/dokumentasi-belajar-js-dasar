// membuat object dengan cara literal
var orang = {
    nama: 'nabil alfaatir',
    umur: 18,
    hobi: 'bermain basket',
    pekerjaan: 'freelance',
    ranking: [2, 2, 2, 1, 3],
    alamat: {
        jalan: 'jalan haji gaim',
        kota: 'jakarta',
        provinsi: 'dki jakarta',
    }
};


// membuat object dengan function declaration
function idOrang(nama, umur, hobi, pekerjaan, noHp) {
    var orang = {};
    orang.nama = nama;
    orang.umur = umur;
    orang.hobi = hobi;
    orang.pekerjaan = pekerjaan;
    orang.noHp = noHp;
    return orang;
}

var orang1 = idOrang('nabil', '18', 'bermain basket', 'freelance', '081316917824');

// construction
function Orang(nama, umur, hobi, pekerjaan, noHp) {
    this.nama = nama;
    this.umur = umur;
    this.hobi = hobi;
    this.pekerjaan = pekerjaan;
    this.noHp = noHp;
}

var orang2 = new Orang('alfaatir', '18', 'bermain game', 'kuliah', '081311419348');


// construct

let Human = function (nama, umur, hobi, pekerjaan, noHp) {
    this.nama = nama;
    this.umur = umur;
    this.hobi = hobi;
    this.pekerjaan = pekerjaan;
    this.noHp = noHp;
}

let orang3 = new Human('alfaatir', '18', 'bermain game', 'kuliah', '081311419348');
console.log(orang3.nama)