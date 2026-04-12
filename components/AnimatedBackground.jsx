"use client";
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_10%,rgba(239,68,68,0.12),transparent),radial-gradient(600px_300px_at_90%_0%,rgba(255,255,255,0.05),transparent)]" />
      <Grid />
      <Orbs />
    </div>
  );
}

function Grid() {
  const lines = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 opacity-[0.06]">
      {lines.map((_, i) => (
        <div key={i} className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" style={{ top: `${i * 3}rem` }} />
      ))}
      {lines.map((_, i) => (
        <div key={`v-${i}`} className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-zinc-300 to-transparent" style={{ left: `${i * 3}rem` }} />
      ))}
    </div>
  );
}

function Orbs() {
  return (
    <>
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.4),transparent_60%)] blur-2xl"
        animate={{ x: [0, 30, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: '10%', top: '20%' }}
      />
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.15),transparent_60%)] blur-3xl"
        animate={{ x: [0, -25, 20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ right: '10%', top: '10%' }}
      />
    </>
  );
}
