let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;             //Must start with
re = /d$/i;             //Must end with 
re = /world$/i       
re = /^hello$/i         //start with hello and ends end with hello
re = /^h.llo$/i         //Matches any one(only) character
re = /^h*llo$/i         //Matches any character 0 or more times
re = /gre?a?y/i;        //Optional character
re = /gre?a?y?/i;       //Escape character

// Brackets [] - Charcter set
re = /gr[ae]y/i;         //Must be an a or e
re = /[GF]ray/i;        //Must be G or F
re = /[^GF]ray/i;       //match anything except g or f
re = /[A-Z]ray/;        //Matches any uppercase
re = /[a-z]ray/;        //Matches lowercase letters
re = /[A-Za-z]ray/;     //Matches any letters
re = /[0-9]ray/;        //match any numbers                  
re = /[0-9][0-9]ray/;   //formatching two numbers

// Braces {} - Quantifiers
re = /Hel{2}o/i;         //Must occur excatly {m} amount of times

re = /Hel{2,4}o/i;       //Must occur at least {m} times

// Parenthesis () - Grouping
re = /^([0-9]x){3}$/

// Shorthand charcter classes
re = /\w/;              //word character - alphanewmwric or _
re = /\w+/;             // + = one or more word/ characters
re = /\W/ ;              // non word charcters
re = /\d/;              // Match Digits
re = /\d+/;              // one or more digits
re = /\D/;               // Match non digit
re = /\s/;               // Match white space
re = /\S/;               // Match non white space
re = /Hell\b/i;          //Word boundary

// Assertions
re = /x(?=y)/;  //Match x only if followed by y

re=/x(?=!y)/    //Match x only if not followed by y     


// String to match
const str = 'xykjgfkljgfklgjk';

// Log results
const result = re.exec(str);
console.log(result);


function reTest (re, str) {
    if(re.test(str)) {
        console.log(`${str} Matches ${re.source}`);
    } else {
        console.log(`${str} does NOT Match ${re.source}`);
    }
}


reTest(re, str);
