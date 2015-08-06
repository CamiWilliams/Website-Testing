function windowAdjust() {
	var myElements = document.querySelectorAll(".section");
 
	for (var i = 0; i < myElements.length; i++) {
    	myElements[i].style.height = window.innerHeight + "px";
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

function scroll() {
	var curr_scroll = window.scrollY;
	var section2 = document.getElementById("section2").offsetHeight;
	var initials = document.getElementById("initials");
    var fullname = document.getElementById("fullname");
    var occupation = document.getElementById("occupation");
    var home = document.getElementById("home");

    initials.style.fontSize = '150px';
    home.style.top = '75px';
    home.style.right = '0px';
    occupation.style.opacity = 1.0;
    fullname.style.opacity = 1.0;

	if(curr_scroll < 4287) {
		var font_offset = parseFloat(initials.style.fontSize) + curr_scroll;
        var top_offset = 75 - curr_scroll * (0.4);
        var right_offset = 0;
        var opacity_offset = 1.0 - curr_scroll*(0.005);

        if(curr_scroll > 1000) right_offset = curr_scroll - 1000;
		if(font_offset > 5000) font_offset = 2500;
        if(top_offset < -1500) top_offset = -1500;
        if(right_offset > 2000) right_offset = 2000;
        if(opacity_offset < 0) opacity_offset = 0;

		initials.style.fontSize = font_offset + 'px';
        home.style.top = top_offset + 'px';
        home.style.right = right_offset + 'px';
        occupation.style.opacity = opacity_offset;
        fullname.style.opacity = opacity_offset;
	} else {
        initials.style.fontSize = '4435px';
        home.style.top = '-1500px';
        home.style.right = '2000px';
        occupation.style.opacity = 0;
        fullname.style.opacity = 0;
    }
}