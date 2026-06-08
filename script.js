<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloc 1 - SN5</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav>
        <a href="index.html">Accueil</a>
        <a href="bloc1.html" class="active">Bloc 1</a>
        <a href="bloc2.html">Bloc 2 : Trigonométrie</a>
    </nav>

    <div class="content-container">
        <header>
            <h1>Bloc 1</h1>
            <p>Sélectionnez le concept que vous souhaitez pratiquer.</p>
        </header>

        <main>
            <div class="sous-menu">
                <button class="tab-btn active" onclick="ouvrirConcept('valeur-absolue')">Valeur Absolue</button>
                <button class="tab-btn" onclick="ouvrirConcept('racine-carree')">Racine Carrée</button>
                <button class="tab-btn" onclick="ouvrirConcept('partie-entiere')">Partie Entière</button>
            </div>

            <div id="valeur-absolue" class="concept-content">
                <h2>La Fonction Valeur Absolue</h2>
                <p>Bienvenue dans la section de la valeur absolue. Notre premier exercice interactif sera codé ici !</p>
            </div>

            <div id="racine-carree" class="concept-content" style="display:none;">
                <h2>La Fonction Racine Carrée</h2>
                <p>Espace d'exercices pour la fonction racine carrée (en construction).</p>
            </div>

            <div id="partie-entiere" class="concept-content" style="display:none;">
                <h2>La Fonction Partie Entière</h2>
                <p>Espace d'exercices pour la fonction partie entière ou fonction en escalier (en construction).</p>
            </div>
        </main>

        <footer>
            <p>&copy; 2026 - Site de Mathématiques SN5</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
