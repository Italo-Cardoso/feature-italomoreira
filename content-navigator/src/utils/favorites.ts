import * as SecureStore from 'expo-secure-store';

const FAVORITES_KEY = 'userFavorites';

/**
 * Pega todos os usernames favoritos salvos no SecureStore.
 */
export async function getFavorites(): Promise<string[]> {
  try {
    const favoritesJSON = await SecureStore.getItemAsync(FAVORITES_KEY);
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  } catch (error) {
    console.error('Erro ao buscar favoritos:', error);
    return [];
  }
}

/**
 * Salva a nova lista de usernames favoritos no SecureStore.
 * @param favorites Array de usernames.
 */
async function saveFavorites(favorites: string[]): Promise<void> {
  try {
    const favoritesJSON = JSON.stringify(favorites);
    await SecureStore.setItemAsync(FAVORITES_KEY, favoritesJSON);
  } catch (error) {
    console.error('Erro ao salvar favoritos:', error);
  }
}

/**
 * Adiciona um usuário à lista de favoritos.
 */
export async function addFavorite(username: string): Promise<void> {
  const favorites = await getFavorites();
  if (!favorites.includes(username)) {
    favorites.push(username);
    await saveFavorites(favorites);
  }
}

/**
 * Remove um usuário da lista de favoritos.
 */
export async function removeFavorite(username: string): Promise<void> {
  let favorites = await getFavorites();
  favorites = favorites.filter(fav => fav !== username);
  await saveFavorites(favorites);
}

/**
 * Verifica se um usuário está na lista de favoritos.
 */
export async function isFavorite(username: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.includes(username);
}