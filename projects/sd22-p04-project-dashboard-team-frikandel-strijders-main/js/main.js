const register = document.querySelector('.register');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const signinButton = document.querySelector('.sign-in');


register.addEventListener('click', function(){
    window.localStorage.setItem('email', emailInput.value);
    window.localStorage.setItem('password', passwordInput.value);
    alert("successfully registered, please log in.")

})


let currentEmail = window.localStorage.getItem("email");
let currentPassword = window.localStorage.getItem("password");
signinButton.addEventListener("click", function(){
    if (currentEmail == emailInput.value && currentPassword == passwordInput.value) {
        alert("Welcome!")
        window.location.replace("/home.html");
    }
})
    


// if (i) {
//     console.log('Login successful');
//     alert('Login successful')
//     // Perform necessary actions after successful login

//     // Example: Redirect to another page
//     window.location.href = '/home.html';
// } else {
//     console.log('Login failed');
//     alert('Login failed')
//     // Perform necessary actions after failed login
// }
