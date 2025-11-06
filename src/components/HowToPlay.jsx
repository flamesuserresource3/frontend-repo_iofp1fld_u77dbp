import React from 'react';
import { Sparkles, Info } from 'lucide-react';

export default function HowToPlay() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-8">
      <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow">
        <div className="mb-3 flex items-center gap-2 text-orange-600">
          <Sparkles />
          <h2 className="text-xl font-bold">How to Play</h2>
        </div>
        <ul className="list-disc space-y-2 pl-6 text-neutral-700">
          <li>Look at the color name in the bar — that is the color you need to find.</li>
          <li>Tap the matching color block as fast as you can.</li>
          <li>You get a point for every correct tap. Wrong taps take one point away.</li>
          <li>When the time runs out, see your score and try again to beat your best!</li>
        </ul>
        <div className="mt-4 flex items-start gap-2 text-sm text-neutral-500">
          <Info className="mt-0.5" size={16} />
          <p>Grown‑ups: This game helps with color recognition, reaction time, and focus.</p>
        </div>
      </div>
    </section>
  );
}
