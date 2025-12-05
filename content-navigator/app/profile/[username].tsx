import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { User, getFullName } from '../../src/types/User';
import { isFavorite, addFavorite, removeFavorite } from '../../src/utils/favorites';

/*
 * EXPLICAÇÃO:
 * 
 * [username].tsx = Rota dinâmica
 * Acessa via /profile/joao123
 * 
 * useLocalSearchParams = Pega parâmetros da rota
 * userData vem como string JSON, precisamos fazer parse
 */

export default function Profile() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // DESERIALIZA O USUÁRIO
    // Vem como string, transforma em objeto
    const user: User = JSON.parse(params.userData as string);
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const checkFavorite = async () => {
            const status = await isFavorite(user.login.username);
            setIsFav(status);
        };
        checkFavorite();
    }, [user.login.username]);

    // FUNÇÃO PARA FAVORITO
        const handleToggleFavorite = async () => {
        const username = user.login.username;
        if (isFav) {
            await removeFavorite(username);
        } else {
            await addFavorite(username);
        }
        setIsFav(!isFav);
    };

    // FUNÇÃO PARA ABRIR EMAIL
    const handleEmailPress = () => {
        Linking.openURL(`mailto:${user.email}`);
    };

    // FUNÇÃO PARA ABRIR TELEFONE
    const handlePhonePress = () => {
        Linking.openURL(`tel:${user.phone}`);
    };

    return (
        <ScrollView style={styles.container}>
            {/* HEADER COM BOTÃO VOLTAR E BOTÃO FAVORITO */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backText}>‹ Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteButton}>
                    <Ionicons 
                        name={isFav ? "star" : "star-outline"} 
                        size={24} 
                        color={isFav ? "#FFD700" : "#999"}
                    />
                </TouchableOpacity>
            </View>

            {/* FOTO GRANDE */}
            <View style={styles.photoContainer}>
                <Image source={{ uri: user.picture.large }} style={styles.photo} />
            </View>

            {/* NOME */}
            <View style={styles.section}>
                <Text style={styles.name}>{getFullName(user)}</Text>
            </View>

            {/* INFORMAÇÕES DE CONTATO */}
            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Informações de Contato</Text>

                {/* EMAIL */}
                <TouchableOpacity style={styles.infoRow} onPress={handleEmailPress}>
                    <Text style={styles.infoLabel}>📧 Email</Text>
                    <Text style={styles.infoValue}>{user.email}</Text>
                </TouchableOpacity>

                {/* TELEFONE */}
                <TouchableOpacity style={styles.infoRow} onPress={handlePhonePress}>
                    <Text style={styles.infoLabel}>📱 Telefone</Text>
                    <Text style={styles.infoValue}>{user.phone}</Text>
                </TouchableOpacity>
            </View>
            {/* LOCALIZAÇÃO */}
            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Localização</Text>

                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>🏙️ Cidade</Text>
                    <Text style={styles.infoValue}>{user.location.city}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>📍 Estado</Text>
                    <Text style={styles.infoValue}>{user.location.state}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingBottom: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    favoriteButton: {
        padding: 8,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 18,
        color: '#007AFF',
        fontWeight: '600',
    },
    photoContainer: {
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#fff',
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 4,
        borderColor: '#007AFF',
    },
    section: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    username: {
        fontSize: 18,
        color: '#666',
    },
    infoSection: {
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    infoLabel: {
        fontSize: 16,
        color: '#666',
        flex: 1,
    },
    infoValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        flex: 2,
        textAlign: 'right',
    },
});