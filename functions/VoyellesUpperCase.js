// 8 | Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

export const voyellesUpperCase = (str) => {
  return str.replace(/[aeiouAEIOU]/g, "").toUpperCase();
};
