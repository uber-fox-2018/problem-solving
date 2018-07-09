// SET days to 31
// SET gym with empty Array
// FOR i to and equals days where i equals 7
//     push i to gym
//     END FOR

// FOR i to gym.length where i equals 0
//     SET arr to empty Array
//     SET temp to empty string
//     FOR j to member.length where i equals to 0
//         IF gym[i] MOD 5 equals 0
//             set temp to ' Tempat Fitness Tutup'
//         END IF
//         IF (gym[i] - 7) MOD member[j].jadwal equals 0
//             push (' '+member[j].nama) to arr
//         END IF
//     END FOR
//     IF arr.length equals 0
//         PRINT 'Tanggal '+gym[i]+': '+temp
//     ELSE IF arr.length NOT equals 0
//         PRINT 'Tanggal '+gym[i]+': '+arr
//     END IF
// END FOR
    
function fitness (member){
    let days = 31
    let gym = []
    for (let i = 7; i <= days; i++){
        gym.push(i)
    }
    for (let i = 0; i < gym.length; i++){
        let arr = []
        let temp = ''
        for (let j = 0; j < member.length; j++){
            if (gym[i]%5===0){
                // console.log(gym[i])
               temp = ' Tempat Fitness Tutup'
            }
            if ((gym[i]-7)%member[j].jadwal===0){
                // console.log(gym[i])
                arr.push(' '+member[j].nama)
            }
        }
        if (arr.length === 0){
            console.log('Tanggal '+gym[i]+': '+temp)
        } else if (arr.length !== 0) {
            console.log('Tanggal '+gym[i]+': '+arr)
        }
    }
}

fitness([{nama: 'Tono', jadwal: 2},{nama: 'Anton', jadwal: 4},{nama: 'Budi', jadwal: 5}])