/* **** ANIMATION TEXTE **** */

  document.addEventListener("DOMContentLoaded", function () {
    const text = "Bienvenue sur <br> Daraay Technologie !";
    const baliseH1 = document.getElementById("animated-text");
    let index = 0;

    function typeLetterByLetter() {
      if (text.substring(index, index + 4) === "<br>") {
        baliseH1.innerHTML += "<br>";
        index += 4;
      } else {
        baliseH1.innerHTML += text.charAt(index);
        index++;
      }

      if (index < text.length) {
        setTimeout(typeLetterByLetter, 100);
      }
    }

    typeLetterByLetter();
  });



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
