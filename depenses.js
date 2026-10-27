// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// Première tâche : retourner le total en FCFA avec reduce.
// Paramètre : number[] (FCFA) ; retour : number (FCFA).
const calculerTotal = (depenses) => {
  const totalCumule = depenses.reduce((cumul, montantDuJour) => {
    return cumul + montantDuJour;
  }, 0);

  return totalCumule;
};

// Deuxième tâche : retourner la moyenne par jour ; 0 si le tableau est vide.
// Paramètre : number[] (FCFA) ; retour : number (FCFA par jour).
const calculerMoyenne = (depenses) => {
  if (depenses.length === 0) {
    return 0;
  }

  const total = calculerTotal(depenses);        // number (FCFA)
  const nombreDeJours = depenses.length;        // number (jours)
  const moyenneParJour = total / nombreDeJours; // number (FCFA par jour)

  return moyenneParJour;
};

// Troisième tâche : retourner les montants strictement supérieurs à 2000 FCFA.
// Paramètre : number[] (FCFA) ; retour : number[] (FCFA).
const filtrerGrossesDepenses = (depenses) => {
  const seuil = 2000; // number (FCFA)
  const grossesDepenses = depenses.filter((montant) => montant > seuil);

  return grossesDepenses;
};

// Quatrième tâche : retourner la plus grande dépense ; 0 si le tableau est vide.
// Paramètre : number[] (FCFA) ; retour : number (FCFA).
const trouverMaximum = (depenses) => {
  if (depenses.length === 0) {
    return 0;
  }

  const plusGrande = Math.max(...depenses);

  return plusGrande;
};

// Cinquième tâche : créer une copie triée (sans .sort), puis afficher le rapport.
// Paramètre : number[] (FCFA) ; retour : number[] (FCFA), ordre croissant.
const trierCroissant = (depenses) => {
  // On travaille sur une COPIE : le tableau d'origine ne bouge pas.
  const copie = [...depenses]; // number[] (FCFA)

  // Pour chaque position i, on cherche le plus petit montant
  // parmi ceux qui restent à trier, puis on le met à la position i.
  for (let i = 0; i < copie.length - 1; i++) {
    let indexPlusPetit = i;

    for (let j = i + 1; j < copie.length; j++) {
      if (copie[j] < copie[indexPlusPetit]) {
        indexPlusPetit = j; // on a trouvé plus petit, on retient sa position
      }
    }

    // On échange les deux montants (comme intervertir deux sacs de place).
    const temporaire = copie[i];
    copie[i] = copie[indexPlusPetit];
    copie[indexPlusPetit] = temporaire;
  }

  return copie;
};

const copieTriee = trierCroissant(depensesSemaine);              // number[] (FCFA), croissant
const total = calculerTotal(depensesSemaine);                    // number (FCFA)
const moyenne = calculerMoyenne(depensesSemaine);                // number (FCFA par jour)
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine); // number[] (FCFA)
const maximum = trouverMaximum(depensesSemaine);                 // number (FCFA)

console.log("=== Bilan des dépenses de la semaine ===");
console.log(`Tableau initial (avant tri) : [${depensesSemaine.join(", ")}] FCFA`);
console.log(`Total : ${total} FCFA`);
console.log(`Moyenne par jour : ${moyenne.toFixed(2)} FCFA`);
console.log(`Dépenses > 2000 FCFA : [${grossesDepenses.join(", ")}] FCFA`);
console.log(`Dépense maximale : ${maximum} FCFA`);
console.log(`Copie triée (croissant) : [${copieTriee.join(", ")}] FCFA`);
console.log(`Tableau initial (après tri) : [${depensesSemaine.join(", ")}] FCFA`);