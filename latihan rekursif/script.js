function faktorial(n){
    if(n===0) return 1;
    return n * faktorial(n-1);
}
faktorial(5)
// contoh 1

function cetakAngka(n){
    if(n===0) return;
    console.log(n);
    cetakAngka(n-1);
}
cetakAngka(10)