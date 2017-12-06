$(document).ready(function(){

    $("#login-btn").click(function(){

	var username = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();

	var at= email.indexOf("@",[1, email.length]);
   	var dot=email.indexOf(".com",[1, email.length]);
   	var char1=password.indexOf("<",[0, password.length]);
   	var char2=password.indexOf(">",[0, password.length]);
   	var char3=password.indexOf("^",[0, password.length]);
   	var char4=password.indexOf(" ",[0, password.length]);

   	var valid=0;

   		// check if username field is not empty
    	if(username == ""){
    		$("#username-error").html("<span class='error-massege'>username is required</span>");
    		$("#username").css("border-color","red");
    	}
    	else if(username != ""){
    		$("#username-error").html("");
    		$("#username").css("border-color","#ccc");
    		valid++;
    	}
    	// check if email field is not empty
    	if(email == ""){
    		$("#email-error").html("<span class='error-massege'>email is required</span>");
    		$("#email").css("border-color","red");    		
    	}
    	//check if email is in a valid form
    	else if(at == -1 || dot == -1){
    		$("#email-error").html("<span class='error-massege'>invalid email</span>");
    	}
    	else if(email != "" && at != -1 && dot != -1){
    		$("#email-error").html("");
    		$("#email").css("border-color","#ccc");
    		valid++;
    	}
    	// check if password field is not empty
    	if(password == ""){
    		$("#password-error").html("<span class='error-massege'>password is required</span>");
    		$("#password").css("border-color","red");
    	}
    	//check if password is valid
    	else if (char1 != -1 || char2 != -1 || char3 != -1 || char4 != -1) {
    		$("#password-error").html("<span class='error-massege'>invalid password</span>");
    	}
    	else if(password != "" && char1 == -1 && char2 == -1 && char3 == -1 && char4 == -1){
    		$("#password-error").html("");
    		$("#password").css("border-color","#ccc");
    		valid++;
    	}

    	if(valid == 3){
    		$("#login-success").html("<span class='alert alert-success'>login success</span>");
    	}
    	else{
    		$("#login-success").html("");
    	}
    });
});