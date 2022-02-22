const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const password1 = "password123";
const signInPasswordIngresado = document.getElementById('sign-in-password');

const signUpPassword = document.getElementById('sign-up-password'); 
const confirmPassword = document.getElementById('confirm-password');

let password = signUpPassword.value;
let confirmationPassword = confirmPassword.value;

function signUp(){
    if(confirmPassword.value == signUpPassword.value){
        console.log("Sign Up Success!");
        container.classList.remove("right-panel-active");
    } else if (confirmPassword.value != signUpPassword.value){
        console.error("Not the same password!");
        const differentPassword = document.getElementById('different-password');
        differentPassword.innerHTML = ("Password is different from the one previously typed!");
        const confirmPassword = document.getElementById('confirm-password');
        confirmPassword.style  = ("border: 1px solid; border-color: red;");
    }
}


function passwordCheck(){
    if(signInPasswordIngresado.value == password1 || signUpPassword.value){
        console.log("Sign In Success!");
    } else if(signInPasswordIngresado != password1 && signInPasswordIngresado != signInPasswordIngresado.value){
        console.log("Sign In Error")
        const errorSpan = document.getElementById('sign-in-error');
        errorSpan.innerHTML = "Wrong Password!"
        signInPasswordIngresado.style = ("border: 1px solid; border-color: red;");
    } 
    
}
//Comentario Test
