$(document).ready(function (e) {

    $("#loginForm").submit(function (e) {
        e.preventDefault(); 
        let userName = document.getElementById("loginUserName").value;
        let userPassword = document.getElementById("loginPassword").value;   
        for (let i = 0; i < users.length; i++) { 
            if (users[i].userName == userName && users[i].userPassword == userPassword) {
                openPage("preGame");
                return; 
            }
        }
        alert("User is not exist");               
    });

});




