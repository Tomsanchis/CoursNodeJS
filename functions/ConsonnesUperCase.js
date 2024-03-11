// 10 | Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

export const consonnes = (str) => {
  return str.replace(/[bcdfghjklmnpqrstvwxz]/g, "").toUpperCase();
};
