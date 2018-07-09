function fitnessFor(Opening, Days, member) {
    let Members = ["Tono", "Anton", "Budi"];
    let counter = 0;

    for (i = 0; i <= Days; i++) {
        let membersArr = [];
        if (i >= Opening) {
            if (i === Opening) {
                console.log(`Tanggal ${i} : ${Members.join(", ")}`)
            } else if (i % 5 === 0) {
                console.log(`Tanggal ${i} : Tempat Fitness Tutup`)
            } else {
                for(j=0; j<member.length; j++){
                    // console.log(member[j][0])
                    if(counter % member[j][1] === 0){
                        membersArr.push(member[j][0])
                    }
                }
                console.log(`Tanggal ${i} : ${membersArr.join(", ")}`)
            }
            counter++;
        }
    }
}

// fitnessFor(7, 31, [["Tono",2], ["Anton",4], ["Budi",5]]);

function fitnessWhile(Opening, Days, member) {
    let members = ["Tono", "Anton", "Budi"];
    let counter = 0;

    let i = 0;

    while (i <= Days) {
        let membersArr = [];
        if (i >= Opening) {
            if (i === Opening) {
                console.log(`Tanggal ${i} : ${members.join(", ")}`);
            } else if (i % 5 === 0) {
                console.log(`Tanggal ${i} : Tempat Fitness Tutup`);
            } else {
                for(j=0; j<member.length; j++){
                    // console.log(member[j][0])
                    if(counter % member[j][1] === 0){
                        membersArr.push(member[j][0])
                    }
                }
                console.log(`Tanggal ${i} : ${membersArr.join(", ")}`)
            }
            counter++
            
        }
        i++
    }
}


fitnessWhile(7, 31, [["Tono",2], ["Anton",4], ["Budi",5]])