let angka = 2;

angka === 2 ? console.log("angka nya 2") : console.log("bukan angka 2");

const KEY = "white-rabbit";

if (true) {
    const KEY = "ginger_rabit";
}

console.log(KEY);

// 2
var a = [1, 2, 3, 4, 5];
var b = [6, 7, 8, 9, 10];

var gabungan = [...a, ...b];
console.log(gabungan);

// 3
let arrayOfObj = [{ name: "john" }]
let obj2 = { age: 2 }
arrayOfObj[0] = { ...arrayOfObj[0], ...obj2 }
console.log(arrayOfObj)

// 4
let benda = ["pensil", "pulpen", "penghapus"]
let bendaSendiri = { name: "rautan" }
benda = [bendaSendiri.name, ...benda]
console.log(benda)

// 5
// var book = {
//     name1: "calculus",
//     amountOfPage: 500,
//     color: "black"
// }

// var { name1: namaBuku } = book;
// console.log(name1);

// 6
let arr = [5, 1, 2, 31];
let temp;

function arrAscending(params) {
    return new Promise((resolve, reject) => {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
        resolve(arr)
    })
}
arrAscending(arr)
    .then((e) => {
        console.log(e)
    })