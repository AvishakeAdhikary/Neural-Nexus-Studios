"use client";
import { motion } from 'framer-motion';

export default function TypingTitle({ text, className }) {
  const letters = Array.from(text);
  return (
    <h1 className={className}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.035, duration: 0.35, ease: 'easeOut' }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
      <motion.span
        className="ml-1 inline-block h-[1.1em] w-[2px] -translate-y-0.5 bg-[color:var(--accent)] align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        aria-hidden
      />
    </h1>
  );
}
