'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import mockData from '@/lib/data.json';

export interface Artisan {
  id: string;
  name: string;
  category: string;
  location: string;
  bio: string;
  image: string;
  isVerified: boolean;
  rating: number;
  experienceCount: number;
  type: 'artisan';
}

export interface Experience {
  id: string;
  artisanId: string;
  title: string;
  category: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  tags: string[];
  type: 'experience';
}

export type FeedItem = Artisan | Experience;

interface RecommendationEngineContextType {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  recommendedItems: FeedItem[];
  weightMap: Record<string, number>;
}

const RecommendationEngineContext = createContext<RecommendationEngineContextType | undefined>(undefined);

export const RecommendationProvider = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Track user interactions to weight categories
  const [weightMap, setWeightMap] = useState<Record<string, number>>({
    'Eco-Tours': 0,
    'Authentic Handloom': 0,
    'Local Stalls': 0
  });

  const handleSetCategory = (category: string | null) => {
    setActiveCategory(category);
    if (category) {
      setWeightMap((prev: Record<string, number>) => ({
        ...prev,
        [category]: (prev[category] || 0) + 1
      }));
    }
  };

  const recommendedItems = useMemo(() => {
    const artisans: Artisan[] = mockData.artisans.map(a => ({ ...a, type: 'artisan' as const }));
    const experiences: Experience[] = mockData.experiences.map(e => ({ ...e, type: 'experience' as const }));
    
    const allItems: FeedItem[] = [...artisans, ...experiences];

    return [...allItems].sort((a, b) => {
      const weightA = weightMap[a.category] || 0;
      const weightB = weightMap[b.category] || 0;
      
      // Verification bonus (verified master craftsmen get a huge boost)
      const verifiedA = (a.type === 'artisan' && a.isVerified) ? 50 : 0;
      const verifiedB = (b.type === 'artisan' && b.isVerified) ? 50 : 0;
      
      // Calculate score based on weights, active category, and verification
      const scoreA = weightA + (a.category === activeCategory ? 20 : 0) + verifiedA;
      const scoreB = weightB + (b.category === activeCategory ? 20 : 0) + verifiedB;

      // Primary sort: Score
      if (scoreB !== scoreA) {
        return scoreB - scoreA;
      }

      // Secondary sort: Rating
      const ratingA = (a.type === 'artisan' ? a.rating : 4.5);
      const ratingB = (b.type === 'artisan' ? b.rating : 4.5);
      
      return ratingB - ratingA;
    });
  }, [activeCategory, weightMap]);

  return (
    <RecommendationEngineContext.Provider 
      value={{ 
        activeCategory, 
        setActiveCategory: handleSetCategory, 
        recommendedItems,
        weightMap 
      }}
    >
      {children}
    </RecommendationEngineContext.Provider>
  );
};

export const useRecommendation = () => {
  const context = useContext(RecommendationEngineContext);
  if (context === undefined) {
    throw new Error('useRecommendation must be used within a RecommendationProvider');
  }
  return context;
};
