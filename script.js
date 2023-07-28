function submit(){
let mail = document.getElementById('email').value;
let pass = document.getElementById('password').value;

const validemail="user@gmail.com";
const validpassword="1234";



    if( mail===validemail && pass===validpassword){
        window.location.href="welcomePage.html"
    }else{
        alert("Invalid email or Password try again later.");
    }
}