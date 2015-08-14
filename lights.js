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
    var aboutme = document.getElementById("about_me");

    initials.style.fontSize = '150px';
    home.style.top = '75px';
    home.style.right = '0px';
    occupation.style.opacity = 1.0;
    fullname.style.opacity = 1.0;
    aboutme.style.opacity = 0.0;

	if(curr_scroll < 4340) {
		var font_offset = parseFloat(initials.style.fontSize) + curr_scroll;
        var top_offset = 75 - curr_scroll * (0.367);
        var right_offset = 0;
        var opacity_offset = 1.0 - curr_scroll*(0.005);

        if(font_offset > 800) right_offset = (font_offset - 800) * 0.555;
		if(font_offset > 4340) font_offset = 4340;
        if(top_offset < -1500) top_offset = -1500;
        if(right_offset > 2000) right_offset = 2000;
        if(opacity_offset < 0) opacity_offset = 0;

		initials.style.fontSize = font_offset + 'px';
        home.style.top = top_offset + 'px';
        home.style.right = right_offset + 'px';
        occupation.style.opacity = opacity_offset;
        fullname.style.opacity = opacity_offset;
	}

    if(curr_scroll > 4300 && curr_scroll < 4500) {
        initials.style.fontSize = '4340px';
        home.style.top = '-1500px';
        home.style.right = '2000px';
        occupation.style.opacity = 0;
        fullname.style.opacity = 0;
        aboutme.style.opacity = (curr_scroll)*(0.000075);
    }

    if(curr_scroll > 4500 && curr_scroll < 5000) {
        initials.style.fontSize = '4340px';
        home.style.top = '-1500px';
        home.style.right = '2000px';
        occupation.style.opacity = 0;
        fullname.style.opacity = 0;
        aboutme.style.opacity = 1.0;
    }

    if(curr_scroll > 5000 && curr_scroll < 6500) {
        initials.style.fontSize = '4340px';
        home.style.top = '-1500px';
        home.style.right = '2000px';
        occupation.style.opacity = 0;
        fullname.style.opacity = 0;

        aboutme.style.opacity = 1.0 - (curr_scroll)*(0.00017);
        var right_offset = 2000 - curr_scroll * (0.00075);
        var top_offset = -1500 + curr_scroll * (0.0005);

        if(right_offset < 1250) right_offset = 1250;
        if(top_offset > -1250) top_offset = -1250;

        home.style.top = top_offset + 'px';
        home.style.right = right_offset + 'px';
    }

    if(curr_scroll > 6500) {
        initials.style.fontSize = '4340px';
        home.style.top = '-1250px';
        home.style.right = '1250px';
        occupation.style.opacity = 0;
        fullname.style.opacity = 0;
        aboutme.style.opacity = 0;
    }
}