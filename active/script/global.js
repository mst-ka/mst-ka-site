'use strict';

console.log("here");


var all_presPhone = document.getElementsByClassName('presPhone');
var all_aluPhone = document.getElementsByClassName('aluPhone');

[].forEach.call(all_presPhone, function (item) {item.innerHTML = "(816) 863-4066"});
[].forEach.call(all_aluPhone, function (item) {item.innerHTML = "Jim Hennessey - (314) 378-8483"})
