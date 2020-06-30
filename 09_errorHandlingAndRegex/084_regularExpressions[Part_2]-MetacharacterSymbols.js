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
re = /gre?a?y?/i;        //Escape character
re = /gre?a?y\?/i;


// String to match
const str = 'Gray';

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
