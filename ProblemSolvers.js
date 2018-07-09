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
      FOR j equal to 0 less then length of param index 0                   STORE nama with param[0][j] ,
        add j by 1

    FOR j less then param[1][j] 
      IF i equal to haripertama plus param[i][j]
        STORE nama with tampung[j]
        param1 plus tampungp[j]
    
    IF i modulus 5 equal to 0
      STORE nama with tempat fitness Tutup

    STORE split equal to nama.split('')
       FOR l less then split length
         IF split index split.length minus 2 equal to ', '
           split index split.length minus 2 equal to empty string
    STORE nama equal to split.join
    
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
            
            nama += param[0][j] + ', '
            
          }
        }
       
        for (var j=0 ; j < param[1][j] ; j++){
          if (i == haripertama + param[1][j]){
            nama += param[0][j] + ', '
            param[1][j] += tampung[j] 
          }
        }
         if (i%5 ==0 ){
          nama = 'Tempat Fitness Tutup, '
        }

      var split = nama.split('')
      for (var l=0 ; l < split.length ; l++){
        if (split[split.length-2] == ','){
          split[split.length-2] = ''
        }
      }
      var nama = split.join('')
       console.log('Tanggal ' + i +': ' + nama)
        nama = ''
      }
    
    }
    
    console.log(namaJadwal([['Tono','Anton','Budi'],[2,4,5]]))