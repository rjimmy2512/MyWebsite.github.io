var hourNow = prompt('Welcome to Our Website. How Old Are You?');
var greeting;

if (hourNow > 18) {
    greeting = 'Nice Choice. You will Know More About God Love!';
} else if (hourNow < 18) {
    greeting = 'Welcome. Hope This Site Will Help You Know How God Loves Us';
} else {
    greeting = 'Welcome to this site to know and follow God'
}

alert(greeting + ' Dear Visitor');

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

