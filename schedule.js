/*
PSEUDOCODE

SET FUNCTION `schedule` with parameters (namesArray, daysArray, `openingDay`, `closeDay`, `lastDay`)
  SET `date` with `openingDay`

  WHILE DATE <= 31
    SET `text` with `Tanggal ${`date`}: `
    SET `result` with ''
    SET `people` with []
    
    IF (`date` equals to `openingDay`){
      SET `people` with `names`
      PUSH `people`.JOIN(', ') to `result`
    } ELSE IF (`date` % `closeDay` equals to 0){
      SET `result` with 'Tempat Fitness Tutup'
    } ELSE {
      FOR every `i` in `days`{
        IF ((`date` - `openingDay`) % `days` index of `i` equals to 0){
          PUSH `names` index of `i` to `people`
        }
      }
      SET `result` with `people`.JOIN(', ')
    }
    DISPLAY `text` + `result`
    INCREMENT DATE
  }
}


*/

const schedule = (names, days, openingDay, closeDay, lastDay) => {
  let date = openingDay
  
  while (date <= lastDay){
    let text = `Tanggal ${date}: `
    let result = ''
    let people = []
    if (date === openingDay){
      people = names
      result = people.join(', ')
    } else if (date % closeDay === 0) {
      result = 'Tempat Fitness Tutup'
    } else {
      for (let i in days){
        if ((date - openingDay) % days[i] === 0){
          people.push(names[i])
        }
      }
      result = people.join(', ')
    }
    console.log(text + result)
    date ++
  }
}

schedule(['Tono', 'Anton', 'Budi'], [2,4,5], 7, 5, 31)