import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection({ onStart }) {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur">
            Playful learning for kids
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-neutral-800 md:text-6xl">
            Color Blocks: A Happy Matching Game
          </h1>
          <p className="mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">
            Tap the color that matches the glowing chip. Simple, bright, and joyful — perfect for little learners.
          </p>
          <div className="mt-6">
            <button
              onClick={onStart}
              className="rounded-xl bg-orange-500 px-6 py-3 text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Start Playing
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
