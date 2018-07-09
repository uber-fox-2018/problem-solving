// Tono 2 hari x 
// Anton 4 hari x 
// Budi 5 hari x 

// start tanggal 7
// tutup kelipatan tnaggal 5

// Pseudo code cara 1

// SET function 'scheduleFitness'
// SET i equals to 7
// FOR i equals to 7 and i less than 32 THEN INCREMENT i by 1
//     SET 'fitnessPattern' with empty array
//     IF i mod 7 equals to 0
//         THEN PRINT `Tanggal ${i}: Anton,Budi,Tono`
//     ELSE IF i mod 5 equals to 0
//         THEN PRINT `Tanggal ${i}: Tempat Fitness Tutup`
//     ELSE 
//         IF (i-7) mod 2 equals to 0
//             PUSH 'fitnessPattern' with 'Tono'
//         END IF
//         IF (i-7) mod 4 equals to 0
//             PUSH 'fitnessPattern' with 'Anton'
//         END IF
//         IF (i-7) mod 5 equals to 0
//             PUSH 'fitnessPattern' with 'Budi'
//         END IF
//     END IF
//     PRINT `Tanggal ${i}: ${fitnessPattern}`
// END FOR

// cara 1
function scheduleFitness() {

    for (let i = 7; i < 32; i++) {
        let fitnessPattern = []
        if (i == 7) {
            console.log(`Tanggal ${i}: Anton,Budi,Tono`)
        } else if (i % 5 == 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        } else {
            if ((i - 7) % 2 == 0) {
                fitnessPattern.push('Tono')
            } 
            if ((i - 7) % 4 == 0) {
                fitnessPattern.push('Anton')
            }
            if ((i-7) % 5 == 0) {
                fitnessPattern.push('Budi')
            }
            console.log(`Tanggal ${i}: ${fitnessPattern}`)
        } 
    }
}

// cara 2
function scheduleFitnes_1 () {

    let count = 0
    for (let i = 7; i <= 31; i++) {
        let result = ''
        if (i == 7) {
            console.log(`Tanggal ${i}: Anton, Budi, Tono`)
        } else if (i % 5 == 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        } else {
            if (count % 2 == 0) {
                result += 'Tono '
            }
            if (count % 4 == 0) {
                result += 'Anton '
            }
            if (count % 5 == 0) {
                result += 'Budi '
            }
            count++
            console.log(`Tanggal ${i}: ${result}`)
        }
    }
}

scheduleFitness()
//scheduleFitnes_1()