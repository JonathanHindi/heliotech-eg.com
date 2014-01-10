// JavaScript Document
$(document).ready(function(){
						   
})

$('form#ajax_form .submit').click(function(){
 
}) //end click function

$('#ajax_form .error').hide();	//if error visibile, hide on new click

var name = $('input#name').val();
if (name == "" || name == " " || name == "Name") {
    $('input#name').focus().before('
 
<div class="error">Hey, what is you name!?</div>
 
 
');
    return false;
}
