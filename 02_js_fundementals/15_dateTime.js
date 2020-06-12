let val;

const today = new Date();
let birthday = new Date('11-10-2019 11:50:00');
birthday = new Date ('september 10 2019');
birthday = new Date('11/02/2020');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

birthday.setMonth(3);
birthday.setDate(11);
birthday.setFullYear(1993);
birthday.setHours(18);
birthday.setMinutes(56);
birthday.setSeconds(22);
console.log(birthday);