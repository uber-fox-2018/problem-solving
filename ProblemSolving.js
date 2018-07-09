// tono 2 hari sekali
// anton 4 hari sekali
// budi 5 hari sekali

// buka fitnes tanggal 7
// setiap bulan berjumlah 31 hari
// libur setiap kelipatan tanggal 5


// mulai tanggal 7
// stop tanggal 31


function fitnes (arr){
    var generator = 0
    for(var i = 7 ; i <= 31 ; i++){
        var newArr = []
        if(i % 5 === 0){
            console.log('Tanggal ' + i + ': Fitnes tutup coy')
        }else{
            for(var j = 0 ; j < arr.length ; j++){
                if(generator % arr[j][1] === 0){
                    newArr.push(arr[j][0])
                }
            }
            
            console.log('Tanggal ' + i + ': '+ newArr)
        }
        generator++
    }
    
}
console.log(fitnes([
    ['tono', 2],
    ['anton', 4],
    ['budi', 5]
]))


/*
    PSEUDOCODE
    STORE arr with any array value
    STORE generator with 0 number value
    STORE i with 7 number value

    WHILE i <= 31

        STORE newArr with empty array
        IF i modulus 5 EQUALS 0
            DISPLAY 'Tanggal ' PLUS i PLUS ': Tempat fitnes tutup'
        ELSE
            FOR EACH character of arr
                IF generator modulus arr[character][1] EQUALS 0
                    APPEND newArr with arr[character][0]
                END IF
            END FOR
            DISPLAY 'Tanggal ' PLUS i PLUS ': ' PLUS newArr
        END IF
        generator PLUS 1
    i PLUS 1
    END WHILE
*/


