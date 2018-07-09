// Jadwal Fitness:

// Buka tanggal 7,semua masuk
// libur tgl kelipatan 5, (5,10,15,25,30)
// Tono =  2 hari sekali, (7,9,11,13,...)
// Anton = 4 hari sekali, (7,11,15,19,...)
// Budi = 5 hari sekali, (7,12,17,21,...)


// Pseudocode/Algoritma
// buat variable result yg berupa string kosong untuk tampung hasil yang di inginkan
// buat perulangan pertama mulai dari index i = 0 sampai index = tanggal dikurang 7
// Dalam perulangan pertama, 
    // buat variable member yg berupa array kosong untuk menampung member
    // buat variable openDate untuk tampung tgl buka fitness
    // jika variable openDate = 5 maka variable member jadi array kosong kemudian di isi "Tempat fitness ditutup",
        // Buat perulangan kedua mulai dari index j = 0 hingga index sama dengan jumlah member
            //Buat kondisi ketika index i modulus jadwal sama dengan 0 maka, variabel member di isi dengan person sesuai jadwal
    //kemudian tambah variabel string result sesuai tampilan output
//return hasil result


function jadwalFitness(tanggal,jadwal){
    var result=''
    for(let i = 0; i<=tanggal-7; i++){
        var member = [];
        var openDate = i+7;
        for(let j=0; j<jadwal.length;j++){
            if(i%jadwal[j][1] === 0){
                member.push(jadwal[j][0])
            }
        }
        if(openDate%5 === 0){
            member = []
            member.push("Tempat Fitness Tutup")
        }
        result += "Tanggal "+openDate+": "+member+"\n";
    }
    return result      
}

console.log(jadwalFitness(31,[["Tono",2],["Anton",4],["Budi",5]]))
// console.log(jadwalFitness(31,["Tono","Anton","Budi","Coki"],[2,4,5,4]));


