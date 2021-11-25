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
        div.className = "btn btn-outline-primary";
        div.innerHTML = element;
        div.setAttribute("onClick", "myFunction()");
        document.getElementById("section2-2").appendChild(div);
    });

function suppr() {
            var div = document.createElement("p");
            document.getElementById("tata").innerHTML = "";
            document.getElementById("tata").appendChild(div);
        }

        function replace() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            document.getElementById("tata").innerHTML = entry;
            document.getElementById("tata").appendChild(div);
        }
        function add() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            div.innerHTML = entry; 
            document.getElementById("tata").appendChild(div);
        }    

function affichModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";

    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}    

var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');
// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});
}
