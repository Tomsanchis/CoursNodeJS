// Functions

import { somme } from "./functions/somme.js";
import { MaxArray } from "./functions/MaxArray.js";
import { voyelles } from "./functions/voyelles.js";
import { OrdreAlphabet } from "./functions/OrdreAlphabet.js";
import { ArrayObject } from "./functions/ArrayObject.js";
import { voyellesUpperCase } from "./functions/VoyellesUpperCase.js";
import { NumberVoyelles } from "./functions/NumberVoyelles.js";
import { consonnes } from "./functions/ConsonnesUperCase.js";

// Tableaux

import { ReturnArray } from "./tableaux/ReturnArray.js";
import { PremierJour } from "./tableaux/PremierJour.js";
import { SommeArray } from "./tableaux/SommeArray.js";
import { fruit } from "./tableaux/FruitArray.js";
import { MoyNotes } from "./tableaux/CalcNotes.js";

// Functions

// 1
console.log("Exercice 1: " + somme(2, 56));

// 2
console.log("Exercice 2: " + MaxArray([2, 44, 88, 998]));

// 3
console.log("Exercice 3: " + voyelles("Bonjour Monsieur"));

// 4
console.log("Exercice 4: " + OrdreAlphabet(["SDSD", "PVSQ"]));

// 5

// 6
// console.log(
//   "Exercice 6: " +
//     ArrayObject(
//       { nom: "John", age: 30 },
//       { nom: "Jane", age: 25 },
//       { nom: "Bob", age: 40 }
//     )
// );

// 7

// 8
console.log("Exercice 8: " + voyellesUpperCase("Bonjour Monsieur"));

// 9
console.log("Exercice 9: " + NumberVoyelles("Bonjour Monsieur"));

// 10
console.log("Exercice 10: " + consonnes("Bonjour Monsieur"));

// Tableaux

// 1
console.log("Exercice 1: " + ReturnArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2
console.log(
  "Exercice 2: " +
    PremierJour([
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ])
);

// 3
console.log("Exercice 3: " + SommeArray([2, 4, 6, 8, 10]));

// 4
console.log(
  "Exercice 4: " +
    fruit(["Noix de Coco", "pasteque", "orange", "Fraise", "Framboise"])
);

// 5
console.log("Exercice 4: " + MoyNotes([10, 15, 9, 5, 12]));
