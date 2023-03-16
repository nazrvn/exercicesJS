function exo1(){

    let A = 12;
    let B = 2;
    let C = A * B;

    console.log(C);
}

function exo2(){

    let A = "123";
    let B = "12";
    let C = A + B;

    console.log(C);
}

function exo3(){

    let prixHorsTaxe = prompt('Quel est le prix Hors Taxe ?');
    console.log(parseInt(prixHorsTaxe) * 1.196);
}

function exo4(){

    let prenom = prompt('Quel est votre prénom ?');
    let nom = prompt('Quel est votre nom ?');
    
    console.log('Bonjour ' + prenom + ' votre nom est '  + nom);
}

function exo5(){

    let a = prompt('Donne moi un premier nombre');
    let b = prompt('Donne moi un deuxieme nombre');

    if (a * b > 0) console.log('le produit de ces deux nombres est positif');
    else { console.log('le produit de ces deux nombres est negatif'); }
}

function exo6(){

    let age = prompt('Quel est ton age ?');

    if (age < 13) { 
        console.log('Action Man');
    }
    else if (age > 13 && age < 18) {
        console.log('Matrix');
    }
    else {
        console.log('Evil Dead');
    }
}

function exo7(min, max){
    min = 0;
    max = 10;
    let isNumber = Math.floor(Math.random() * (max - min + 1) + min);

    let getNumber = parseInt(prompt('Un nombre entre 0 et 10'));

    while (isNumber !== getNumber){
        let getNumber = parseInt(prompt('Ressayez !'));
        if (isNumber === getNumber) {
            console.log('Bravo!');
            break;
        }
    }

}

function exo8() {

    let a = parseInt(prompt('Donne moi un nombre !'));

    for (let i = 0; i <= a; i++){
        console.log(i);
    }
}

function exo9(){

    let aDeviner = 14;
    let userReponse = parseInt(prompt('Devine le nombre'));

    if (userReponse > aDeviner){
        console.log('tu est au dessus du nombre a deviner !');
    }
    else if (userReponse < aDeviner) {
        console.log('tu est au dessous du nombre a deviner !');
    }
    else {
        console.log('Le nombre a été trouver bravo!');
    }
}

function exo10(){
    chiffres = [10, 15, 20, 15, 14, 8];
    let res = 0;
    for(i in chiffres){
        res += chiffres[i];
    }
    console.log(res);
}

function ex11(){
    let nombreEleves = prompt("Combien d'élèves ?");
    let note = [];
    for(let i = 1; i <= nombreEleves; i++){
        let noteEleve = prompt('Note de chaque Eleve:');
        note.push(noteEleve);
    }
    note.join(', ');
    console.log('voici la note de chaque élève: ' + note);
}

function ex12(){
    let nombreEleves = prompt("Combien d'élèves ?");
    let notes = [];
    for(let i = 1; i <= nombreEleves; i++){
        let noteEleve = prompt('Note de chaque Eleve:');
        notes.push(noteEleve);
    }
    let res = notes.filter(note => note >= 10);
    console.log(res.join(', '));
}

function exo13(){
    nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];
    plusGrandNombre = [];

    nbres.forEach(function(nombre){
        plusGrandNombre.push(Math.max(...nombre));
    });
    console.log(plusGrandNombre);
}

function exo14(){
    let mot = prompt('Donne moi un mot: ');
    console.log('voici le nombre de lettres que contient votre mot: ' + mot.length);
}

function exo15(min, max){
    min = 0;
    max = 5;
    let isNumber = Math.floor(Math.random() * (max - min + 1) + min);

    let getNumber = parseInt(prompt('Devine le nombre compris entre 0 et 5'));

    while (isNumber !== getNumber){
        if (isNumber > getNumber){
            let getNumber = parseInt(prompt('plus grand'));
        }
        else if (isNumber < getNumber){
            let getNumber = parseInt(prompt('plus petit'));
        }
        else {
            console.log('Bravo!');
            break;
        }
    }
}

function exo16(a, b){
    if (a > b) return 0;
    else { return 1; }
}

// https://fr.wikipedia.org/wiki/Tri_par_s%C3%A9lection

// '[2, 3, 4, 11, 11, 2, 10,\n]' VQLEUR
// '[i = 0, j = 1, 2, 3, 4, 5, 6\n]' POSITION
// '[min = 1, j = 1, 2, 3, 4, 5, 6\n]' POSITION
// 
function exo17(){
    let n = .length;
  // n = 7 - 1 caracteres 
    for (let i = 0; i < n  ; i++){
        let min = i;
        for (let j = i + 1; j < n; j++){
            if ([j] < [min]){
                min = j;
            }
        }
        if (min !== i){
        let temp = [i];
        [i] = [min];
        [min] = temp;
        }
    }
    console.log();
}

function exo18(arr){
    let array = arr.sort();
    console.log(array.slice(-1));
}

function exo19(str){
    let nombresVoyelles = str.match(/[aeiuo]/gi);
    console.log(nombresVoyelles.length);
}

function exo20(){

}

function exo21(){

}