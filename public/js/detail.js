/* **** ANIMATION TEXTE **** */
const text = "Détail formation php !"; // Le texte à afficher
const baliseH1 = document.getElementById("animated-text"); // Conteneur pour le texte
let index = 0;

function typeLetterByLetter() {
  // Vérifie si on rencontre "<br>"
  if (text.substring(index, index + 4) === "<br>") {
    baliseH1.innerHTML += "<br>";
    index += 4; // Passe à l'index suivant après "<br>"
  } else {
    // Ajoute la lettre suivante au conteneur
    baliseH1.innerHTML += text.charAt(index);
    index++;
  }

  // Continue l'animation si on n'a pas atteint la fin du texte
  if (index < text.length) {
    setTimeout(typeLetterByLetter, 100); // Délai de 100 ms entre chaque lettre
  }
}

// Démarrer l'animation
typeLetterByLetter();
