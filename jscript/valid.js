function check(){

	var uname = document.getElementById('username');
	var passw = document.getElementById('pass');



	var uname1 ="yogesh";
	var pass1 ="yoyo";

	if(uname.value==uname1){
		if(pass.value==pass1){
			window.alert("Loggedin as: "+uname.value);
		}
		else
		{
			window.alert("Wrong password");
		}
	}
	else
	{
		window.alert("Wrong username");
	}
		
}
$(document).ready(function(){
	$path=$("#bio").offset().top;

	$('body').animate({scrollTop:$path},1000);
});

$(document).ready(function(){
	$path=$("#my-work").offset().top;

	$('body').animate({scrollTop:$path},1000);
});

$(document).ready(function(){
	$path=$("#my-skill").offset().top;

	$('body').animate({scrollTop:$path},1000);
});

$(document).ready(function(){
	$path=$("#contact-me").offset().top;

	$('body').animate({scrollTop:$path},1000);
});


});