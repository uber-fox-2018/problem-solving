/* PSEUDOCODE
FUNCTION problemSolving with parameter num:number
  STORE "user1" with "Tono"
  STORE "user2" with "Anton"
  STORE "user3" with "Budi"
  STORE "tono" with empty array
  STORE "anton" with empty array
  STORE "budi" with empty array
  STORE "i" with 7
  FOR "i" to num 
    PUSH "i" to "tono"
    SET "i" with "i" + 1
  END FOR
  STORE "j" with 7
  FOR "j" to num 
    PUSH "j" to "anton"
    SET "j" with "j" + 4
  END FOR
  STORE "k" with 7
  FOR "k" to num 
    PUSH "k" to "budi"
    SET "k" with "k" + 5
  END FOR
  STORE "l" with 7
  FOR "l" to num
    IF "l" MOD 5 EQUALS 0 THEN 
      DISPLAY "Tanggal " + l + ": Tempat Fitness Tutup"
    ELSE IF "l" MOD 2 EQUALS 1 THEN 
        IF "anton" INCLUDES l AND "tono" INCLUDES l AND "budi" INCLUDES l THEN
            DISPLAY "Tanggal " + l + ": " + "user1" + ", " + "user2" + ", " + "user3"
        ELSE IF "anton" INCLUDES l AND "tono" INCLUDES l THEN 
            DISPLAY "Tanggal " + l + ": " + "user1" + ", " + "user2"
        ELSE IF "budi" INCLUDES l AND "tono" INCLUDES l THEN 
            DISPLAY "Tanggal " + l + ": " + "user1" + ", " + "user3" 
        ELSE IF "budi" NOT INCLUDES l AND "tono" INCLUDES l OR "anton" NOT INCLUDES l AND "tono" INCLUDES l THEN 
            DISPLAY "Tanggal " + l + ": " + "user1"
        END IF
    ELSE IF "budi" INCLUDES l THEN
        DISPLAY "Tanggal " + l + ": " + "user3"
    ELSE 
        DISPLAY "Tanggal " + l + ": "
    END IF
    SET "l" with "l" + 1
  END FOR
END FUNCTION
 */
function problemSolving(num){
    let user1= "Tono";
    let user2= "Anton";
    let user3= "Budi";
    let tono=[];
    let anton = [];
    let budi = [];
    for(let i=7;i<=num;i++){
        tono.push(i);
    }
    for(let j=7;j<=num;j+=4){
        anton.push(j);
    }
    for(let k=7;k<=num;k+=5){
        budi.push(k);
    }

    for(let l=7;l<=num;l++){
        if(l%5===0){
            console.log(`Tanggal ${l}: Tempat Fitness Tutup`);
        }else if(l%2===1){
            if(anton.includes(l) && tono.includes(l) && budi.includes(l)){
                console.log(`Tanggal ${l}: ${user1}, ${user2}, ${user3} `);
            }else if(anton.includes(l) && tono.includes(l)){
                console.log(`Tanggal ${l}: ${user1}, ${user2} `);
            }else if(budi.includes(l)&& tono.includes(l)){
                console.log(`Tanggal ${l}: ${user1}, ${user3} `);
            }else if(!budi.includes(l) && tono.includes(l) || !anton.includes(l) && tono.includes(l)){
                console.log(`Tanggal ${l}: ${user1}`);
            }
        }else if(budi.includes(l)){
            console.log(`Tanggal ${l}: ${user3}`);
        }else{
            console.log(`Tanggal ${l}:`);
        }
    }
}
problemSolving(31);
