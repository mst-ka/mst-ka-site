'use strict';

// console.log("here");

var all_presPhone = document.getElementsByClassName('presPhone');
var all_aluPhone = document.getElementsByClassName('aluPhone');

// console.log(all_presPhone.length);

[].forEach.call(all_presPhone, function (item) {item.innerHTML = "(417) 824-0849"});
[].forEach.call(all_aluPhone, function (item) {item.innerHTML = "Jim Hennessey - (314) 378-8483"})
