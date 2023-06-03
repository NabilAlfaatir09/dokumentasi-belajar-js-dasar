// var x = 10;
// console.log('Hello world!');
// console.log('nilai variabel x adalah ' + x);
// alert('hello world!');
// var nama = prompt('nama lu siapa:');
// alert(nama);
// var tes = confirm('kamu yakin?');
// if (tes === true) {
//     alert('user yes');
// } else {
//     alert('user tidak setuju');
// }
// // contoh 1

// alert('selamat datang');
// var lagi = true
// while (lagi === true) {
//     var nama = prompt('silahkan masukkan nama anda');
//     alert('halo ' + nama);
//     lagi = confirm('mencoba nama baru?');
// }
// alert('terima kasih ' + nama);
// contoh 2

//
// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
// delete artistsAndSongs["Keyakizaka46"];
// artistsAndSongs["Blackpink"].push("Rose - Gone");

// console.log(artistsAndSongs);

// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);

// //
// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));

// //

// function minMax(arrayOfNumbers) {
//     let currentMin = arrayOfNumbers[0];
//     let currentMax = arrayOfNumbers[0];
//     for (value of arrayOfNumbers) {
//         if (value < currentMin) {
//             currentMin = value;
//         } else if (value > currentMax) {
//             currentMax = value;
//         }
//     }

//     console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

// //
// try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]);
//     }
// } catch (e) {
//     console.log("Out of bounds");
// }

// //
// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// console.log("Welcome!");

const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);
// 
const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);
//
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));
// 
class Car { }
const car = new Car();
console.log(typeof Car);