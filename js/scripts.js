function Ajouter() {
    var noeudNom = document.getElementById("ajouterNom").value;
    var noeudPrenom = document.getElementById("ajouterPrenom").value;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    document.getElementById("tblPayeur").appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.innerHTML = noeudNom;
    td2.innerHTML = noeudPrenom; 
    var noeudNomComplet = noeudNom + " " + noeudPrenom;
    var option1 = document.createElement("option");
    document.getElementById("listeDeroulante").appendChild(option1);
    option1.innerHTML = noeudNomComplet;
}
function afficher() {
    var nomComplet = document.getElementById("listeDeroulante").value;
    var tbl = new Array();
    tbl = nomComplet.split(" ");
    var nom = tbl[0];
    var prenom = tbl[1];
    document.getElementById("supprimerNom").value = nom;
    document.getElementById("supprimerPrenom").value = prenom;
}

function supprimer() {
    var nom = document.getElementById("supprimerNom").value;
    var prenom = document.getElementById("supprimerPrenom").value;
    var noeudTab = document.getElementById("tblPayeur");
    var lesLignes = noeudTab.getElementsByTagName("tr");
    var longueur = lesLignes.length;
    var i;
    alert(longueur);
    for (i = 0; i < longueur; i++){
        
        
        
        
    }
    
    
    var x = document.getElementById("listeDeroulante");
    x.remove(x.selectedIndex);
}