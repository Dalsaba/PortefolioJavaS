console.log("Hey !")
function affich() {
    document.write ('hey!')
}
const obj = { toto: "truc", bidule: 42 };
function testtest() {
    Object.entries(obj).forEach(
    ([clé, valeur]) => console.log(` ${valeur}`)
);}

testtest()



    const projet = ['Projet 1', 'Projet 2', 'Projet 3', 'Projet 4', 'Projet 5', 'Projet 6']

    function affichProjectbox () { 
        projet.forEach(function (element) {
            var div = document.createElement("button");
            div.className = "btn btn-outline-primary";
            div.setAttribute("type", "button");
            div.setAttribute("id", "projetBox");
            div.innerHTML = element;
            div.setAttribute("onclick", "location.href = 'projet.html'");
            document.getElementById("section2-2").appendChild(div);
        });}
    
        function buttonCV () {
        var div = document.createElement("button");
        div.className = "btn btn-primary";
        div.setAttribute("type", "button");
        div.setAttribute("id", "btn btn-info");
        document.getElementById("section1").appendChild(div);
        var addAhref = document.createElement("a");
        addAhref.setAttribute("href", "cv.html");
        addAhref.setAttribute("style", "color:#FFFFFF;");
        addAhref.innerHTML = "Voir CV";
        document.getElementById("btn btn-info").appendChild(addAhref);
    }

        function myFunction() {
            var btn = document.createElement("a");
            btn.href= "projet.html"; 
            document.getElementById("projetBox").appendChild(btn);
        }

        function testgogo() {
            var createA = document.createElement('a');
            var createAText = document.createTextNode(theCounter);
            createA.setAttribute('href', "http://google.com");
            createA.appendChild(createAText);
            getTheTableTag.appendChild(createA);
        }; 
// une lambda ne permet pas d'utiliser une fonction. 
//Utiliser des fonctions à l'intéreur des map / forEach


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
        function suppr1() {
            var div = document.createElement("p");
            document.getElementById("aproposText").innerHTML = "";
            document.getElementById("aproposText").appendChild(div);
        }
        function replace1() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            document.getElementById("aproposText").innerHTML = entry;
            document.getElementById("aproposText").appendChild(div);
        }
        function add1() {
            const entry = String(window.prompt("Quels ajouts?", ""));
            var div = document.createElement("p");
            div.innerHTML = entry; 
            document.getElementById("aproposText").appendChild(div);
        }

        function suppr2() {
            var div = document.createElement("p");
            document.getElementById("exptext").innerHTML = "";
            document.getElementById("exptext").appendChild(div);
        }
        function replace2() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            document.getElementById("exptext").innerHTML = entry;
            document.getElementById("exptext").appendChild(div);
        }
        function add2() {
            const entry = String(window.prompt("Quels ajouts?", ""));
            var div = document.createElement("p");
            div.innerHTML = entry; 
            document.getElementById("exptext").appendChild(div);
        }

        function suppr3() {
            var div = document.createElement("p");
            document.getElementById("comptext").innerHTML = "";
            document.getElementById("comptext").appendChild(div);
        }
        function replace3() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            document.getElementById("comptext").innerHTML = entry;
            document.getElementById("comptext").appendChild(div);
        }
        function add3() {
            const entry = String(window.prompt("Quels ajouts?", ""));
            var div = document.createElement("p");
            div.innerHTML = entry; 
            document.getElementById("comptext").appendChild(div);
        }

        function suppr4() {
            var div = document.createElement("p");
            document.getElementById("formtext").innerHTML = "";
            document.getElementById("formtext").appendChild(div);
        }
        function replace4() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            document.getElementById("formtext").innerHTML = entry;
            document.getElementById("formtext").appendChild(div);
        }
        function add4() {
            const entry = String(window.prompt("Quels ajouts?", ""));
            var div = document.createElement("p");
            div.innerHTML = entry; 
            document.getElementById("formtext").appendChild(div);
        }
        function suppr5() {
            var div = document.createElement("p");
            document.getElementById("textboxnooverflow").innerHTML = "";
            document.getElementById("textboxnooverflow").appendChild(div);
        }
        function replace5() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            document.getElementById("textboxnooverflow").innerHTML = entry;
            document.getElementById("textboxnooverflow").appendChild(div);
        }
        function add5() {
            const entry = String(window.prompt("Quelles modifications?", ""));
            var div = document.createElement("p");
            div.innerHTML = entry; 
            document.getElementById("textboxnooverflow").appendChild(div);
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



