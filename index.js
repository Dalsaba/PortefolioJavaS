console.log("Hey !")
function affich() {
    document.write ('hey!')
}

const projet = ['Projet 1', 'Projet 2', 'Projet 3', 'Projet 4', 'Projet 5', 'Projet 6']

function updateColor() {
     Math.floor(Math.random() * 255);
    } ; 
    
function myFunction() {
    var btn = document.createElement("a");
    btn.innerHTML="click";
    btn.setAttribute("href","https://www.google.com");
    btn.setAttribute("target","_blank");
    document.getElementById("projetBox").appendChild(btn);
}

// une lambda ne permet pas d'utiliser une fonction. 
//Utiliser des fonctions à l'intéreur des map / forEach
function affichProjectbox () { 
    projet.forEach(function (element) {
        var div = document.createElement("button");
        div.className = "projetBox";
        div.innerHTML = element;
        div.setAttribute("onClick", "myFunction()");
        document.getElementById("section2-2").appendChild(div);
    });

}
