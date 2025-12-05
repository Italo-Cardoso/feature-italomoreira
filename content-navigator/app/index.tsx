import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, RefreshControl } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { User } from '../src/types/User';
import { fetchUsers, fetchNewUsers } from '../src/services/api';
import UserCard from '../src/components/UserCard';
import LoadingSpinner from '../src/components/LoadingSpinner';
import { getFavorites } from '../src/utils/favorites';

/*
 * ARQUITETURA:
 * 
 * 1. ESTADOS (useState):
 *    - users: array de usuários
 *    - loading: controla se tá carregando
 *    - error: mensagem de erro
 *    - refreshing: controla o pull-to-refresh
 * 
 * 2. EFEITOS (useEffect):
 *    - Carrega usuários quando componente monta
 * 
 * 3. NAVEGAÇÃO (useRouter):
 *    - Push pra tela de profile
 */

export default function Home() {
  // ESTADOS 
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [favoriteUsernames, setFavoriteUsernames] = useState<string[]>([]);

  // NAVEGAÇÃO 
  const router = useRouter();

  // FUNÇÃO PARA ATUALIZAR FAVORITOS
  const updateFavorites = async () => {
    try {
      const favData = await getFavorites();
      setFavoriteUsernames(favData);
    } catch (e) {
      console.error("Erro ao atualizar favoritos", e);
    }
  };
  
  // CARREGA USUÁRIOS NA MONTAGEM
  useEffect(() => {
    loadUsers();
  }, []);

  // ATUALIZA FAVORITOS QUANDO A TELA GANHA FOCO
  useFocusEffect(
    useCallback(() => {
      updateFavorites(); 
    }, [])
  );

  // FUNÇÃO PARA CARREGAR USUÁRIOS E FAVORITOS
  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const [userData, favData] = await Promise.all([
      fetchUsers(20),
      getFavorites()
    ]);
      setUsers(userData);
      setFavoriteUsernames(favData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  // FUNÇÃO PARA REFRESH (BÔNUS)
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      setError(null);
      const [userData, favData] = await Promise.all([
      fetchNewUsers(20),
      getFavorites()
    ]);
      setUsers(userData);
      setFavoriteUsernames(favData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar');
    } finally {
      setRefreshing(false);
    }
  };

  // NAVEGAÇÃO PARA PROFILE
  const handleUserPress = (user: User) => {
    router.push({
      pathname: `/profile/${user.login.username}`,
      params: { userData: JSON.stringify(user) }
    });
  };

  // RENDERIZA LOADING 
  if (loading) {
    return <LoadingSpinner message="Carregando contatos..." />;
  }

  // RENDERIZA ERRO
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>😕 {error}</Text>
        <Text style={styles.retryText} onPress={loadUsers}>
          Tentar novamente
        </Text>
      </View>
    );
  }

  // RENDERIZA LISTA 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contatos</Text>
        <Text style={styles.subtitle}>{users.length} pessoas</Text>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => handleUserPress(item)}
            isFavorite={favoriteUsernames.includes(item.login.username)}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#007AFF']}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
});