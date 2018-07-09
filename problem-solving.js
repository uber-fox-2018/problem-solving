(function()  {
    //set start date
    let startDate = 7;

    //set total days;
    let totalDays = 31;

    //initialize members
    let members = getMembers();
    
    //set member's present dates
    for(let i = 0; i < members.length; i++) {
        members[i].presentDates = calculateMemberPresentDate(startDate, totalDays, members[i].intervalDay);
    }

    //set close dates
    let closeDates = getCloseDates(5, totalDays);

    printSchedule(startDate, totalDays, closeDates, members);

})()

class Member {
    constructor(name, intervalDay) {
        this.name = name;
        this.intervalDay = intervalDay;
    }
    
    get presentDates() {
        return this.presentDates;
    }

    set presentDates(dates) {
        this.presentDates = dates;
    }
}

function getMembers() {
    return [
        {name: "Tono", intervalDay: 2, presentDates: []},
        {name: "Anton", intervalDay: 4, presentDates: []},
        {name: "Budi", intervalDay: 5, presentDates: []}
    ]
}

function getCloseDates(firstCloseDate, totalDays) {
    let result = [];

    for(let i = 1; i <= 31; i++) {
        if(i % firstCloseDate === 0) {
            result.push(i);
        }
    }

    return result;
}

function calculateMemberPresentDate(startDate, totalDays, intervalDay) {
    let result = [];

    //set member's present date based on his/her interval day
    for(let i = 0; i <= totalDays - startDate; i++) {
        if(i % intervalDay === 0) {
            result.push(startDate + i);
        }
    }
    return result;
};

function printSchedule(startDate, totalDays, closeDates, members) {
    //loop for each date start from start date to total days
    for (let currentDate = startDate; currentDate <= totalDays; currentDate++) {
        
        let result = [];

        //if current date is in the list of close dates
        //display gym close message 
        if (closeDates.includes(currentDate)) {
            result.push("Tempat Fitness Tutup");
        }
        else {
            //loop through each member
            for(let k = 0; k < members.length; k++) {
                
                //if current date is in the list of member's present date
                //add member's name to result
                if(members[k].presentDates.includes(currentDate)){
                    result.push(members[k].name);
                }
            }
        }
        
        console.log("Tanggal " + currentDate +": " + result.join(', '));
    }
}