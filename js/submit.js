

	// $(document).ready(function(){
	// 	console.log("intializing editor");
	tinymce.init({
    selector: '#editor',
    height: 470,
    statusbar: false,
    menubar: false,
    plugins: 'image media lists link',
    toolbar: 'undo redo bold italic bullist numlist outdent indent blockquote link unlink image media alignleft aligncenter alignright',

  });
	// });


function validateForm() {
    var x = document.forms["new_post"]["title"].value;
    if (x == null || x === '') {
        alert("Please enter a title for the submission.");
        return false;
    }
    var x = document.forms["new_post"]["year_of_creation"].value;
    if (x == null || x === '') {
        alert("Please enter a number for the year when the artifact was created. Estimate if unclear and elaborate in the description field.");
        return false;
    }
    var x = document.forms["new_post"]["sources"].checked;
    if (!x) {
        alert("Please confirm that you properly acknowledged all the sources that you used.");
        return false;
    }
    var x = document.forms["new_post"]["added_by"].value;
    if (x == null || x === '') {
        alert("Please enter your name to acknowledge this submission to you.");
        return false;
    }

    
   return true;
}