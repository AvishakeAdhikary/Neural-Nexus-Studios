"use client";
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';

const messages = [
  { role: 'user', text: 'The model hallucinates on edge cases. Where do I start?' },
  { role: 'assistant', text: 'Start with evals: define failure modes, seed adversarial sets, measure.' },
  { role: 'user', text: 'Training from scratch or fine‑tune?'
  },
  { role: 'assistant', text: 'Prototype both: small baseline from scratch; targeted LoRA to compare.' }
];

export default function ChatBubbles() {
  return (
    <div className="mx-auto mt-10 max-w-2xl space-y-3">
      {messages.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          className={
            m.role === 'assistant'
              ? 'flex items-start gap-3'
              : 'flex items-start gap-3 justify-end'
          }
        >
          {m.role === 'assistant' && (
            <div className="mt-1 rounded-full border border-zinc-800 bg-[color:var(--panel)] p-2 text-[color:var(--muted)]">
              <Bot size={16} />
            </div>
          )}
          <div
            className={
              'card max-w-[80%] text-sm ' +
              (m.role === 'assistant'
                ? 'rounded-tl-sm border-[color:var(--accent)]/20'
                : 'rounded-tr-sm border-zinc-800')
            }
          >
            {m.text}
          </div>
          {m.role === 'user' && (
            <div className="mt-1 rounded-full border border-zinc-800 bg-[color:var(--panel)] p-2 text-[color:var(--muted)]">
              <Send size={16} />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
