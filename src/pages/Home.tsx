import React from 'react';
import { Hero } from '../features/educational/Hero';
import { ConceptExplanation } from '../features/educational/ConceptExplanation';
import { ImpactDrivers } from '../features/educational/ImpactDrivers';
import { DailyJourney } from '../features/educational/DailyJourney';
import { DidYouKnow } from '../features/educational/DidYouKnow';

interface HomeProps {
  onNavigateToTrack: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToTrack }) => {
  return (
    <main className="w-full" id="main-content">
      <Hero onStart={onNavigateToTrack} />
      <ConceptExplanation />
      <ImpactDrivers />
      <DailyJourney />
      <DidYouKnow />
    </main>
  );
};