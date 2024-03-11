// 1 | Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.

export const ReturnArray = (arr) => {
  let tmp = "";
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    tmp += element + " ";
  }
  return tmp;
};
