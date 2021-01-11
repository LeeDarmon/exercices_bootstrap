var correct_password = "Lee"
var password = document.getElementById("password");



document.getElementById("button_validate").addEventListener("click", function(event){
    event.preventDefault();
    console.log(password.value)
    if (password.value == correct_password){
        alert("mot de passe correct");
    }
    else{
        alert("mot de passe incorrect")
    }
  });