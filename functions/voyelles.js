// 3 | Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

export const voyelles = (str) => {
  return str.replace(/[aeiouAEIOU]/g, "");
};
