// --- GESTION DES ONGLETS (TABS) ---
function ouvrirConcept(nomConcept) {
    let contenus = document.getElementsByClassName("concept-content");
    for (let i = 0; i < contenus.length; i++) {
        contenus[i].style.display = "none";
    }
    let boutons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove("active");
    }
    document.getElementById(nomConcept).style.display = "block";
    event.currentTarget.classList.add("active");
}

// ==========================================================================
// BANQUE DE DONNÉES (Niveau SN5)
// ==========================================================================

const banqueSimplification = [
    { enonce: "32", repA: 4, repB: 2, indice: "Indice: 16 × 2" },
    { enonce: "50", repA: 5, repB: 2, indice: "Indice: 25 × 2" },
    { enonce: "12", repA: 2, repB: 3, indice: "Indice: 4 × 3" },
    { enonce: "75", repA: 5, repB: 3, indice: "Indice: 25 × 3" },
    { enonce: "20", repA: 2, repB: 5, indice: "Indice: 4 × 5" },
    { enonce: "45", repA: 3, repB: 5, indice: "Indice: 9 × 5" },
    { enonce: "18", repA: 3, repB: 2, indice: "Indice: 9 × 2" },
    { enonce: "28", repA: 2, repB: 7, indice: "Indice: 4 × 7" },
    { enonce: "48", repA: 4, repB: 3, indice: "Indice: 16 × 3" },
    { enonce: "72", repA: 6, repB: 2, indice: "Indice: 36 × 2" },
    { enonce: "98", repA: 7, repB: 2, indice: "Indice: 49 × 2" },
    { enonce: "108", repA: 6, repB: 3, indice: "Indice: 36 × 3" },
    { enonce: "80", repA: 4, repB: 5, indice: "Indice: 16 × 5" },
    { enonce: "125", repA: 5, repB: 5, indice: "Indice: 25 × 5" },
    { enonce: "200", repA: 10, repB: 2, indice: "Indice: 100 × 2" }
];

// Nouvelle banque de rationalisation avec le format : (a * √b) / c
const banqueRationalisation = [
    { num: "5", den: "2", repA: 5, repB: 2, repC: 2, indice: "Multiplie par √2 en haut et en bas. Le bas devient √2 × √2 = 2. Rien ne se simplifie !" },
    { num: "3", den: "5", repA: 3, repB: 5, repC: 5, indice: "Multiplie par √5 en haut et en bas. Le dénominateur devient 5." },
    { num: "7", den: "3", repA: 7, repB: 3, repC: 3, indice: "Multiplie par √3 en haut et en bas. Le résultat reste une fraction sur 3." },
    { num: "6", den: "3", repA: 2, repB: 3, repC: 1, indice: "Tu obtiens 6√3 / 3. Ici, 6 divisé par 3 donne un nombre entier (2) ! Donc c = 1." },
    { num: "10", den: "5", repA: 2, repB: 5, repC: 1, indice: "Tu obtiens 10√5 / 5. Réduis la fraction entière ! (c = 1)" },
    { num: "1", den: "2", repA: 1, repB: 2, repC: 2, indice: "Multiplie par √2 en haut et en bas. Le haut devient 1√2 et le bas 2." },
    { num: "4", den: "6", repA: 2, repB: 6, repC: 3, indice: "Tu obtiens 4√6 / 6. La fraction 4/6 se simplifie par 2 pour donner 2/3 !" },
    { num: "8", den: "6", repA: 4, repB: 6, repC: 3, indice: "Tu obtiens 8√6 / 6. Simplifie la fraction 8/6 en divisant par 2." },
    { num: "9", den: "6", repA: 3, repB: 6, repC: 2, indice: "Tu obtiens 9√6 / 6. Simplifie la fraction 9/6 en divisant par 3 !" },
    { num: "2", den: "7", repA: 2, repB: 7, repC: 7, indice: "Multiplie par √7 en haut et en bas. La fraction ne se réduit pas." },
    { num: "15", den: "6", repA: 5, repB: 6, repC: 2, indice: "Tu obtiens 15√6 / 6. Simplifie 15/6 en divisant le haut et le bas par 3." },
    { num: "12", den: "10", repA: 6, repB: 10, repC: 5, indice: "Tu obtiens 12√10 / 10. Divise le coefficient et le dénominateur par 2." },
    { num: "11", den: "2", repA: 11, repB: 2, repC: 2, indice: "Multiplie par √2 en haut et en bas. Rien ne se simplifie." },
    { num: "14", den: "2", repA: 7, repB: 2, repC: 1, indice: "Tu obtiens 14√2 / 2, ce qui se divise parfaitement pour donner 7√2. (c = 1)" },
    { num: "20", den: "8", repA: 5, repB: 2, repC: 2, indice: "Astuce avancée ! √8 se simplifie en 2√2. L'expression est donc 20 / (2√2) = 10 / √2 = 10√2 / 2 = 5√2 !" }
];

let questionSimplificationActuelle = {};
let questionRationalisationActuelle = {};

// --- LOGIQUE : SIMPLIFIER ---
function genererSimplification() {
    let index = Math.floor(Math.random() * banqueSimplification.length);
    questionSimplificationActuelle = banqueSimplification[index];
    document.getElementById("enonce-simplifier").innerHTML = questionSimplificationActuelle.enonce;
    document.getElementById("reponse-a").value = "";
    document.getElementById("reponse-b").value = "";
    document.getElementById("message-retroaction").innerHTML = "";
    document.getElementById("message-indice").style.display = "none";
}

function verifierReponseRadical() {
    let eleveA = parseInt(document.getElementById('reponse-a').value);
    let eleveB = parseInt(document.getElementById('reponse-b').value);
    let message = document.getElementById('message-retroaction');
    
    if (isNaN(eleveA) || isNaN(eleveB)) {
        message.innerHTML = "⚠️ Remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    if (eleveA === questionSimplificationActuelle.repA && eleveB === questionSimplificationActuelle.repB) {
        message.innerHTML = `🎉 Excellent ! ${questionSimplificationActuelle.repA}&radic;${questionSimplificationActuelle.repB} est exact.`;
        message.style.color = "#27ae60";
    } else {
        message.innerHTML = "❌ Ce n'est pas la réponse simplifiée au maximum. Réessaie !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRadical() {
    let zoneIndice = document.getElementById('message-indice');
    zoneIndice.innerHTML = `💡 <strong>Indice :</strong> ${questionSimplificationActuelle.indice}`;
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}

// --- LOGIQUE : RATIONALISER (MIS À JOUR AVEC C) ---
function genererRationalisation() {
    let index = Math.floor(Math.random() * banqueRationalisation.length);
    questionRationalisationActuelle = banqueRationalisation[index];
    
    document.getElementById("num-rationaliser").innerHTML = questionRationalisationActuelle.num;
    document.getElementById("den-rationaliser").innerHTML = "&radic;" + questionRationalisationActuelle.den;
    
    document.getElementById("rationaliser-a").value = "";
    document.getElementById("rationaliser-b").value = "";
    document.getElementById("rationaliser-c").value = "";
    document.getElementById("rationaliser-retroaction").innerHTML = "";
    document.getElementById("rationaliser-indice").style.display = "none";
}

function verifierRationalisation() {
    let eleveA = parseInt(document.getElementById('rationaliser-a').value);
    let eleveB = parseInt(document.getElementById('rationaliser-b').value);
    let eleveC = parseInt(document.getElementById('rationaliser-c').value);
    let message = document.getElementById('rationaliser-retroaction');
    
    if (isNaN(eleveA) || isNaN(eleveB) || isNaN(eleveC)) {
        message.innerHTML = "⚠️ S'il te plaît, remplis les trois cases du modèle.";
        message.style.color = "#e67e22";
        return;
    }
    
    if (eleveA === questionRationalisationActuelle.repA && 
        eleveB === questionRationalisationActuelle.repB && 
        eleveC === questionRationalisationActuelle.repC) {
        
        let affichageRep = eleveC === 1 ? `${eleveA}&radic;${eleveB}` : `(${eleveA}&radic;${eleveB}) / ${eleveC}`;
        message.innerHTML = `🎉 Bravo ! La forme rationalisée simplifiée est bien ${affichageRep}.`;
        message.style.color = "#27ae60";
    } else {
        message.innerHTML = "❌ Ce n'est pas tout à fait ça. Vérifie si ta fraction finale est simplifiée au maximum ou réessaie !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRationaliser() {
    let zoneIndice = document.getElementById('rationaliser-indice');
    zoneIndice.innerHTML = `💡 <strong>Indice :</strong> ${questionRationalisationActuelle.indice}`;
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}

window.onload = function() {
    genererSimplification();
    genererRationalisation();
};
