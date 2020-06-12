const name = 'Brad';
const age = 47;
const job = 'web developer';
const city = 'florida';
let html;

// Without template strings (iterals) (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: '+ age +'</li><li>Job: '+ job +'</li><li>City:'+ city +'</li></ul';

html = '<ul>' +
'<li> Name: '+ name +' </li>'+
'<li> Age:   '+ age +' </li>'+
'<li> Job: '+ job +' </li>'+
'<li> City:'+ city +'</li>'+
'</ul>'

const hello = () => {
  return 'hello';
};

// With templete strings (iterals)
html = `<ul>
<li>Name: ${name} </li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'over 30' : 'Under 30'}</li>
</ul>`

document.body.innerHTML = html;



