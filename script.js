// Fonction pour changer de concept (onglets) dans le Bloc 1
function ouvrirConcept(idConcept) {
    // 1. Cacher toutes les sections de contenu
    let sections = document.getElementsByClassName('concept-content');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // 2. Retirer la couleur active de tous les boutons
    let boutons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].classList.remove('active');
    }

    // 3. Afficher la section demandée
    document.getElementById(idConcept).style.display = 'block';

    // 4. Mettre le bouton cliqué en couleur active
    // On trouve le bouton qui a déclenché l'événement pour lui ajouter la classe 'active'
    event.currentTarget.classList.add('active');
}
