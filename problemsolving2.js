function jadwal(nama,hari) {

    // BIKIN DERET TANGGAL //
    var tanggal= []

    for (var i=0; i<nama.length; i++) {
        var temp= []

        for (var j= 7; j<=31; j=j+hari[i]) {
            
            if (j%5 !== 0) {
            temp.push(j) 
            }
        }
        tanggal.push(temp)
    }
  
    //console.log (tanggal)


    // PREPARE OUTPUT //

    for (var i=7; i<=31; i++) {

        if (i%5 ===0) {
            console.log ('Tanggal '+ i +': Tempat Fitness Tutup')
            
        } else {

            var result=[]
            for (var j=0; j<nama.length; j++ ){
    
                if (tanggal[j].indexOf(i) !== -1) {
                    result.push(nama[j])
                }
    
            }
            console.log ('Tanggal '+ i +": " + result)

        }       

    } 

return ''

}

console.log (jadwal(['Tono', 'Anton', 'Budi'], [2, 4, 5]))



/* PSEUDOCODE

PREPARE Function with input of array nama AND array hari
STORE tanggal with empty array

FOR each name in nama array 
    STORE temp with empty array

    FOR each number (var j) start from 7 AND <= 31
        IF j MOD 5 NOT EQUAL TO 5
        PUSH j to temp
        ADD j with value from hari array
    END FOR

    PUSH temp to tanggal
    ADD i with 1

END FOR


FOR each number (var i) start from 7 AND <= 31

    IF i MOD 5 EQUAL 0
        DISPLAY  'Tanggal '+ i +': Tempat Fitness Tutup'
    ELSE

    STORE RESULT with empty array

    FOR each name in nama array 
        IF index Of i in tanggal array NOT EQUAL to -1
            push nama of index j to result
    
        ADD j with 1
    END FOR   
    
    DISPLAY 'Tanggal '+ i +": " + result
    ADD i with 1

END FOR

RETURN ''

*/