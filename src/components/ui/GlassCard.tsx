import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass-card relative p-6 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/5",
        glow && "shadow-[0_0_30px_rgba(255,105,180,0.3)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}