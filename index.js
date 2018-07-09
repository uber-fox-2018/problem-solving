/*
PSUDOCODE :
1. membuat function jadwal, dengan parameter tanggal
2. menentukan variabel untuk digunakan, seperti :
    a. openingData = 7
    b. date = 31
3. membuat looping dengan variabel i = 7, dan kondisi i <= date, i++
    3.1 membuat varibael tampung array (result)
    3.2 if  i (openingDate) mod 5 sama dengan 0, maka print tangga i : tempat fitnes libur
    3.3 else i sama dengan (===) opening Date, maka print tanggal i : Tono, Anton, Budi
        3.3.1 else 
        3.3.2 jika i - openingDate mod 2 sama dengan 0, maka result.push('tono')
        3.3.3 jika i - openingDate mod 4 sama dengan 0, maka result.push('Anton)
        3.3.4 jika i - openingDate mod 5 sama dengan 0, maka result.push('Budi')
        3.3.5 console.log(print) `tanggal ${i} : ${result}`
        selesai if
    selesai looping
selesai function
*/

function jadwal(tanggal) {
    let openingDate = 7
    let date = 31

    for(let i = openingDate; i<= date; i++) {

    let result = [];

        if (i%5 === 0) {
            console.log(`tanggal ${i} : Tempat fitnes Libur`)
        } else if (i === openingDate) {
            console.log(`tanggal ${i} : Tono,Anton,Budi`)
        } else {

            if (((i-openingDate)%2) === 0) {
               result.push('Tono') 
            }
            if ( ((i - openingDate)) %4 === 0){
                result.push('Anton')
            }
            if (((i - openingDate) % 5) === 0) {
                result.push('Budi')
            } 
            console.log(`tanggal ${i} : ${result}`)
        }
    }
}
jadwal(31)