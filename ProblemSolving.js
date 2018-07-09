// tono 2 hari sekali
// anton 4 hari sekali
// budi 5 hari sekali

// buka fitnes tanggal 7
// setiap bulan berjumlah 31 hari
// libur setiap kelipatan tanggal 5


// mulai tanggal 7
// stop tanggal 31


function fitnes (arr){
    var newArr = []
    var i
    for(i = 0 ; i < arr.length ; i++){
        newArr.push(7)
    }
    for(i = 0 ; i < arr.length ; i++){
        for(var j = 7 ; j <= 31 ; j++){
            if(newArr[i] === j){
                console.log('Tanggal '+ newArr[i] + ': ' + arr[i][0])
                newArr[i]+=2
                newArr[i+1]+=4
                newArr[i+2]+=5
            }
        }
    }
    
}
console.log(fitnes([
    ['tono', 2],
    ['anton', 4],
    ['budi', 5]
])) // 1 3 2


// var buka = 7
// var tutup = 31
// var tono = buka
// var anton = buka
// var budi = buka

// for(var i = buka ; i <= tutup ; i++){
//     if(i % 5 === 0 && i === tono && i === anton){
//         console.log('Tanggal ' + i + ': Tempat Fitness Tutup')
//         tono+=2
//         anton+=4
//     }else if(i % 5 === 0 && i === tono){
//         console.log('Tanggal ' + i + ': Tempat Fitness Tutup')
//         tono+=2
//     }else if(i % 5 === 0){
//         console.log('Tanggal ' + i + ': Tempat Fitness Tutup')
//     }else if(i === tono && i === anton && i === budi){
//         console.log('Tanggal ' + i + ': Tono, Anton, Budi')
//         tono+=2
//         anton+=4
//         budi+=5
//     }else if(i === tono && i === anton){
//         console.log('Tanggal ' + i + ': Tono, Anton')
//         tono+=2
//         anton+=4
//     }else if(i === anton && i === budi){
//         console.log('Tanggal ' + i + ': Anton, Budi')
//         anton+=4
//         budi+=5
//     }else if(i === tono && i === budi){
//         console.log('Tanggal ' + i + ': Tono, Budi')
//         tono+=2
//         budi+=5
//     }else if(i === tono){
//         console.log('Tanggal ' + i + ': Tono')
//         tono+=2
//     }else if(i === anton){
//         console.log('Tanggal ' + i + ': Anton')
//         anton+=4
//     }else if(i === budi){
//         console.log('Tanggal ' + i + ': Budi')
//         budi+=5
//     }else{
//         console.log('Tanggal ' + i + ':')
//     }
// }

// STORE buka with 7 number value 
// STORE tutup with 31 number value
// STORE tono with buka number value
// STORE anton with buka number value
// STORE budi with buka number value

// WHILE buka LESS THAN tutup
//     IF buka modulus 5 EQUALS 0 AND buka EQUALS tono AND buka EQUALS anton
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tempat Fitnes Tutup'
//         tono PLUS 2
//         anton PLUS 4
//     ELSE IF buka modulus 5 EQUALS 0 AND buka EQUALS tono
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tempat Fitnes Tutup'
//         tono PLUS 2
//     ELSE IF buka modulus 5 EQUALS 0
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tempat Fitnes Tutup'
//     ELSE IF buka EQUALS tono AND buka EQUALS anton AND buka EQUALS budi
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tono, Anton, Budi'
//         tono PLUS 2
//         anton PLUS 4
//         budi PLUS 5
//     ELSE IF buka EQUALS tono AND buka EQUALS anton
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tono, Anton'
//         tono PLUS 2
//         anton PLUS 4
//     ELSE IF buka EQUALS anton AND buka EQUALS budi
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Anton, Budi'
//         anton PLUS 4
//         budi PLUS 5
//     ELSE IF buka EQUALS tono AND buka EQUALS budi
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tono, Budi'
//         tono PLUS 2
//         budi PLUS 5
//     ELSE IF buka EQUALS tono
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Tono'
//     ELSE IF buka EQUALS anton
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Anton'
//     ELSE IF buka EQUALS budi
//         DISPLAY 'Tanggal ' PLUS buka PLUS ': Budi'
//     ELSE
//         DISPLAY 'Tanggal ' PLUS buka PLUS ':'
//     END IF
//     buka PLUS 1
// END WHILE


