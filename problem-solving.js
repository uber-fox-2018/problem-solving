// CARA YANG SUDAH DINAMIS
/*
PSEUDOCODE
START FUNCTION jadwalFitnes
param : input (type data array)
    STORE 'nilaiAwal' with 0
    STORE 'fitnesTutup' with 1
    
    STORE 'i' EQUALS TO 7
    FOR i LESS THAN EQUALS TO 31
        STORE arr with type data array
        fitnesTutup = fitnesTutup + 1

        IF(fitnesTutup mod 5 EQUALS TO 0){
            arr.push('Tempat fitnes tutup')
        } ELSE {
            STORE 'j' EQUALS TO 0
            FOR j LESS THAN input.length
                IF(nilaiAwal mod input[j][1] EQUALS TO 0){
                    arr.push(input[j][0])
                }
            j++
            END FOR
        }
        nilaiAwal = nilaiAwal + 1
        DISPLAY 'Tanggal ' + i + ': ' + arr
    i++
    END FOR
END FUNCTION
*/

function jadwalFitnes(input){
    let nilaiAwal = 0;
    let fitnesTutup = 1;

    for(let i = 7; i <= 31; i++){
      let arr = []
      fitnesTutup++
      if(fitnesTutup % 5 == 0){
        arr.push('Tempat fitnes tutup')
      } else {
        for(let j = 0; j < input.length; j++){
          if(nilaiAwal % input[j][1] == 0){
            arr.push(input[j][0])
          }
        }
      }
      nilaiAwal++
      
      console.log('Tanggal ' + i + ': ' + arr)
    }
  
}

var input = [['Tono',2],['Anton',4],['Budi',5]]

console.log(jadwalFitnes(input))



// CARA YANG BELUM DINAMIS
/*
PSEUDOCODE

START FUNCTION jadwalFitenes
    STORE 'nilaiAwal' with 0
    STORE 'fitnesTutup' with 1
    STORE 'result with' type data array

    STORE 'i' with 7   
    FOR i LESS THAN EQUALS 31
        STORE 'arr' with type data array
        IF i mod 5 EQUALS TO 0
            arr.push('Tempat fitnes tutup')
        END IF
        IF nilaiAwal mod 5 EQUALS TO 0
            arr.push('Budi')
        END IF
        IF nilaiAwal mod 2 EQUALS TO 0
            arr.push('Tono')
        END IF
        IF nilaiAwal mod 4 EQUALS TO 0
            arr.push('Anton')
        END IF
        nilaiAwal = nilaiAwal + 1
        result.push('Tanggal '+ i + ':' + arr)
        i++
    END FOR

    RETURN result.join('\n')
END FUNCTION
*/

function jadwalFitnes(){
    let nilaiAwal = 0;
    let fitnesTutup = 1;
    result = []

    for(let i = 7; i <= 31; i++){
      arr = []
      if(i % 5 == 0){
        arr.push('Tempat fitnes tutup')
      } 
      if(nilaiAwal % 5 == 0){
        arr.push('Budi')
      }
      if(nilaiAwal % 2 == 0){
        arr.push('Tono')
      }
      if(nilaiAwal % 4 == 0){
        arr.push('Anton')
      }
      nilaiAwal++
      
      // console.log('Tanggal '+ i + ':' + arr)
      result.push('Tanggal '+ i + ':' + arr)
    }
    return result.join('\n') 
}

console.log(jadwalFitnes())
