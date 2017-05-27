var userNameInput = document.getElementById('user_name');
var passWordInput = document.getElementById('pass_word');
var fullNameInput = document.getElementById('full_name');
function signup() {
    localStorage.setItem('username',userNameInput.value);
    localStorage.setItem('password',passWordInput.value);
    localStorage.setItem('fullname',fullNameInput.value);
    userNameInput.innerHTML = '';
    passWordInput.innerHTML = '';
    fullNameInput.innerHTML = '';
    document.getElementById('number').innerHTML = '';
    document.getElementById('signup_h3').innerHTML = 'signup successful'
}
function sign_up() {
    window.location.href= 'index.html'
} 
function signin() {
    userNameOutput = localStorage.getItem('username')
    passWordOutput = localStorage.getItem('password')
    fullNameOutput = localStorage.getItem('fullname')
    signin_h3 = document.getElementById('signin_h3')
    if (userNameOutput == document.getElementById('Username').value && passWordOutput == document.getElementById('Password').value){
        signin_h3.innerHTML = 'login successful'
    }
    else{
        document.getElementById('signin_h3').innerHTML = 'Username or Password is not correct.'
    }
}

