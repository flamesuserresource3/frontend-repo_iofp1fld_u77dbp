import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import HowToPlay from './components/HowToPlay';

export default function App() {
  const [started, setStarted] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [liveScore, setLiveScore] = useState(0);

  const handleStart = () => {
    setLiveScore(0);
    setStarted(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleFinish = (score) => {
    setLastScore(score);
    setBestScore((b) => (score > b ? score : b));
    setStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <HeroSection onStart={handleStart} />

      <ScoreBoard best={bestScore} last={lastScore} />

      {started ? (
        <GameBoard onFinish={handleFinish} onScore={setLiveScore} />
      ) : (
        <HowToPlay />
      )}

      <footer className="mx-auto my-10 w-full max-w-4xl px-6 text-center text-sm text-neutral-500">
        Made with love for playful learning. Have fun!
      </footer>
    </div>
  );
}
