import React from 'react';

export default function ScoreBoard({ best, last }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-4xl px-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 p-6 shadow-inner">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Best Score</p>
            <p className="text-3xl font-extrabold text-orange-900">{best}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">Last Game</p>
            <p className="text-3xl font-extrabold text-orange-900">{last}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
