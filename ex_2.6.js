

//Function to get the year's century
function getCentury(year) {
    var century = Math.ceil(year / 100);
    return century;
 }
 
 // Example usage
 var year = 1279;
 var century = getCentury(year);
 console.log("The century corresponding to " + year + " is " + century);
