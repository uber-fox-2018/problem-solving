function fitnessCalendar(names, attendance, openingDate, closed, endOfMonth) {
    let date = openingDate;

    while (date <= endOfMonth) {
        let output = `Tanggal ${date}: `
        let result = '';
        let member = [];

        if (date === openingDate) {
            member = names;
            result = member.join(', ');
        } else if (date % closed === 0) {
            result = 'Tempat Fitness Tutup'
        } else {
            for (let i in attendance) {
                // console.log(attendance);
                // console.log(attendance[i])
                if ((date - openingDate) % attendance[i] === 0) {
                    member.push(names[i])
                }
            }
            result = member.join(', ');
        }
        console.log(output + result);
        date++;
    }

}

fitnessCalendar(['Tono', 'Anton', 'Budi'], [2, 4 ,5], 7, 5, 31);