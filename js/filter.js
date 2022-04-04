
var all_cats = ["passive-physical-visualization", "active-physical-visualization", "physical-model", "measuring-instrument", "interactive-installation", "enabling-technology", "other", "uncertain"];
;



isGallery = window.location.href.indexOf("gallery") != -1;
if (!isGallery) {
	$('#linkbutton').html('<img style="padding-bottom:3px; padding-right:5px;" src="/list/images/gallery-icon.png"/>Gallery view');
	$('#buttonlink').attr('href', "/list/gallery");
} else {
	$('#linkbutton').html('<img style="padding-bottom:4px; padding-right:6px;" src="/list/images/list-icon.png"/>List view');
	$('#buttonlink').attr('href', "/list");
}

function toggle(b) {
	var type = b.id.slice(0, -7);
	var entries = $((isGallery ? '.portfolio-item.category-' : '.entry-main.category-') + type);
	if ($(b).hasClass("filterbutton-on")){
		console.log("hiding for " + type);
		entries.hide();
		$(b).toggleClass("filterbutton-on filterbutton-off");
	} else {
		entries.show();
		$(b).toggleClass("filterbutton-on filterbutton-off");
	}
	update_counts();

}




function count_posts(name) {
	var posts = $(".category-"+name);
	return posts.length;
}

function reset() {
	$("button").each(function(index, element){
		if ($(element).hasClass("filterbutton-off")){
			var type = element.id.slice(0, -7);
			var entries = $('.category-' + type);
			entries.hide();
		} 
	});
}

window.onload = function () { 
	reset();
	update_counts();

}

update_counts = function () { 
	// var cats = ["passive-physical-visualization", "active", "physical-model", "measuring-instrument", "interactive-installation", "enabling-technology", "other", "uncertain"];
	for (var i = 0; i < all_cats.length; i++) {
		cat = all_cats[i];
		e = document.getElementById(cat + '-toggle');
		s = e.innerHTML;
		s = s.substr(0, s.indexOf(' (')); 
		s += " (" + count_posts(cat) + ")";
		e.innerHTML = s;
	}
}

	// var countUpdateTimer = setInterval(update_counts, 100);

	var win = jQuery(window);
	var bar = jQuery('#category-bar');
	var placeholder  = jQuery('#category-bar-placeholder');
	var bar_margin = bar.css('margin-top');
	bar_margin = bar_margin.replace(/\D/g,'');
	var eloffset = bar.offset().top - parseInt(bar_margin);

	var sticky_active = document.documentElement.clientHeight / placeholder.height() > 6;

	function update_sticky() {
	    if (eloffset < win.scrollTop() && sticky_active) {
	        bar.addClass("fixed");
	    } else {
	        bar.removeClass("fixed");
	    }
	    placeholder.height(bar.outerHeight(true));
	}

	win.scroll(function() {
		update_sticky();
	});
	window.onresize = function() {
		placeholder.height(bar.outerHeight(true));
		sticky_active = document.documentElement.clientHeight / placeholder.height() > 6;
		update_sticky();
	};
