// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

let country = ["Australia","United States of America" ,"Germany" ];

function longCountryName(arr){
    let longestCountry = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i].length > longestCountry.length){
            longestCountry = arr[i];
        }
    }
    return longestCountry;
}

console.log(longCountryName(country));