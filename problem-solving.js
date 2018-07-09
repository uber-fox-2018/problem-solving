/**
 * PSEUDOCODE
 * 
 * FOR(SET i with 7, i LESS THAN OR EQUAL with 31, increment i by 1 after each after iteration)
 *    output['Tanggal [i]'] = [];
 * END FOR
 * 
 * FOR(SET i in output) 
 *    
 * END FOR
 * 
 * RETURN output
*/

function fitness(member, day) {
  let output = {};

  for(let i = 7; i <= day; i++) {
    let status = '';
    for(let j = 0; j < member.length; j++) {     
      if(i % 5 !== 0) {
        if(i === 7) {
          if(j !== member.length-1) {
            status += `${member[j].name}, `;
          } else {
            status += `${member[j].name}`;
          }
        }

      } else {
        status = `Tempat Fitness Tutup`;
      }

    }

    console.log(`${i} : ${status}`);

  }

}

let user = [
{name: 'Tono', time: 2},
{name: 'Anton', time: 4},
{name: 'Budi', time: 5},

];

fitness(user, 31);