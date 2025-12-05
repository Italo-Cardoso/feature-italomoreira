import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { User, getFullName } from '../types/User';
import { Ionicons } from '@expo/vector-icons';
/**
 * EXPLICAÇÃO:
 * Card de usuário para a lista
 * - TouchableOpacity: Botão clicável com feedback visual
 * - Image: Foto do usuário
 * - Props: usuário + função de clique
 */

interface UserCardProps {
  user: User;
  onPress: () => void;
  isFavorite: boolean;
}

export default function UserCard({ user, onPress, isFavorite}: UserCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Foto do usuário */}
      <Image
        source={{ uri: user.picture.thumbnail }}
        style={styles.avatar}
      />

      {/* Nome completo */}
      <View style={styles.textContainer}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{getFullName(user)}</Text>
          {isFavorite && (
            <View style={styles.favoriteIcon}>
              <Ionicons name="star" size={18} color="#FFD700" />
            </View>
          )}
      </View>
        <Text style={styles.username}>@{user.login.username}</Text>
      </View>

      {/* Seta indicando que é clicável */}
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4, 
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 0,
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  favoriteIcon: {
    marginLeft: 8,
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
  },
});