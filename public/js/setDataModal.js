// Récupérations des boutons En savoir plus (Accueil)
const buttons = document.querySelectorAll(".btn-modal");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const image = button.getAttribute("data-image");
        const title = button.getAttribute("data-title");
        const description = button.getAttribute("data-description");

        document.getElementById("modal-image").src = image;
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-description").textContent = description;
    });
});


// Récupérations des boutons En savoir plus (Articles)
const buttonsArticles = document.querySelectorAll(".btn-modal-article");

buttonsArticles.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        const description = button.getAttribute("data-description");
        const src = button.getAttribute("data-image");

        
        document.getElementById("modal-title").innerHTML = `<u>${title}</u>`;
        document.getElementById("modal-description").innerHTML = description;
        document.getElementById("modal-image").src = src;
    })
})
