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
// BANQUE DE DONNÉES DES 15 EXERCICES PAR CONCEPT (Niveau SN5)
// ==========================================================================

const banqueSimplification = [
    { enonce: "32", repA: 4, repB: 2, indice: "Trouve le plus grand carré parfait qui divise 32. (Indice: 16 × 2)" },
    { enonce: "50", repA: 5, repB: 2, indice: "Trouve le plus grand carré parfait qui divise 50. (Indice: 25 × 2)" },
    { enonce: "12", repA: 2, repB: 3, indice: "Quel carré parfait divise 12 ? Pense à 4 × 3." },
    { enonce: "75", repA: 5, repB: 3, indice: "Pense aux pièces de 25 cents... 25 × quoi donne 75 ?" },
    { enonce: "20", repA: 2, repB: 5, indice: "Quel carré parfait divise 20 ? Pense à 4 × 5." },
    { enonce: "45", repA: 3, repB: 5, indice: "Cherche dans la table de 9... 9 × 5 = 45." },
    { enonce: "18", repA: 3, repB: 2, indice: "Quel carré parfait divise 18 ? Pense à 9 × 2." },
    { enonce: "28", repA: 2, repB: 7, indice: "Cherche un carré parfait. Pense à 4 × 7." },
    { enonce: "48", repA: 4, repB: 3, indice: "Attention, 4 divise 48, mais il y a un carré parfait plus grand ! Pense à 16 × 3." },
    { enonce: "72", repA: 6, repB: 2, indice: "Le plus grand carré parfait ici est 36. Pense à 36 × 2." },
    { enonce: "98", repA: 7, repB: 2, indice: "Divise 98 par 2... tu vas trouver un carré parfait magique !" },
    { enonce: "108", repA: 6, repB: 3, indice: "Cherche un grand carré parfait. Pense à 36 × 3." },
    { enonce: "80", repA: 4, repB: 5, indice: "Le carré parfait à extraire est 16. Pense à 16 × 5." },
    { enonce: "125", repA: 5, repB: 5, indice: "Pense aux multiples de 25... 25 × 5 = 125." },
    { enonce: "200", repA: 10, repB: 2, indice: "Celui-là est visuel ! Pense à 100 × 2." }
];

const banqueRationalisation = [
    { num: "6", den: "3", repA: 2, repB: 3, indice: "Multiplie par √3 en haut et en bas. Tu obtiendras 6√3 / 3. Simplifie ensuite !" },
    { num: "10", den: "5", repA: 2, repB: 5, indice: "Multiplie par √5 en haut et en bas. Tu obtiendras 10√5 / 5. Simplifie !" },
    { num: "4", den: "2", repA: 2, repB: 2, indice: "Multiplie par √2 en haut et en bas, puis divise ton coefficient par 2." },
    { num: "15", den: "3", repA: 5, repB: 3, indice: "Après avoir éliminé la racine au dénominateur, simplifie 15 / 3." },
    { num: "12", den: "6", repA: 2, repB: 6, indice: "Multiplie le haut et le bas par √6, puis réduis la fraction 12 / 6." },
    { num: "21", den: "7", repA: 3, repB: 7, indice: "Multiplie par √7 en haut et en bas, puis réduis 21 / 7." },
    { num: "1", den: "2", repA: 0, repB: 0, indice: "Attends, ce cas donne une fraction (√2 / 2). Demandons une autre question !" }, // Géré par index libre
    { num: "8", den: "2", repA: 4, repB: 2, indice: "Multiplie en haut et en bas par √2. Réduis ensuite 8 / 2." },
    { num: "18", den: "2", repA: 9, repB: 2, indice: "Multiplie en haut et en bas par √2. Réduis ensuite 18 / 2." },
    { num: "20", den: "5", repA: 4, repB: 5, indice: "Multiplie en haut et en bas par √5. Réduis ensuite 20 / 5." },
    { num: "14", den: "7", repA: 2, repB: 7, indice: "Multiplie en haut et en bas par √7. Réduis ensuite 14 / 7." },
    { num: "24", den: "6", repA: 4, repB: 6, indice: "Multiplie en haut et en bas par √6. Réduis ensuite 24 / 6." },
    { num: "9", den: "3", repA: 3, repB: 3, indice: "Multiplie en haut et en bas par √3. Réduis ensuite 9 / 3." },
    { num: "30", den: "5", repA: 6, repB: 5, indice: "Multiplie en haut et en bas par √5. Réduis ensuite 30 / 5." },
    { num: "40", den: "2", repA: 20, repB: 2, indice: "Multiplie en haut et en bas par √2. Réduis ensuite 40 / 2." }
];

// Variables pour suivre la question active
let questionSimplificationActuelle = {};
let questionRationalisationActuelle = {};

// ==========================================================================
// LOGIQUE DU CONCEPT : SIMPLIFIER
// ==========================================================================

function genererSimplification() {
    // Choisir une question au hasard (on évite la même si possible)
    let index = Math.floor(Math.random() * banqueSimplification.length);
    questionSimplificationActuelle = banqueSimplification[index];
    
    // Mettre à jour l'affichage HTML
    document.getElementById("enonce-simplifier").innerHTML = questionSimplificationActuelle.enonce;
    
    // Nettoyer les anciennes réponses et messages
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
        message.innerHTML = "⚠️ S'il te plaît, remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    
    if (eleveA === questionSimplificationActuelle.repA && eleveB === questionSimplificationActuelle.repB) {
        message.innerHTML = `🎉 Excellent travail ! ${questionSimplificationActuelle.repA}&radic;${questionSimplificationActuelle.repB} est la forme simplifiée au maximum.`;
        message.style.color = "#27ae60";
    } else {
        message.innerHTML = "❌ Ce n'est pas la réponse attendue ou ce n'est pas simplifié au maximum. Réessaie ou demande un indice !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRadical() {
    let zoneIndice = document.getElementById('message-indice');
    zoneIndice.innerHTML = `💡 <strong>Indice :</strong> ${questionSimplificationActuelle.indice}`;
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}

// ==========================================================================
// LOGIQUE DU CONCEPT : RATIONALISER
// ==========================================================================

function genererRationalisation() {
    let index = Math.floor(Math.random() * banqueRationalisation.length);
    // Éviter l'index 6 qui était notre note de fraction pure pour l'instant
    if(index === 6) index = 0; 
    
    questionRationalisationActuelle = banqueRationalisation[index];
    
    // Mettre à jour l'affichage HTML de la fraction
    document.getElementById("num-rationaliser").innerHTML = questionRationalisationActuelle.num;
    document.getElementById("den-rationaliser").innerHTML = "&radic;" + questionRationalisationActuelle.den;
    
    // Nettoyer
    document.getElementById("rationaliser-a").value = "";
    document.getElementById("rationaliser-b").value = "";
    document.getElementById("rationaliser-retroaction").innerHTML = "";
    document.getElementById("rationaliser-indice").style.display = "none";
}

function verifierRationalisation() {
    let eleveA = parseInt(document.getElementById('rationaliser-a').value);
    let eleveB = parseInt(document.getElementById('rationaliser-b').value);
    let message = document.getElementById('rationaliser-retroaction');
    
    if (isNaN(eleveA) || isNaN(eleveB)) {
        message.innerHTML = "⚠️ S'il te plaît, remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    
    if (eleveA === questionRationalisationActuelle.repA && eleveB === questionRationalisationActuelle.repB) {
        message.innerHTML = `🎉 Bravo ! Le résultat est bien ${questionRationalisationActuelle.repA}&radic;${questionRationalisationActuelle.repB}.`;
        message.style.color = "#27ae60";
    } else {
        message.innerHTML = "❌ Ce n'est pas tout à fait ça. Utilise un indice ou réessaie l'étape de simplification de ta fraction !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRationaliser() {
    let zoneIndice = document.getElementById('rationaliser-indice');
    zoneIndice.innerHTML = `💡 <strong>Indice :</strong> ${questionRationalisationActuelle.indice}`;
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}

// Lancement automatique d'une première question au chargement de la page
window.onload = function() {
    genererSimplification();
    genererRationalisation();
};
