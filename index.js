
// 1 - add obj = {}
// 2 - add variable i = 7, while i <= 31, increment i.
// 3 - add obj['tanggal ' + i] = []
// 4 -if i % 5 is 0
// 4b - push(": tempat fitness tutup") to obj['tanggal ' + i]
// 4c -else, add d = 0, while length of date > d, increment d.
// 5 -if (loop/variable of i - 7) % date index of d is 0
// 5a - push(member[d]) to obj['tanggal ' + i]
// 6 - end of loop d
// 7 - end of loop i
// 8 - declare obj


function absensi(member, date) {


    var obj = {}

    for (var i = 7; i <= 31; i++) {
        obj['tanggal ' + i] = []
        if (i % 5 === 0) {
            obj['tanggal ' + i].push
                (": tempat fitness tutup")
        } else {
            for (var d = 0; d < date.length; d++) {
                // console.log((i - 7) + ' + ' + date[d] + ' +' + 'day= ' + i)
                if ((i - 7) % date[d] === 0) {

                    obj['tanggal ' + i].push(member[d])
                }
            }

        }

    }

    return (obj)
}
console.log(absensi(['Tono', 'Anton', 'Budi'], [2, 4, 5], 7, 31));

// Tanggal 7: Tono, Anton, Budi.
// Tanggal 8: 
// Tanggal 9: Tono.
// Tanggal 10: Tempat fitness tutup
// Tanggal 11: Tono, Anton.
// Tanggal 12: Budi.
// Tanggal 13: Tono.
// Tanggal 14: 
// Tanggal 15: Tempat fitness tutup
// Tanggal 16: 
// Tanggal 17: Tono, Budi.
// Tanggal 18: 
// Tanggal 19: Tono, Anton.
// Tanggal 20: Tempat fitness tutup
// Tanggal 21: Tono.
// Tanggal 22: Budi.
// Tanggal 23: Tono, Anton.
// Tanggal 24: 
// Tanggal 25: Tempat fitness tutup
// Tanggal 26: 
// Tanggal 27: Tono, Anton, Budi.
// Tanggal 28: 
// Tanggal 29: Tono.
// Tanggal 30: Tempat fitness tutup
// Tanggal 31: Tono, Anton.