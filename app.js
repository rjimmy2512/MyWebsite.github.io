var hourNow = prompt('Welcome to Our Website. How Old Are You?');
var greeting;

if (hourNow > 18) {
    greeting = 'Welcome To Learning More About God Love.';
} else if (hourNow < 18) {
    greeting = 'Welcome. Some Materials May Be Hard To Understand On This Site. If So, Get Help From Someone Older';
} else {
    greeting = 'Welcome to this site to know and follow God';
}

alert(greeting + ' God Bless You Dear Visitor!');

// this will update the HTML
document.write('<h2>' + greeting + '</h2>');



var el_up = document.getElementById("GFG_UP"); 
var el_down = document.getElementById("GFG_DOWN"); 
var str = "Click on button to change the background color"; 

el_up.innerHTML = str; 

function changeColor(color) { 
    document.body.style.background = color; 
} 
  
function gfg_Run() { 
    changeColor('pink, red, blue, green, yellow'); 
    el_down.innerHTML = "Background Color changed"; 
}        

