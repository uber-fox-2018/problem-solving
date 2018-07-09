PSEUDOKODE

store `t` with number 7
store `a` with number 7
store `b` with number 7

store `i` with number 7
store `hadir` with blank string

store `limit` with number 31

loop `i` until less equal `limit`

    if `i` mod 5 equal 0 
        set hadir with "Tempat fitness tutup"
        display "Tanggal " + `i` + hadir 

    else if `i` equal `t` and `i` equal `a` and `i` equal `b`
        set hadir with "Tono, Anton, Budi"
        display "Tanggal " + `i` + hadir 
        set `t` with `t` + 2
        set `a` with `a` + 4
        set `b` with `b` + 5

    else if `i` equal `t` and `i` not equal `a` and `i` not equal `b`
        set hadir with "Tono"
        display "Tanggal " + `i` + hadir 
        set `t` = `t` + 2

    else if `i` equal `t` and `i` equal `a` and `i` not equal `b`
        set hadir with "Tono, Anton"
        display "Tanggal " + `i` + hadir 
        set `t` = `t` + 2
        set 'a' = `a` + 4

    else if `i` equal `t` and `i` not equal `a` and `i` equal `b`
        set hadir with "Tono, Budi"
        display "Tanggal " + `i` + hadir 
        set `t` = `t` + 2
        set `b` = `b` + 5

    else if `i` not equal `t` and `i` equal `a` and `i` not equal `b`
        set hadir with "Anton"
        display "Tanggal " + `i` + hadir 
        set `a` = `a` + 4
    
    else if `i` not equal `t` and `i` equal `a` and `i` equal `b`
        set hadir with "Anton, Budi"
        display "Tanggal " + `i` + hadir 
        set `a` = `a` + 4
        set `b` = `b` + 5

    else if `i` not equal `t` and `i` not equal `a` and `i` equal `b`
        set hadir with "Budi"
        display "Tanggal " + `i` + hadir 
        set `b` = `b` + 5
    
    else 
        set hadir with ""
        display "Tanggal " + `i` + hadir     

end loop