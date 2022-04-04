// $(document).ready(function(){  // custom css expression for a case-insensitive contains()
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };


//   function listFilter(header, list) { // header is any element, list is an unordered list
//     // create and add the filter form to the header
//     var input = $("#input");

    
    $('#input')
      .change( function () {
        var matches = 0;
        var filter = $(this).val();
        var list = $('.content.listview');
        if(filter) {
          // this finds all links in a list that contain the input,
          // and hide the ones not containing the input while showing the ones that do
          $(list).find("article:not(:Contains(" + filter + "))").hide();
          $(list).find("article:Contains(" + filter + ")").show().each(function() { matches++; });
          // $(list).find(".NoticeResAvecVignette:not(:Contains(" + filter + "))").hide();
          // $(list).find(".NoticeResAvecVignette:Contains(" + filter + ")").show().each(function() { matches++; });
        } else {
          $(list).find("article").show().each(function() { matches++; });
          // $(list).find("article").show().each(function() { matches++; });
        }
        
        if ($(this).val().length > 0) $("#matchcount").text(matches+" found.");
        return false;
      })
    .keyup( function () {
        // fire the above change event after every letter
        $(this).change();
        if ($(this).val().length > 0) {
          console.log("ping");
          $('#category-bar-placeholder').hide();
        } else {
          $('#category-bar-placeholder').show();
          reset();
          $("#matchcount").text("");
        }
    });
    $('#input').trigger('change');
//   }

// }(jQuery));   