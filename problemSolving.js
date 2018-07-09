/*

PSEDOCODE

FUNCTION `calculate`
parameter:
-`ppl` (type of data array of object)
-`startDay (type of data number)
-`maxDays (type of data number)

START

SET AND STORE `res` WITH empty string
SET AND STORE `counter` WITH 0

FOR `i` EQUAL `startDay` to equals values `maxDays`
  SET AND STORE `subRes` WITH "Tanggal " PLUS `startDay` PLUS ": "
  SET AND STORE `nameArr` WITH empty array

  IF `counter` EQUALS 0 THEN
    FOR `k` to length of `ppl`
      PUSH `ppl` index of `k` with key `nama` to `nameArr`
    END FOR
  ELSE IF `i` MOD 5 EQUALS 0 THEN
    ADD `subRes` with "Tempat Fitness Tutup"
  ELSE
    FOR `j` to length of `ppl`
      IF `counter` MOD `ppl` index of with key `nama` EQUALS 0 THEN
        PUSH `ppl` index of `j` with key `nama` to `nameArr`
      END IF
    END FOR
  END IF
  ADD `counter` by 1
  ADD `subRes` WITH `nameArr`
  ADD `res` WITH `subRes` PLUS "\n"
END FOR
RETURN `res`
END FUNCTION
*/

function calculate(ppl,startDay,maxDays) {
  var res = ""
  var counter = 0
  
  for (let i = startDay; i <= maxDays; i++) {
    var subRes = 'Tanggal '+startDay+': '
    let nameArr = []
    
    if (counter === 0) {
      for ( let k = 0; k < ppl.length;k++) {
        nameArr.push(ppl[k].nama)
      }
    } else if (i % 5 === 0) {
      subRes += 'Tempat Fitness Tutup'
    } else {
      for (let j = 0; j < ppl.length; j++) {
        if (counter % ppl[j].jeda === 0) {
          nameArr.push(ppl[j].nama)
        }
      }
    }
    counter++
    subRes += nameArr
    res += subRes + '\n'
  }
  return res
}
  
console.log(calculate([
  {
    nama: 'Tono',
    jeda: 2
  },{
    nama : 'Anton',
    jeda: 4
  },{
    nama:'Budi',
    jeda: 5
  }
],7,31))