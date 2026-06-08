// --- LOGIQUE DE L'EXERCICE DE SIMPLIFICATION ---

function verifierReponseRadical() {
    // 1. Récupérer les valeurs entrées par l'élève
    let élèveA = parseInt(document.getElementById('reponse-a').value);
    let élèveB = parseInt(document.getElementById('reponse-b').value);
    
    let message = document.getElementById('message-retroaction');
    
    // 2. Validation si les cases sont vides
    if (isNaN(élèveA) || isNaN(élèveB)) {
        message.innerHTML = "⚠️ S'il te plaît, remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    
    // 3. Vérification des réponses
    if (élèveA === 4 && élèveB === 2) {
        message.innerHTML = "🎉 Excellent travail ! 4&radic;2 est la forme simplifiée au maximum.";
        message.style.color = "#27ae60";
    } else if (élèveA === 2 && élèveB === 8) {
        message.innerHTML = "🤔 C'est un bon début, mais ce n'est pas simplifié au maximum. Peux-tu extraire un autre carré parfait de &radic;8 ?";
        message.style.color = "#e67e22";
    } else {
        message.innerHTML = "❌ Ce n'est pas tout à fait ça. Réessaie ou demande un indice !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRadical() {
    let zoneIndice = document.getElementById('message-indice');
    zoneIndice.innerHTML = "💡 <strong>Indice :</strong> Trouve le plus grand carré parfait qui divise 32 (ex: 4, 9, 16...). Écris ensuite &radic;32 comme &radic;(Carré Parfait &times; Reste).";
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}
