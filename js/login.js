$(document).ready(function (e) {

    $("#loginForm").submit(function (e) {
        e.preventDefault(); 
        let userName = document.getElementById("loginUserName").value;
        let userPassword = document.getElementById("loginPassword").value;
        let userData = {userName, userPassword};   
        for (let i = 0; i < users.length; i++) {  
            if (users[i].userName === userData.userName && users[i].password === userData.password) {
                openPage("preGame");
                return; 
            }
        }
        alert("User is not exist");               
    });

});




