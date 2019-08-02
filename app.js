var hourNow = prompt('what is the current hour?');
var greeting;

if (hourNow > 18) {
    greeting = 'good evening';
} else if (hourNow > 12) {
    greeting = 'good afternoon';
} else if (hourNow > 0) {
    greeting = 'good morning';
} else {
    greeting = 'welcome to class'
}

alert(greeting + ' brian');

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
    changeColor('pink'); 
    el_down.innerHTML = "Background Color changed"; 
}        

