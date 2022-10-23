'use strict'

window.addEventListener('load', ()=>{
    var usuarios = [];
    var list = document.querySelector("#list");
    var loading = document.querySelector(".loading");

    // FETCH y peticiones a servicios API

    fetch("https://jsonplaceholder.typicode.com/users")
        .then (data => data.json())
        .then(users => {
            usuarios=users;
            
            usuarios.map((users,index)=> {
                loading.style.display="none";
                let nombre = document.createElement("h4");
                var li = document.createElement("li");
                nombre.innerHTML = users.name;
                li.append(nombre);
                list.append(li);
            })
        });
    
});