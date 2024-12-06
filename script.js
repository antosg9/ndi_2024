// Informations pour chaque partie du corps
const bodyPartInfo = {
  brain: {
    title: "🧠 Cerveau",
    description:
      "Le cerveau, tout comme les écosystèmes océaniques, régule les systèmes essentiels. Les écosystèmes marins maintiennent un équilibre écologique, tout comme le cerveau contrôle les fonctions vitales du corps.",
  },
  heart: {
    title: "❤️ Cœur",
    description:
      "Le cœur pompe le sang à travers le corps, tout comme les courants océaniques transportent la chaleur et les nutriments. Sans ces systèmes de circulation, la vie ne pourrait pas prospérer.",
  },
  lungs: {
    title: "🌬️ Poumons",
    description:
      "Les poumons absorbent l'oxygène et libèrent le dioxyde de carbone, tout comme l'océan agit comme un réservoir géant pour ces gaz, contribuant à la régulation du climat mondial.",
  },
};

// Fonction pour afficher les informations
function showInfo(part) {
  const titleElement = document.getElementById("info-title");
  const descriptionElement = document.getElementById("info-description");

  const info = bodyPartInfo[part];
  if (info) {
    titleElement.textContent = info.title;
    descriptionElement.textContent = info.description;
  } else {
    titleElement.textContent = "Erreur";
    descriptionElement.textContent =
      "Aucune information disponible pour cette partie.";
  }
}

let sequence = [];
const codeKonami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const redirectUrl = "https://brk-raafet.github.io/NnDI_CA_433_/"; // Remplacez cette URL par celle de la page vers laquelle vous souhaitez rediriger

document.addEventListener("keydown", (event) => {
  sequence.push(event.key);

  // Garder la séquence à la taille du code Konami
  if (sequence.length > codeKonami.length) {
    sequence.shift();
  }

  // Vérifier si la séquence correspond au code Konami
  if (JSON.stringify(sequence) === JSON.stringify(codeKonami)) {
    window.location.href = redirectUrl; // Redirige vers l'URL spécifiée
  }
});
