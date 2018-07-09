/* PSEUDOCODE
FUNCTION problemSolving with parameter arr:array
    STORE "days" with empty array
    STORE "users" with empty array
    STORE "mod" with empty array
    STORE "user" with empty array
    STORE "arrFinal" with empty array
    STORE "i" with 0
    FOR "i" to length of arr 
        PUSH arr[i][0] to "users"
        PUSH arr[i][1] to "days"
        PUSH CALCULATE 7 % arr[i][1] to "mod"
        SET "i" with "i" + 1
    END FOR
    STORE "j" with 7
    FOR "j" to 31
        IF "j" MOD 5 EQUALS 0 THEN 
            PUSH [j,["Tempat Fitness Tutup"]] to "arrFinal"
        ELSE 
            STORE "k" with 0
            FOR "k" to length of "mod"
                IF "j" MOD days[k] EQUALS mod[k] THEN 
                    PUSH users[k] to "user"
                END IF
                SET "k" with "k" + 1
            END FOR
            PUSH [j, user] to "arrFinal"
            SET "user" with empty array
        END IF 
        SET "j" with "j" + 1
    END FOR
    STORE "l" with 0
    FOR "l" to length of arrFinal
        IF length of arrFinal[l][1] EQUALS 0 THEN
          DISPLAY "Tanggal " + arrFinal[l][0] + ": "
        ELSE 
          DISPLAY "Tanggal " + arrFinal[l][0] + ": " + arrFinal[l][1]
        END IF
        SET "l" with "l" + 1
    END FOR
END FUNCTION
 */

function problemSolving(arr){
    let days=[];
    let users=[];
    let mod=[];
    let user=[];
    let arrFinal=[];
    for(let i=0 ; i<arr.length;i++){
        users.push(arr[i][0]);
        days.push(arr[i][1]);
        mod.push(7%arr[i][1]);
    }

    for(let j=7;j<=31;j++){
        if(j%5 === 0){
           arrFinal.push([j,["Tempat Fitness Tutup"]]);
        }else{
            for(let k=0;k<mod.length;k++){
                if (j%days[k]===mod[k]){
                   user.push(users[k]);
                }       
            }
            arrFinal.push([j, user]);
            user=[];
        }
    }
   for(let l=0;l<arrFinal.length;l++){
    if(arrFinal[l][1].length===0){
      console.log("Tanggal " + arrFinal[l][0] + ": ")
    }else{
      console.log("Tanggal " + arrFinal[l][0] + ": " + arrFinal[l][1]);
    }
   }    
}
console.log(problemSolving([["Tono", 2], ["Anton", 4], ["Budi", 5]]));