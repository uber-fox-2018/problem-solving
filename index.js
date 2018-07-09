// SET Function with name 'jadwal' with input 'tanggal
    // SET counter as integer with value 0
    // SET i as integer with value tanggal

    // while i less than 31 DO
    //     SET output as string with value ''
    //         IF i equal tanggal DO
    //             output ADD 'Tono, Anton, Budi'
    //             DISPLAY 'Tanggal i : output'
    //         ELSE IF i MOD 5 equal 0 DO 
    //             DISPLAY 'Tanggal i : tempat fitness tutup'
    //         ELSE 
    //             IF counter MOD 2 equal 0 DO
    //                 output ADD 'Tono'
    //             END IF
    //             IF counter MOD 4 equal 0 DO
    //                 output ADD 'Anton'
    //             END IF
    //             IF counter MOD 5 equal 0 DO
    //                 output ADD 'Budi'
    //             END IF

    //             DISPLAY 'Tanggal i : output'
    //         counter++
    //         i++

    //         END IF
    // END WHILE 
// END Function

function jadwal(openingDate){
    let counter = 0;
    let i = openingDate

    while(i <= 31) {
    let output = '';
       if (i === openingDate) {
           output += `Tono, Anton, Budi`
           console.log(`Tanggal ${i}: ${output}`);
       }else if (i % 5 === 0) {
           console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
           
       } else {
           if (counter % 2 === 0) {
               output += 'Tono '
           }
           if (counter % 4 === 0) {
               output += 'Anton '
           }
           if (counter % 5 === 0) {
               output += 'Budi '
           }
           console.log(`Tanggal ${i}: ${output}`);
       }
        counter++
        i++
    }
}

// jadwal(7)
// jadwal(1)

// ====================== DINAMIS =======================

function jadwalFitness(member, openingDate) {
    let counter = 0;
    let i = openingDate
    
    while (i <= 31) {
        let output = '';
        if (i === openingDate) {
           for (let j = 0; j < member.length; j++) {
               output += `${member[j].name},`;
           }
           console.log(`Tanggal ${i}: ${output}`);
        }else if (i % 5  === 0) {
            output += `Tempat Fitness Tutup`
            console.log(`Tanggal ${i}: ${output}`);
        }else {
            for (let j = 0; j < member.length; j++) {
                if (counter % member[j].jadwal === 0) {
                    output += `${member[j].name},`;
                } 
            }
            console.log(`Tanggal ${i}: ${output}`);
        }
        counter++
        i++
    }
}

let member = [{name: 'Tono', jadwal: 2}, {name: 'Anton', jadwal: 4}, {name: 'Budi', jadwal: 5}]
jadwalFitness(member,7)
