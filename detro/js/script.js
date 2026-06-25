document.addEventListener("DOMContentLoaded", function(){

const form =
document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

if(name.trim() === "" || email.trim() === ""){

alert("Please fill all fields.");

e.preventDefault();

}

});

}

});