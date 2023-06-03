// manipulasi array

// 1. cara menambahkan array
var arr = [];
arr[0] = 'nabil';
arr[1] = 'alfaatir';
arr[2] = 'wenell';
console.log(arr[1]);

// 2. cara menghapus array

var arr1 = ['nabil','alfaatir','wenell','virkill'];
arr1[1] = undefined;
console.log(arr1[1]);

// 3. cara menampilkan isi array

var arr = ['nabil','alfaatir','anton','budi','tono','asep'];
for (var i =0; i<arr.length; i++){
    console.log('nama orang ke-'+i+': '+arr[i]);
}

// 4.methode yang ada pada array

// var arr = ['nabil','alfaatir','anton','budi','tono','asep'];
// 1.join
// console.log(arr.join());
// .2 push,pop,unshift,shift,splice and slice(menambahkan variabel baru)
// arr.splice(2,0,'adalah teman');
// arr.unshift('orang');
// arr.shift();
// arr.push('sitii');
// arr.pop();
// console.log(arr.join());

// forEach dan map

var nama = ['nabil','alfaatir','anton','budi','asep','siti','andika'];
var angka =[1,2,3,4,5,6,7];

nama.forEach(function(e,i){
    console.log('nama orang ke-'+i+' adalah'+': '+e);
})

var angka =[5,10,15,20,25];
var angka2 = angka.map(function(e){
    return e*2
});
console.log(angka2.join());

// sort

var angka =[5,10,15,50,20,25];
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join());
