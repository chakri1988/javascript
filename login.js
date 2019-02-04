

function register(){

var name = document.getElementById('name').value;
var pw = document.getElementById('pw').value;
var  em= document.getElementById('email').value;
var phn = document.getElementById('phnumber').value;

localStorage.setItem("Email",em);
localStorage.setItem("password",pw);
localStorage.setItem("name",name);
localStorage.setItem("phnonenum",phn);

alert('Register successfully');

}
function back_login(){
    document.getElementById('login-form').style.display='block';
}
function login(){

    

    var username = document.getElementById('userName').value;
    var password = document.getElementById('userPw').value;
    
    var user = localStorage.getItem('name');
    var pass = localStorage.getItem('password');

    if(username=='' && password==''){
        alert('username and password do  not empty')
    }else if(username===user && password === pass){
        alert('login success');
    }else if(username!=user && password!=pass){
        alert('username and password are invalid')
    }
    
}

