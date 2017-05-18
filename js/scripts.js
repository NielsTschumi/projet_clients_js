var numeroLigne = 2;
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
function afficherText() {
    var tblNom = ["Marguerite", "Paul"]
    var tblPrenom = ["Tallmann", "Dupont"]
   /* var espace = " ";
    var i;
    var nomASupprimer = document.getElementById("listeDeroulante").nodeValue;
    var noeudTab = document.getElementById("tblPayeur");
    var lesLignes = noeudTab.getElementsByTagName("tr").nodeValue;
    for (i = 0; i < lesLignes.length; i++) {
        if (lesLignes[i].nodeValue === nomASupprimer.nodeValue) {
            lesLignes[i].parentNode.removeChild(lesLignes[i]);
             
        }
    }
    
    */
}