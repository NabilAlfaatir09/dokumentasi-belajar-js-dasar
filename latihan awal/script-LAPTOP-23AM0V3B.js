var x = 10;
console.log('Hello world!');
console.log('nilai variabel x adalah ' + x);
alert('hello world!');
var nama = prompt('nama lu siapa:');
alert(nama);
var tes = confirm('kamu yakin?');
if (tes === true) {
    alert('user yes');
} else {
    alert('user tidak setuju');
}
// contoh 1

alert('selamat datang');
var lagi = true
while (lagi === true) {
    var nama = prompt('silahkan masukkan nama anda');
    alert('halo ' + nama);
    lagi = confirm('mencoba nama baru?');
}
alert('terima kasih ' + nama);
// contoh 2

const arr = [1, 2, 3, 4, 5];
const [a, b, , , c] = arr;
console.log(c);