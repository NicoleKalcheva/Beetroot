    let userInput =  prompt('Write a date (dd:mm:yy)');


    let [day, month, year] = userInput.split(':').map(Number);
    
   
    if (year < 100) {
        year += 2000; 
    }
    
    let daysInMonth;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        daysInMonth = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30;
    } else if (month === 2) {
      
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            daysInMonth = 29; 
        } else {
            daysInMonth = 28; 
        }
    }
    
    
    day += 1;
    
   
    if (day > daysInMonth) {
        day = 1;
        month += 1; 
    }
    
   
    if (month > 12) {
        month = 1;
        year += 1;
    }
    
    
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
    const formattedYear = String(year).padStart(4, '0');
    

console.log(`Next date will be ${formattedDay}:${formattedMonth}:${formattedYear}`); 