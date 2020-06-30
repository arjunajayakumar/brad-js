const user = {email: 'jdoe@gmail.com'};

try {
    // Produce a referenece error
    // myFunction();

    // Produce a type error
    // null.myFunction();

    // Produce syntaxError
    // console.log(eval('2+2'));
    // eval('"Hello World"');

    // Willproduce a URIEroor
    // decodeURIComponent('%');

    if(!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch (e) {
console.log(`User Error: ${e.message}`);

//  console.log(e);
//  console.log(`${e.name} : ITS A NULL ERROR`)
//  console.log(e.message);
//  console.log(e.name);
//  console.log(e instanceof ReferenceError);
//  console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs regardless of result');
}

console.log('program continues...')
