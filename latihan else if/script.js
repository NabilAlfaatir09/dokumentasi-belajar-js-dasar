var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (noAngkot; noAngkot<=jmlAngkot; noAngkot++){
    if (noAngkot<=angkotBeroperasi && noAngkot!==5){
        console.log('angkot no ' +noAngkot + ' sedang beroperasi dengan baik.');
    }
    else if(noAngkot===8 || noAngkot===10 || noAngkot===5)
        console.log('angkot no ' +noAngkot+ ' sedang lembur');
    else{
        console.log('angkot no ' +noAngkot + ' sedang tidak beroperasi.');
    }
}
