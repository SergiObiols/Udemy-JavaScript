'use strict'

window.addEventListener('load', () => {
    var form, name, surname, age, box_dashed, name_error, surname_error, age_error;
    form = document.querySelector("#form");
    box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";

    form.addEventListener('submit', () => {
        name = document.querySelector("#name").value;
        surname = document.querySelector("#surname").value;
        age = parseInt(document.querySelector("#age").value);
        name_error = document.querySelector("#name_error");
        surname_error = document.querySelector("#surname_error");
        age_error = document.querySelector("#age_error");
        
        box_dashed.style.display = "block";

        if (name.trim() == "null" || name.trim().length == 0){
            name_error.style.color = "red";
            name_error.innerHTML = "El nombre no es correcto";
            name_error.style.display = "block";
            return false;
        }
        else {
            name_error.style.display = "none";
        }
        if (surname.trim() == "null" || surname.trim().length == 0){
            surname_error.style.color = "red";
            surname_error.innerHTML = "Los apellidos no son correctos";
            surname_error.style.display = "block";
            return false;
        } 
        else {
            surname_error.style.display = "none";
        }
        if (age == "null" || age.length <= 0 || isNaN(age)){
            age_error.style.color = "red";
            age_error.innerHTML = "La edad no es correcta";
            age_error.style.display = "block";
            return false;
        }     
        else {
            age_error.style.display = "none";
        }   
        var showname = document.querySelector("#showname span");
        showname.innerHTML = name;
        var showsurname = document.querySelector("#showsurname span");
        showsurname.innerHTML = surname;
        var showage = document.querySelector("#showage span");
        showage.innerHTML = age;


    });
});