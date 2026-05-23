import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: -10,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
          rotation: Math.random() * 360
        }
      ].slice(-50));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map(petal => (
        <motion.div
          key={petal.id}
          initial={{ y: petal.y, x: petal.x, opacity: 0 }}
          animate={{ y: 110, x: petal.x + 10, opacity: [0, 1, 1, 0] }}
          transition={{ duration: petal.speed, repeat: Infinity, ease: "linear" }}
          className="absolute w-4 h-4 bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full"
          style={{ rotate: petal.rotation }}
        />
      ))}
    </div>
  );
}