// NOTE
// 1. tono 2 hari sekali
// 2. anton 4 hari sekali
// 3. budi 5 hari sekali
// 4. fitness dibuka tanggal 7
// 5. fitness tutup setiap kelipatan 5
// 6. kalender 31 hari


// //PSUDOCODE
// STORE Ctono with 0;
// STORE Canton with 0;
// STORE Cbudi with 0;

// FOR i = 7 to 31
//     STORE containStr with `Tanggal ${i}: `
//     STORE nameArr with []
    
//     IF Ctono MOD 2 STRICT EQUAL 0 AND i MOD 5 NOT STRICT EQUAL 0 THEN
//         push 'Tono' to nameArr
//         SET Ctono with 0
//     END IF
//     IF Canton MOD 2 STRICT EQUAL 0 AND i MOD 5 NOT STRICT EQUAL 0 THEN
//         push 'Anton' to nameArr
//         SET Canton with 0
//     END IF
//     IF Cbudi MOD 2 STRICT EUAL 0 AND i MOD 5 NOT STRICT EQUAL 0 THEN
//         push 'Budi' to nameArr
//         SET Cbudi with 0
//     END IF
//     IF i MOD 5 STRICT EQUAL 0 THEN
//         containStr += `Tempat Fitness Tutup`
//     END IF 
//     Ctono++
//     Canton++
//     Cbudi++
//     join nameArr with ', '
//     containStr += nameArr
//     i++
// END FOR

    
// END FOR

function scheduleFitness() {
    let Ctono = 0
    let Canton = 0
    let Cbudi = 0
    
    for (let i = 7; i <= 31; i++) {
        let containStr = `Tanggal ${i}: `
        let nameArr = []
        if (Ctono % 2 === 0 && i % 5 !== 0) {
            // containStr += `Tono`
            // console.log(containStr)
            nameArr.push('Tono')
            Ctono = 0;
        } 
        if(Canton % 4 === 0 && i % 5 !== 0) {
            // containStr += `Anton`
            // console.log(containStr)
            nameArr.push('Anton')
            Canton = 0;
        }
        if (Cbudi % 5 === 0 && i % 5 !== 0) {
            // containStr += `Budi`
            // console.log(containStr);
            nameArr.push('Budi')
            Cbudi = 0
        }
        if (i % 5 === 0) {
            containStr += `Tempat Fitness Tutup`
            // console.log(containStr);
        }
        Ctono++
        Canton++
        Cbudi++
        nameArr.join(', ')
        containStr += nameArr
        console.log(containStr);
        // containStr = ''
        // nameArr = []
    }
}

scheduleFitness()