var cityBottom = 0;


function windowAdjust() {
	var myElements = document.querySelectorAll(".section");
 
	for (var i = 0; i < myElements.length; i++) {
    	myElements[i].style.height = window.innerHeight + "px";
    }

    city.style.top = window.innerHeight + "px";
    first.style.top = (window.innerHeight * 0.3) + "px";
    intro.style.top = "-200px";

    cityBottom = parseInt(city.height);
}

function curvedWords() {
    var occupation = document.getElementById("occupation");
    var curved = '';
    var length = occupation.textContent.length;
    for (var i = 0; i < length; i++) {
    	curved += '<span id="char' + i + '">';
    	curved += occupation.textContent[i] + '</span>';
    }
    occupation.innerHTML = curved;
    var circle = 0;
    for(var j = 0; j < length; j++) {
    	var temp = document.getElementById('char'+j);
    	circle = j * 2;
    	temp.style.WebkitTransform = "rotate(" + circle + "deg)"; 
    }
}

function scroll() {
    var curr_scroll = window.scrollY;
    bar1.style.opacity = curr_scroll * 0.0008; 

    if(curr_scroll < cityBottom*0.85) {
        home.style.visibility = 'visible'
    } else if(curr_scroll > cityBottom*0.85) {
        var offset = (window.innerHeight * 0.3) + (curr_scroll-cityBottom*0.85)*2.25;
        if(offset > 800) {
            offset = 800;
            bar1.style.opacity = 1.0
        }
        first.style.top = offset + 'px';
    }

    if(curr_scroll >= cityBottom + 100) {
        home.style.visibility = 'hidden'

    }
}