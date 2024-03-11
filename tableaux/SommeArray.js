// 3 | Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.

export const SommeArray = (nbPair) => {
  let tmp = 0;
  for (let index = 0; index < nbPair.length; index++) {
    const element = nbPair[index];
    console.log(element);
    tmp += element;
  }
  return tmp;
};
