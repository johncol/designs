// JavaScript Document

window.onload=function(){
	document.getElementById("login").onclick=showLogin;
	document.getElementById("login-button").onclick=showLogin;
}

var formIsVisible=false;

function showLogin(){
	var usernameE=document.getElementById("username");
	var passwordE=document.getElementById("password");
	var form=document.getElementById("login-form");
	if(formIsVisible){
		var usernameEmpty=usernameE.value.trim().length==0;
		if(this.id=="login-button" && (usernameEmpty || passwordE.value.length==0)){
			if(usernameEmpty)
				usernameE.focus();
			else
				passwordE.focus();
			return;
		}
		form.style.visibility="hidden";
		form.style.opacity=0;
	}
	else if(!formIsVisible){
		form.style.visibility="visible";
		form.style.opacity=1;
		usernameE.focus();
	}
	formIsVisible=!formIsVisible;
}