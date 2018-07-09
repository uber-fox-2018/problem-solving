//ALGHORITMA

/*

var awal_masuk = 7
var bulan = 31
var tono = 2
var anton = 4
var budi = 5
var t = tono
var b = budi
var a = anton

1. lakukan perulangan dari awal sampai bulan ---> loop from awal to bulan
    1a. jika nilai indeks perulangan === `awal` ---> tampilkan --> tanggal `indeks` : `t`,`a`,`b`
    1b. jika nilai indeks perulangan % 5 === 0 ---> tampilkan --> tempat fitnes tutup 
    1c. jika nilai indeks perulangan - awal % Budi = 0 AND nilai indeks perulangan - awal % anton = 0
        AND jika nilai indeks perulangan - awal % tono = 0 
        ---> tampilkan --> tanggal `indeks` : `t`,`a`,`b`
    1d. jika nilai indeks perulangan - awal % Budi = 0 AND nilai indeks perulangan - awal % anton = 0
        ---> tampilkan --> tanggal `indeks` : `a`, `b`
    1e. jika nilai indeks perulangan - awal % anton = 0 AND jika nilai indeks perulangan - awal % tono = 0 
        ---> tampilkan --> tanggal `indeks` : `t`, `a`
    1f. jika nilai indeks perulangan - awal % Budi = 0 AND nilai indeks perulangan - awal % tono = 0
        ---> tampilkan --> tanggal `indeks` : `t`, `b`
    1g. jika nilai indeks perulangan - awal % Budi = 0  9 - 7 = 2
        ---> tampilkan --> tanggal `indeks` : `b`
    1h. jika nilai indeks perulangan - awal % anton = 0 
        ---> tampilkan --> tanggal `indeks` : `a`
    1i. jika nilai indeks perulangan - awal % tono = 0 
        ---> tampilkan --> tanggal `indeks` : `t`
    1j. jika tidak --> tampilkan --> tanggal `indeks` :
    

*/



function jadwalFitnes(awal_masuk){
    var bulan = 31
    var tono = 2
    var anton = 4
    var budi = 5
    var b = 'budi'
    var t = 'tono'
    var a = 'anton'

    for( i = awal_masuk; i <= bulan; i++){
        if( i === awal_masuk){
            console.log(`tanggal ${i}: ${t}, ${a}, ${b}`);
        }else if(i % 5 === 0){
            console.log(`tanggal ${i}: tempat fitness tutup`);
        }else if((i - awal_masuk) % tono === 0 && (i - awal_masuk) % anton === 0 && (i - awal_masuk) % budi === 0){
            console.log(`tanggal ${i}: ${t}, ${a}, ${b}`)
        }else if((i - awal_masuk) % tono === 0 && (i - awal_masuk) % anton === 0){
            console.log(`tanggal ${i}: ${t}, ${a}`);
        }else if((i - awal_masuk) % tono === 0 && (i - awal_masuk) % budi === 0){
            console.log(`tanggal ${i}: ${t}, ${b}`);
        }else if((i - awal_masuk) % anton === 0 && (i - awal_masuk) % budi === 0){
            console.log(`tanggal ${i}: ${a}, ${b}`);
        }else if((i - awal_masuk) % tono === 0){
            console.log(`tanggal ${i}: ${t}`);
        }else if((i - awal_masuk) % anton === 0){
            console.log(`tanggal ${i}: ${a}`);
        }else if((i - awal_masuk) % budi === 0){
            console.log(`tanggal ${i}: ${b}`);
        }else {
            console.log(`tanggal ${i}:`);
        }
    }

}

jadwalFitnes(7)
