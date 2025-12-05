// src/services/api.ts

import axios, { isAxiosError } from 'axios';
import { RandomUserResponse } from '../types/User';

const api = axios.create({
  baseURL: 'https://randomuser.me/api',
  timeout: 10000,
});

/**
 * Busca lista de usuários
 */
export const fetchUsers = async (count: number = 20) => {
  try {
    const response = await api.get<RandomUserResponse>('/', {
      params: { results: count },
    });
    return response.data.results;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
    throw new Error('Erro desconhecido');
  }
};

/**
 * Busca novos usuários (com seed aleatória)
 */
export const fetchNewUsers = async (count: number = 20) => {
  try {
    const response = await api.get<RandomUserResponse>('/', {
      params: {
        results: count,
        seed: Math.random().toString(36).substring(7),
      },
    });
    return response.data.results;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`Erro ao buscar novos usuários: ${error.message}`);
    }
    throw new Error('Erro desconhecido');
  }
};

export default api;