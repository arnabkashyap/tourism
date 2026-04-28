'use client';

import React, { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import { RecommendationProvider } from './RecommendationEngineContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RecommendationProvider>
          {children}
        </RecommendationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
