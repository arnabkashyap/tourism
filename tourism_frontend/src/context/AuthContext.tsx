'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    id: 'u1',
    name: 'Tactical Explorer',
    email: 'explorer@nethreads.io',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tactical'
  });

  const login = () => {
    // Mock login
    setUser({
      id: 'u1',
      name: 'Tactical Explorer',
      email: 'explorer@nethreads.io',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tactical'
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
