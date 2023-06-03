var item = prompt('masukkan nama makanan/minuman \n (cth: nasi,bubur,ayam,susu,soda,hamburger)');

switch(item){
    case 'nasi':
    case 'bubur':
    case 'ayam':
    case 'susu':
        alert('makanan/minuman SEHAT!');
        break;
    case 'soda':
    case 'hamburger':
        alert('makanan/minuman TIDAK SEHAT!');
        break;
    default:
        alert('makanan/minuman yang anda masukkan salah')
        break;
}