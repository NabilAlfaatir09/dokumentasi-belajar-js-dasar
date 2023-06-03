var s = '';
for(var i = 0; i < 10; i++){
    for(var j = 0; j <= i; j++){
        s +='*'
    }
    s +='\n';
}
console.log(s);
// contoh 1

var s = '';
for(var i = 10; i >= 0; i--){
    for(var j = 0; j <= i; j++){
        s +='*'
    }
    s +='\n';
}
console.log(s);
// contoh 2

var s = '';
var pola = 5;
function faktorial(n){
    var a = 1;
    var i = 1;
    while(i <= n){
        a *= i;
        i++;
    }

    return a;
}

for (var i = 0; i < pola; i++){
    for(var j = pola; j >= i; j--){
        s+=' ';
    }
    for(var j = 0; j <= i; j++){
        s+= faktorial(i) / ( faktorial(j) * faktorial(i - j) )+ ' ';
    }
    s+='\n';
}
console.log(s);
// contoh 3

var s = '';
for(var i = 0; i < 10; i++){
    for(var j = 10 - 1; j >= i; j--){
        s +=' ';
    }
    for(var k = 0; k<=i; k++){
        s +='*';
    }
    s +='\n';
}
console.log(s);
// contoh 4

var s = '';
for(var i = 10; i >= 0; i--){
    for(var j = 10 - 1; j >= i; j--){
        s +=' ';
    }
    for(var k = 0; k<=i; k++){
        s +='*';
    }
    s +='\n';
}
console.log(s);
// contoh 5

var s = '';
for(var i = 0; i <= 10; i++){
    for(var j = 10 - 1; j >= i; j--){
        s +=' ';
    }
    for(var k = 0; k<=i; k++){
        s +='*';
    }
    for(var l = 0; l<=i-1; l++){
        s +='*';
    }
    s +='\n';
}
console.log(s);
// contoh 6

var s = '';
for(var i = 10; i >= 0; i--){
    for(var j = 10 - 1; j >= i; j--){
        s +=' ';
    }
    for(var k = 0; k<=i; k++){
        s +='*';
    }
    for(var l = 0; l<=i-1; l++){
        s +='*';
    }
    s +='\n';
}
console.log(s);