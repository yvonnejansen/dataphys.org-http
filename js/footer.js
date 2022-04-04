function toggle_visibility(id) {
	var e = document.getElementById(id);
 	if(e.style.display == 'block')
  		e.style.display = 'none';
		else {
  		e.style.display = 'block';
  		e.scrollIntoView(true);
  	}
}

var views_expressed = jQuery('.views-expressed');
var footer = jQuery('.footer');
$(window).on("load", function(){
	// myresize();
	// window.onresize = myresize;
	// console.log("setting bibtex date");
	$("#bibtex-date").html(new Date().toISOString().slice(0, 10));
});
var views_expressedSize = views_expressed.outerWidth();
var containter_width = footer.width();

var myresize = function(){
	if (window.innerWidth > 580){
		containter_width = footer.width();
		views_expressed.outerWidth(containter_width - 265);
	} else {
		views_expressedSize = views_expressed.outerWidth();
		containter_width = footer.width();
		views_expressed.outerWidth(containter_width);

	}
}

