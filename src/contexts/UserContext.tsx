import React, { createContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user';
import { auth } from '../services/auth';
import { Alert } from 'react-native';

type StoredUser = Omit<User, 'token'>

export interface UserContextType {
  user: StoredUser | null;
  getAuthUser: (email: string, password: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<StoredUser | null>(null);

  async function getAuthUser(email: string, password: string) {
    try {
      // if(email === "") {
      //   throw new Error("Digite um email")
      // }

      // if(password === "") {
      //   throw new Error("Digite uma senha")
      // }

      const { nome, token } = await auth(email, password)
      setUser({ email, nome });
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      Alert.alert(String(error))
    }
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, getAuthUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};