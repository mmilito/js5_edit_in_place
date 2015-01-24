// LOGIC WORKS FOR MULTIPLE ENTRIES IN FORM AFTER ADDITION OF DIVS TO MAKE DOM TRAVERSAL MORE GRANULAR. EXPLORE CLEANER METHOD

// start with adding class 'editable'
////////


$('input').hide();


$(document).on('ready', function() {
	

//show text box with input when clicked, saving content to vars 
	$('p').on('click',function() {

		 var user_text=$(this).text(); //user_text is <p> initial setting
		 $(this).hide();
		 
		 //console.log(user_text);

		 var user_input=$(this).siblings(); //user_input holds siblings of "this"
		 
		 //console.log(user_input);

		 $(user_input[0]).val(user_text); //set value of initial text into the sibling (s/b input sib) and show
		 
		 //console.log(user_input[0]);

		 $(user_input).show();
	});

//listen on blur and replace value on text to updated value
 	 $('input').on('blur',function() {
	 	
	 	var user_text2=$(this).val(); //user_text2 is now set to the text that user typed in
		$(this).hide();

 	 	//console.log(user_text2);

 	 	var user_input2=$(this).siblings(); //user_input2 holds siblings of this
 	 	
 	 	//console.log(user_input2);

 	 	$(user_input2[0]).text(user_text2);
 	 	$(user_input2).show();
 	});


// page close DO NOT EDIT
});

