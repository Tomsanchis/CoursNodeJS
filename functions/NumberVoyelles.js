// 9 | Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

export function NumberVoyelles(str) {
  const voy = str.match(/[aeiouAEIOU]/g);
  return voy ? voy.length : 0;
}
