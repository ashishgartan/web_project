const password = [];
const username = [];
const email = [];
function newsignin(){
    document.getElementById("nameField").style.maxHeight="0";
    document.getElementById("title").innerHTML="Sign In";
    document.getElementById("signupBtn").classList.add("disable");
    document.getElementById("signinBtn").classList.remove("disable");

    document.getElementById("eid").value="";
    document.getElementById("pword").value="";
    getUser();
}
function newsignup(){
    document.getElementById("nameField").style.maxHeight="65px";
    document.getElementById("title").innerHTML = "Sign Up";
    document.getElementById("signupBtn").classList.remove("disable");
    document.getElementById("signinBtn").classList.add("disable");
}
function forgetp(){
    console.log(username,password,email);
}

function createUser(){   
    var un=document.getElementById("uname").value;
    var em=document.getElementById("eid").value;
    var pw=document.getElementById("pword").value;
    username.push(un);
    email.push(em);
    password.push(pw);
    return false;
}

function getUser(){
    var em = document.getElementById("eid").value;
    var pw = document.getElementById("pword").value;
    var eindex=email.indexOf(em);
    if(eindex!=-1){
        var pindex=password.indexOf(pw);
        if(pindex!=-1&&pindex==eindex){
            window.location.href = "Main.html";
        }
        else{
            alert("Sorry you entered wrong password!!");
        }
    }
    else{
        alert("Sorry you enterd wrong email-id!!");
    }
    
    return false;
}

