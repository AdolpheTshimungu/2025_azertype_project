
// Variables globales du jeu
let score = 0;
let i = 0;
let listeProposition = listeMots;

// Fonctions d'affichage
function afficherResultat(score, total) {
    const zoneScore = document.querySelector(".zoneScore span");
    zoneScore.innerText = `${score}/${total}`;
}

function afficherProposition(proposition) {
    const zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

// Fonction principale pour lancer le jeu
function LancerJeu() {
    const inputEcriture = document.getElementById("inputEcriture");
    const buttonValidation = document.getElementById("btnValiderMot");
    const listeBtnRadio = document.querySelectorAll('.optionSource input');

    // Réinitialisation du jeu
    function resetJeu(nouvelleListe) {
        score = 0;
        i = 0;
        listeProposition = nouvelleListe;
        afficherResultat(score, i);
        afficherProposition(listeProposition[i]);
        buttonValidation.disabled = false;
        inputEcriture.value = '';
    }

    // Fonction pour jouer un tour
    function jouerUnTour() {
        const saisie = inputEcriture.value.trim();
        if (saisie === listeProposition[i]) {
            score++;
        }
        i++;
        afficherResultat(score, i);
        inputEcriture.value = '';

        if (i >= listeProposition.length) {
            afficherProposition("🎉 Le jeu est fini !");
            buttonValidation.disabled = true;
        } else {
            afficherProposition(listeProposition[i]);
        }
    }

    // Événement sur le bouton de validation
    buttonValidation.addEventListener("click", jouerUnTour);

    // ✅ Événements sur les boutons radio
    listeBtnRadio.forEach((radio) => {
        radio.addEventListener("change", (event) => {
            const valeur = event.target.value;
            if (valeur === "1") {
                resetJeu(listeMots);
            } else {
                resetJeu(listePhrases);
            }
        });
    });

    // Initialisation
    resetJeu(listeProposition);
}