function windowAdjust() {
	var myElements = document.querySelectorAll(".section");
 
	for (var i = 0; i < myElements.length; i++) {
    	myElements[i].style.width = window.innerWidth + "px";
    }
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