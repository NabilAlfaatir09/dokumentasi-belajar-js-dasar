function jumlahVolumeDuaKubus(a, b){
    var volumeA;
    var volumeB;
    var total;

    volumeA = a*a*a;
    volumeB = b*b*b;

    total = volumeA + volumeB;

    return total;
}
console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(5,9));
// contoh 1

function tambah(a, b){
    return a+b;
}
var a = parseInt(prompt('masukkan angka:'));
var b = parseInt(prompt('masukkan angka lagi:'));
var hasil = tambah(a,b);
console.log(hasil);
// contoh 2 :lebih simple


function tambahKeDua(a, b){
    return a+b;
}
function kali(a, b){
    return a*b;
}
var hasil = kali(tambahKeDua(3,3),tambahKeDua(4,4))
console.log(hasil);
// contoh 3