var users = [{userName: "p", userPassword: "p"}];
var currentUser = {userName: "p", userPassword: "p"};

function clickPage(itemDataOption) {
   
    openPage(itemDataOption.getAttribute("data-option"));

}



function openPage(pageScriptName) {

    //remove active class
    const activatedSection = document.getElementsByClassName("activeSection");
    activatedSection[0].classList.remove("activeSection");

    //add active class
    const newActivatedSection = document.getElementById("main").querySelector(`#${pageScriptName}Section`);
    newActivatedSection.classList.add("activeSection");

}
