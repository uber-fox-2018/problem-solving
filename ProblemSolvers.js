/*PSEUDOCODE 
  STORE param with any value 
  STORE nama with empty string
  STORE haripertama with 7
  STORE tampung with empty array

  FOR j less then length of param1 minus 1
    append param1 index j to tampung
    add j by 1
  
  FOR i equal to 7 less then equal to 31
    IF i equal to 7
      FOR j equal to 0 less then length of param index 0
        IF j equal to length of param index 1 minus 1
          STORE nama with param[0][j]
        ELSE 
          STORE nama with param[0][j] ,
        add j by 1

    FOR j less then param[1][j] 
      IF i equal to haripertama plus param[i][j]
        STORE nama with tampung[j]
        param1 plus tampungp[j]
    
    IF i modulus 5 equal to 0
      STORE nama with tempat fitness Tutup

    print tanggal i nama
    nama equal to empty string
*/
function namaJadwal (param){
    var nama = '';
    var haripertama = 7
    var tampung = []
    for (var j=0 ; j < param[1].length ; j++){
      tampung.push(param[1][j])
    }
    
    
      for (var i=7 ; i <= 31 ; i++){
        if ( i == 7){
          for (var j=0 ; j <param[0].length ; j++){
            if (j == param[1].length -1){
              nama += param[0][j]
            }
            else {
            nama += param[0][j] + ', '
            }
          }
        }
       
        for (var j=0 ; j < param[1][j] ; j++){
          if (i == haripertama + param[1][j]){
            nama += param[0][j] + ', '
            param[1][j] += tampung[j] 
          }
        }
         if (i%5 ==0 ){
          nama = 'Tempat Fitness Tutup'
        }
       console.log('Tanggal ' + i +': ' + nama)
        nama = ''
      }
    
    }
    
    console.log(namaJadwal([['Tono','Anton','Budi'],[2,4,5]]))