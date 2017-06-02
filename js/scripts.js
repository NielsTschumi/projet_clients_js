function Ajouter() {
    var noeudNom = document.getElementById("ajouterNom").value;
    var noeudPrenom = document.getElementById("ajouterPrenom").value;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    document.getElementById("tblPayeur").appendChild(tr);
    tr.setAttribute("id", noeudNom + noeudPrenom);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.innerHTML = noeudNom;
    td2.innerHTML = noeudPrenom;
    var noeudOption = document.createElement("option");
    document.getElementById("listeDeroulante").appendChild(noeudOption);
    noeudOption.innerHTML = noeudNom + " " + noeudPrenom;
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
    var element = document.getElementById(nom + prenom);
    element.parentNode.removeChild(element);
    
    var x = document.getElementById("listeDeroulante");
    x.remove(x.selectedIndex);
    document.getElementById("supprimerNom").value = "";
    document.getElementById("supprimerPrenom").value = "";
}