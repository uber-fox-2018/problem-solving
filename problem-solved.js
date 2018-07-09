
function goToFitness(){
	let tonoDays = 7;
	let antonDays = 7;
	let budiDays = 7;
	
	for(let i = 7; i <= 31 ; i++){
		let people_going = [];
		if(i === tonoDays){
			people_going.push("Tono");
			tonoDays+=2;
		}

		if(i === antonDays){
			people_going.push("Anton");
			antonDays+=4;
		}

		if(i === budiDays){
			people_going.push("Budi");
			budiDays+=5;
		}

		if(!(i%5)){
			console.log("Tanggal "+i+": Tempat Fitness Tutup");
		}
		else{
			console.log("Tanggal "+i+": "+people_going.toString());
		}
	}
}

goToFitness();