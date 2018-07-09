/*
	Pseudocode

	STORE count zero
	FOR i = 7 to 31
		STORE gymClose equal true
		STORE temp with empty array
		IF [i] mod 5 equal 0 THEN
			push 'Tempat Fitness Tutup' to temp
		ELSE
			FOR j = 0 ; j to less than  length of member ; j plus by 1
				IF count = 0 THEN
					push index of member[j].nama to temp
				ELSE
					IF count mod index of member[j].waktu equal 0 THEN
						push index of member[j].nama to temp
					END IF
				END IF
				IF gymClose equal false THEN
					DISPLAY 'Tanggal [i]: [temp]'
				ELSE
					DISPLAY 'Tanggal [i]: [temp]'	
				END IF
				ADD count by 1
			END FOR
		END IF
	END FOR
*/

function problemSolving(member){
	var count = 0

	for (var i = 7 ; i <= 31 ; i++){
		var gymClose = true
		var temp = []
		if (i % 5 == 0){
			temp.push('Tempat Fitness Tutup')
			gymClose = false
		}else {
			for (var j = 0 ; j < member.length ; j++){
				if (count == 0){
					temp.push(member[j].nama)
				}else {
					if (count % member[j].waktu == 0){
						temp.push(member[j].nama)
					}
				}
			}
		}
		if (gymClose === false){
			console.log('Tanggal '+i+': '+temp)
		}else {
			console.log('Tanggal '+i+': '+temp)	
		}
		count++
	}
}

problemSolving([
{nama : 'Tono', waktu : 2},
{nama : 'Anton', waktu : 4},
{nama : 'Budi', waktu : 5}])
