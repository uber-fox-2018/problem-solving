//Nama : Syaiful Bachri

// problem:
// tono, 2 Hari Sekali
// anton, 4 Hari Sekali
// Budi, 5 Hari sekali

// tempat fitness di buka tanggal 7, dan semua member datang. 
// tempat fitness akan tutup setiap kelipatan 5,
// asumsi kalender tiap bulan 31

// PsuedoCode

// Start function fitnessSummary with parameter name and day
// start name with array
// start day with array 

// set result with empty string
// set temp  with empty string
// set member with empty array

//     looping date
//     looping start with a = 7 to less than equal 31 with i + 1
//         set temp  to empty string
//         set member to empty array

//         looping name 
//         looping start with b = 0 to less than member length with b + 1
//         if a modulo 5 equal 0 
//             set temp = ' Tempat Fitnes Libur'
//         else if (a-7) modulo day index b
//             set temp push name index b

//         end looping name

//     if a modulo 5 equal 0 
//         set result = ' Tanggal index [a] : temp'
//     else set result = ' Tanggal index [a] : member' 

//     end looping date

// Display and return result

// end functon


function fitnesSummary(name, day) {
    let result = ''

    for (let a = 7; a <= 31; a++) {
        let temp = ''
        let member = []
        for (let b = 0; b < name.length; b++) {
            if (a % 5 == 0) temp = ' Tempat Fitness Libur \n'
            else if ((a - 7) % day[b] == 0) member.push(` ${name[b]}`)
        }
        result += ((a % 5 == 0) ? `Tanggal ${a} : ${temp}` : `Tanggal ${a} : ${member} \n`);
    }
    return result
}

console.log(fitnesSummary(['Budi', 'Tono', 'Anton'], [5, 2, 4]));
