// --- GESTION DES ONGLETS (TABS) ---
function ouvrirConcept(nomConcept) {
    // Masquer tous les contenus d'onglets
    let contenus = document.getElementsByClassName("concept-content");
    for (let i = 0; i < contenus.length; i++) {
        contenus[i].style.display = "none";
    }

    // Désactiver la classe 'active' sur tous les boutons
    let boutons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove("active");
    }

    // Afficher l'onglet cliqué et activer son bouton
    document.getElementById(nomConcept).style.display = "block";
    event.currentTarget.classList.add("active");
}

// --- EXERCICE 1 : SIMPLIFICATION ---
function verifierReponseRadical() {
    let eleveA = parseInt(document.getElementById('reponse-a').value);
    let eleveB = parseInt(document.getElementById('reponse-b').value);
    let message = document.getElementById('message-retroaction');
    
    if (isNaN(eleveA) || isNaN(eleveB)) {
        message.innerHTML = "⚠️ S'il te plaît, remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    
    if (eleveA === 4 && eleveB === 2) {
        message.innerHTML = "🎉 Excellent travail ! 4&radic;2 est la forme simplifiée au maximum.";
        message.style.color = "#27ae60";
    } else if (eleveA === 2 && eleveB === 8) {
        message.innerHTML = "🤔 C'est un bon début, mais ce n'est pas simplifié au maximum. Peux-tu extraire un autre carré parfait de &radic;8 ?";
        message.style.color = "#e67e22";
    } else {
        message.innerHTML = "❌ Ce n'est pas tout à fait ça. Réessaie ou demande un indice !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRadical() {
    let zoneIndice = document.getElementById('message-indice');
    zoneIndice.innerHTML = "💡 <strong>Indice :</strong> Trouve le plus grand carré parfait qui divise 32 (ex: 4, 9, 16...). Écris ensuite &radic;32 comme &radic;(16 &times; 2).";
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}

// --- EXERCICE 2 : RATIONALISATION ---
function verifierRationalisation() {
    let eleveA = parseInt(document.getElementById('rationaliser-a').value);
    let eleveB = parseInt(document.getElementById('rationaliser-b').value);
    let message = document.getElementById('rationaliser-retroaction');
    
    if (isNaN(eleveA) || isNaN(eleveB)) {
        message.innerHTML = "⚠️ S'il te plaît, remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    
    if (eleveA === 2 && eleveB === 3) {
        message.innerHTML = "🎉 Bravo ! En multipliant par &radic;3 en haut et en bas, on obtient 6&radic;3 / 3, ce qui se simplifie en 2&radic;3.";
        message.style.color = "#27ae60";
    } else if (eleveA === 6 && eleveB === 3) {
        message.innerHTML = "🤔 Tu as bien éliminé la racine du dénominateur (6&radic;3 / 3), mais tu as oublié de diviser le coefficient 6 par 3 !";
        message.style.color = "#e67e22";
    } else {
        message.innerHTML = "❌ Ce n'est pas tout à fait ça. Multiplie le haut et le bas par &radic;3. Réessaie !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRationaliser() {
    let zoneIndice = document.getElementById('rationaliser-indice');
    zoneIndice.innerHTML = "💡 <strong>Indice :</strong> Multiplie le numérateur et le dénominateur par &radic;3 pour faire disparaître la racine du bas. Note que &radic;3 &times; &radic;3 = 3 !";
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}
