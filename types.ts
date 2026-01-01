
// Added React import to fix "Cannot find namespace 'React'" error on line 6
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subFeatures?: string[];
}

export type Industry = 'Solar' | 'Law' | 'Real Estate';

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryBenefit {
  id: Industry;
  title: string;
  painPoint: string;
  detailedSolution: string;
  features: IndustryFeature[];
  kpis: {
    label: string;
    value: string;
  }[];
  stat: string;
  statLabel: string;
}
