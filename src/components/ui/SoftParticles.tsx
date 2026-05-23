import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function SoftParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3
        }
      ].slice(-30));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{ x: particle.x + 20, y: particle.y + 20, opacity: particle.opacity }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-white/20"
          style={{ width: particle.size, height: particle.size }}
        />
      ))}
    </div>
  );
}