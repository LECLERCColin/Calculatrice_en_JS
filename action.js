// Fait par LECLERC Colin 
var nombre = new Object(); // Données que l'utilisateur rentre via la calculatrrice
        nombre.premier = 0;
        nombre.deuxieme = 0;
        nombre.opperateur = 0;


function calculatrice(){
    
    var entrer = 0;
    $( ".touches" ).click(function() { // On récupère la valeur de la touche cliquée
        entrer = $(this).html();// On récupère uniqauement la valeur de la touche (pas la balise)
        if(entrer != "+" && entrer != "-" && entrer != "*" && entrer != "/" && entrer != "=" && entrer != "AC"){
          entrer = parseInt(entrer); // On transforme cette touche en int si besoin
          calc(entrer);
        }else{
            calc(entrer);
        }
        
        
   }); 
}
calc = function(nbr){
    
    opp = function(){
        nombre.premier = rese;
        nombre.opperateur = 0;
        nombre.deuxieme = 0;
    }
    var rese = 0;  // rese est la valeur afficher à l'utilisateur (init à 0)
    if(nombre.premier == 0){  // Les deux premiers if gère le premier nombre / chiffre que l'utilisateur va rentrer
        let y = nbr;
        nombre.premier = y;
        rese = nombre.premier; // on affiche la valeur tapée
       
    }else if (nombre.premier != 0 && isNaN(nbr) == false && nombre.opperateur ==0){// On gère le deuxieme, troisième etc chiffre du nombre si il y en a un
        let x = nombre.premier*10 + nbr
        nombre.premier = x;
        rese = nombre.premier;// on affiche la valeur tapée
       
    }else if (nbr == "+" || nbr == "-" || nbr == "/" || nbr == "*" && nombre.opperateur == 0){  // Ici on gère le symbole de l'opperateur 
        let opp = nbr;
        nombre.opperateur = opp;
        rese = nombre.opperateur ;// on affiche la valeur tapée
       
    }else if (nombre.opperateur != 0 && nombre.deuxieme == 0){
        let w = nbr;
        nombre.deuxieme = w;
        rese = nombre.deuxieme;// on affiche la valeur tapée
        
    }else if (nombre.deuxieme != 0 && isNaN(nbr) == false && nombre.opperateur !=0){
        let e = nombre.deuxieme*10 + nbr
        nombre.deuxieme = e;
        rese = nombre.deuxieme;// on affiche la valeur tapée
    }else if (nbr == "=" && nombre.opperateur == "+"){
            rese = nombre.premier + nombre.deuxieme;// on affiche la valeur tapée
            opp();
    }else if (nbr == "=" && nombre.opperateur == "-"){
            rese = nombre.premier - nombre.deuxieme;// on affiche la valeur tapée
            opp();
    }else if (nbr == "=" && nombre.opperateur == "*"){
            rese = nombre.premier * nombre.deuxieme;// on affiche la valeur tapée
            opp();
    }else if (nbr == "=" && nombre.opperateur == "/"){
            rese = nombre.premier / nombre.deuxieme;// on affiche la valeur tapée
            opp();
    }else if (nbr == "AC"){
        nombre.premier = 0;
        nombre.deuxieme = 0;
        nombre.opperateur = 0;
        rese = 0;
    }
    $('#res')[0].value=rese 
}


