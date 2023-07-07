// API à utiliser pour le travail: https://randomuser.me/api/?results=5
var callBackGetSuccess = function(data) {
	//console.log("Données de la source", data);
	// Nombre des fiches à afficher
	var n = document.getElementById("fiche").value -1;
	// Donnnées d'une fiche donnée
	var termeSelection;
	// Données de toutes les fiches (Initialement aucune fiche)
	var laselection = '';
	
	var element = document.getElementById("container");
	var i
	for(i = 0; i <= n; i++) {
	// Données à isoler: Photo, prénom, nom et courriel
	termeSelection = '<br /><img alt="image1" src="'+data.results[i].picture.large+'">'+'<br />Nom: '+data.results[i].name.first+" "+data.results[i].name.last
	+'<br />E-mail: '+data.results[i].email;
	laselection = laselection+'<br />'+termeSelection;
	}
	element.innerHTML = laselection;
			}
			
function selection() {
	var url = "https://randomuser.me/api/?results=5";
	$.get(url, callBackGetSuccess).done(function() {
	})
.fail(function() {
	alert("Erreur");
	})
	
	.always(function() {
	//alert("Fin");
	});
}	

