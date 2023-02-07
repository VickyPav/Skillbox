let beginRange = +prompt ('Enter the start year of the range', '1900');
    let endRange = +prompt ('Enter the end year of the range', '2016');
let leapYears = [];
 
for (let y = beginRange; y <= endRange; y++) 
   if (new Date (y, 1, 29).getDate () == 29) leapYears [leapYears.length] = y;
console.log (leapYears.join (', '));