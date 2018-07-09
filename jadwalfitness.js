/*
PSEUDOCODE
FUNCTION 'jadwal'
PARAMETER
- users (type of data of array of object)
- days (type of data of num)

START
  STORE 'count' with value 0
  FOR 'i' to days
    IF i > 6 THEN
      STORE 'result' with value 'Tanggal ' + i + ' : '
      FOR 'i1' to length of member
        IF 'i' % 5 !== 0 THEN
          IF 'count' % users[i1]['waktu'] === 0 or i === 7 THEN
            SET 'result' += users[i1]['nama'] + ' '
          END IF
        ELSE
          'result' += 'Tempat Fitness Tutup'
          BREAK
        END IF
      END FOR
      SET 'count' += 1
      DISPLAY 'result'
    END IF
  END FOR
END FUNCTION

STORE 'member' with value [
  {nama: 'Tono', waktu: 2},
  {nama: 'Anton', waktu: 4},
  {nama: 'Budi', waktu: 5}
]

CALL FUNCTION 'jadwal'(member, 31)
*/

function jadwal(users, days) {
  let count = 0;
  for (let i = 0; i < days; i++) {
    if (i > 6) {
      let result = 'Tanggal ' + i + ' : ';
      for (let i1 = 0; i1 < member.length; i1++) {
        if (i % 5 !== 0) {
          if (count % users[i1]['waktu'] === 0 || i === 7) {
            result += users[i1]['nama'] + ' ';
          }
        } else {
          result += 'Tempat Fitness Tutup'
          break;
        }
      }
      count += 1;
      console.log(result);
    }
  }
}

let member = [
  {nama: 'Tono', waktu: 2},
  {nama: 'Anton', waktu: 4},
  {nama: 'Budi', waktu: 5}
];

jadwal(member, 31);
