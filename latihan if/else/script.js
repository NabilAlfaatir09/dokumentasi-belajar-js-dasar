var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot<=jmlAngkot; noAngkot++){
    if(noAngkot<=angkotBeroperasi){
        console.log('angkot no ' + noAngkot + ' sedang beroperasi dengan baik.');
    }
    else{
        console.log('angkot no ' + noAngkot+ ' sedang tidak beroperasi.');
    }
}