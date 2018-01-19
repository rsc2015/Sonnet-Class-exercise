/* Paste the code below into your HTML file.
Take the contents of the sonnet div and place it in a variable.
Find and output the starting position of the word "orphans".
Output the number of characters in the sonnet.
Replace the first occurance of the string "winter" with "yuletide".
Replace all occurances of the string "the" with "a large".
Set the content of the sonnet div with the new string.*/


/* innerTEXT removeS white space first */



var sonnet = document.getElementById("sonnet").innerText; 

/* Find and output the starting position of the word "orphans". */
var orphanIndex = sonnet.indexOf("orphans");
console.log("the index of orphans: ",  orphanIndex);


/* converts all the letters into an array */
sonnetAr = sonnet.split("");

console.log(sonnetAr);

/* counts the number of elements in the array, in our case the characters/letters
in the sonnet */
    sonnet_char = sonnetAr.length;

console.log("The number of characters: ", sonnet_char); 
    
    /* replaces "winter" with "yuletide" */
    console.log(sonnet);
    var sonnet = sonnet.replace("winter", "yuletide");

console.log("Replace the first occurance of the string 'winter' with 'yuletide': ", sonnet);

    /* replace "the" with "a large" */
    sonnet = sonnet.replace(/the /g, "a large ");
    sonnet = sonnet.replace(/The /g, "A large ");
    
console.log("Replace all occurances of the string 'the' with 'a large':" , sonnet);

    document.getElementById("sonnet").innerText = sonnet;













 


