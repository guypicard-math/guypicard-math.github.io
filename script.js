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
            <h1>Bloc 1 : Opérations sur les radicaux</h1>
            <p>Pratiquez les techniques de base pour manipuler les expressions de fonctions.</p>
        </header>

        <main>
            <div class="sous-menu">
                <button class="tab-btn active" onclick="ouvrirConcept('simplifier')">Simplifier l'expression</button>
                <button class="tab-btn" onclick="ouvrirConcept('rationaliser')">Rationaliser</button>
            </div>

            <div id="simplifier" class="concept-content">
                <h2>Simplifier l'expression</h2>
                <p>Ici, nous allons créer l'application pour s'exercer à extraire les carrés parfaits de la racine (ex: $\sqrt{32} = 4\sqrt{2}$).</p>
            </div>

            <div id="rationaliser" class="concept-content" style="display:none;">
                <h2>Rationaliser le dénominateur</h2>
                <p>Ici, nous allons créer l'application pour s'exercer à éliminer la racine au dénominateur (ex: $\frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$).</p>
            </div>
        </main>

        <footer>
            <p>&copy; 2026 - Site de Mathématiques SN5</p>
        </footer>
    </div>

    <script src="script.js"></script>
</body>
</html>
