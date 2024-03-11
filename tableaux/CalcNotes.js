// 5 | Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console.

export const MoyNotes = (arr_notes) => {
  let counter = 0;
  let tmp = 0;
  for (let index = 0; index < arr_notes.length; index++) {
    const element = arr_notes[index];
    tmp += element;
    counter++;
  }
  return tmp / counter;
};
