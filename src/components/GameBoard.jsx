import React, { useEffect, useMemo, useState } from 'react';

const COLORS = [
  { name: 'Red', value: '#ef4444', tw: 'bg-red-500' },
  { name: 'Orange', value: '#f97316', tw: 'bg-orange-500' },
  { name: 'Yellow', value: '#f59e0b', tw: 'bg-yellow-500' },
  { name: 'Green', value: '#22c55e', tw: 'bg-green-500' },
  { name: 'Blue', value: '#3b82f6', tw: 'bg-blue-500' },
  { name: 'Purple', value: '#a855f7', tw: 'bg-purple-500' },
];

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

export default function GameBoard({ onFinish, onScore }) {
  const [targetIndex, setTargetIndex] = useState(() => randomIndex(COLORS.length));
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState(false);

  const target = useMemo(() => COLORS[targetIndex], [targetIndex]);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          onFinish?.(score);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [onFinish, score]);

  useEffect(() => {
    onScore?.(score);
  }, [score, onScore]);

  const handlePick = (idx) => {
    if (idx === targetIndex) {
      setScore((s) => s + 1);
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
      let next = randomIndex(COLORS.length);
      if (next === targetIndex) {
        next = (next + 1) % COLORS.length;
      }
      setTargetIndex(next);
    } else {
      setScore((s) => (s > 0 ? s - 1 : 0));
    }
  };

  return (
    <section className="relative mx-auto mt-6 w-full max-w-4xl px-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-neutral-600">Time</div>
        <div className="text-sm font-semibold text-neutral-600">Score</div>
      </div>
      <div className="mt-1 flex items-center justify-between rounded-xl bg-white p-4 shadow">
        <div className="h-3 w-full rounded-full bg-neutral-200">
          <div
            className="h-3 rounded-full bg-orange-500 transition-all"
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          />
        </div>
        <div className="ml-4 text-2xl font-bold text-neutral-800">{score}</div>
      </div>

      <div className="mt-6 text-center text-lg font-semibold text-neutral-700">
        Find: <span className="ml-2 rounded-full px-3 py-1 text-white" style={{ backgroundColor: target.value }}>{target.name}</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {COLORS.map((c, idx) => (
          <button
            key={c.name}
            onClick={() => handlePick(idx)}
            className={`aspect-square rounded-2xl shadow-lg transition active:scale-95 ${c.tw}`}
          >
            <span className="sr-only">{c.name}</span>
          </button>
        ))}
      </div>

      {flash && (
        <div className="pointer-events-none absolute inset-0 animate-ping rounded-3xl bg-green-400/30" />
      )}
    </section>
  );
}
