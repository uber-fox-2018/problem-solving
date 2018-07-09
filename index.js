/*
PSEUDOCODE

STORE `dayOfMonth` with value 31
STORE `member` with value {2: 'tono', 4:'anton', 5:'budi'}

FOR `i` = 0 to length of `dayOfMont` THEN
  STORE `day` with value `i` substract n
  STORE `arrResult` with value empty array

  IF `i` MOD 5 = 0  THEN
    `arrResult` = 'Tempat fitnes tutup'
  ELSE 
    FOR `key` in to `member` THEN 
      IF `day` MOD `key` THEN
        `arrResult` <- `member[key]` 
      ENDIF
    ENDFOR
  ENDIF

  DISPLAY `Tanggal` + i + ': ' + arrResult 
ENDFOR

*/

function jadwalFitnes(n) {
  const dayOfMonth = 31
  const member = {
    2: 'Tono',
    4: 'Anton',
    5: 'Budi'
  }
  
  for (let i = n; i <= dayOfMonth; i++) {
    let day = i - n;
    let arrResult = []

    if (i % 5 === 0) {
      arrResult = 'Tempat fitnes tutup'
    } else {
      for (let key in member) {
        
        if (day % key === 0) {
          arrResult.push(member[key])
        }

      }
    }
    console.log(`Tanggal ${i}: ${arrResult}`);
  }

}

jadwalFitnes(7)