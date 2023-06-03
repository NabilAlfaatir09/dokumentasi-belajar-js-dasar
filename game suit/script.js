var tanya = true;
while (tanya){
    // menentukan pilihan player
    var p = prompt('pilih: batu,gunting,kertas');
    // menentukan pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();
    if (comp < 0.34){
    comp = 'batu';
    }
    else if (comp >=0.34 && comp < 0.67){
    comp = 'gunting';
    }
    else{
    comp = 'kertas';
    }
    var hasil = '';
    // menentukan rules
    if (p==comp){
        hasil = 'KAMU SERI!';
    }
    else if (p=='batu'){
        hasil = (comp =='gunting') ? 'KAMU MENANG!' : 'KAMU KALAH!';
    }
    else if (p =='gunting'){
        hasil = (comp =='batu') ? 'KAMU KALAH!' : 'KAMU MENANG!';
    }
    else if ( p =='kertas'){
        hasil = (comp =='gunting') ? 'KAMU KALAH!' : 'KAMU MENANG!';
    }
    else {
        hasil = 'memasukkan pilihan yang salah!';
    }
    // tampilkan hasil suit
    alert ('kamu memilih :' + p + ' dan computer memilih :' + comp + '\nmaka hasilnya:' + hasil);
    tanya = confirm ('bermain ulang?');
}
alert('terima kasih sudah bermain suit dengan saya');