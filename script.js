// --- LOGIQUE DE L'EXERCICE DE RATIONALISATION ---

function verifierRationalisation() {
    // 1. Récupérer les valeurs entrées par l'élève
    let élèveA = parseInt(document.getElementById('rationaliser-a').value);
    let élèveB = parseInt(document.getElementById('rationaliser-b').value);
    
    let message = document.getElementById('rationaliser-retroaction');
    
    // 2. Validation si les cases sont vides
    if (isNaN(élèveA) || isNaN(élèveB)) {
        message.innerHTML = "⚠️ S'il te plaît, remplis les deux cases avant de vérifier.";
        message.style.color = "#e67e22";
        return;
    }
    
    // 3. Vérification des réponses pédagogiques
    if (élèveA === 2 && élèveB === 3) {
        message.innerHTML = "🎉 Bravo ! En multipliant par &radic;3 en haut et en bas, on obtient 6&radic;3 / 3, ce qui se simplifie magnifiquement en 2&radic;3.";
        message.style.color = "#27ae60";
    } else if (élèveA === 6 && élèveB === 3) {
        message.innerHTML = "🤔 Tu as bien éliminé la racine du dénominateur (6&radic;3 / 3), mais tu as oublié de diviser le coefficient 6 par le dénominateur 3 ! Simplifie ta fraction.";
        message.style.color = "#e67e22";
    } else {
        message.innerHTML = "❌ Ce n'est pas tout à fait ça. Diviser par une racine revient à multiplier le haut et le bas par cette même racine. Réessaie !";
        message.style.color = "#c0392b";
    }
}

function afficherIndiceRationaliser() {
    let zoneIndice = document.getElementById('rationaliser-indice');
    zoneIndice.innerHTML = "💡 <strong>Indice :</strong> Multiplie le numérateur et le dénominateur par &radic;3 pour faire disparaître la racine du bas. N'oublie pas que &radic;3 &times; &radic;3 = 3 !";
    zoneIndice.style.display = "block";
    zoneIndice.style.color = "#2980b9";
}
