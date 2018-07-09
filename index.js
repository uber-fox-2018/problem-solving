/*
SET openingDate with 7
STORE `endDate` with 31
STORE `names` with {2: 'Tono', 4: 'Anton', 5: Budi'}
STORE `result` = 'Tanggal` + i + ': ' + arr

FOR i = 7 to `endDate`
STORE `date` with value minus 7
STORE `arr` = []

IF i % 5 = 0 THEN
arr = 'Tempat Fitness Tutup'

    ELSE
    FOR `key` in `names` THEN
        IF `date` % `key` THEN
        arr push names[key]
        END IF 
    END FOR
END IF
DISPLAY `result`
*/

function fitnessCalendar() {
    let endDate = 31;
    let names = {
        2: 'Tono',
        4: 'Anton',
        5: 'Budi'
    }
    
    for (let i = 7; i <= endDate; i++) {
        let date = i - 7;
        let arr = [];

        if (i % 5 === 0) {
            arr = 'Tempat Fitness Tutup';
        } else {
            for (let key in names) {
                if (date % key === 0) {
                    arr.push(names[key]);
                }
            }
        }
        console.log('Tanggal ' + i + ': ' + arr);
    }
}

fitnessCalendar();

