import { Heart, Sparkles, Gift } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SoftParticles } from '@/components/ui/SoftParticles';

interface LovePageProps {
  title?: string;
  subtitle?: string;
}

export function LovePage({ title = "Love in Bloom", subtitle = "Experience the beauty of romance through our premium collection of red roses and heartfelt designs." }: LovePageProps) {
  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] overflow-hidden">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--text-primary)] mb-6 text-glow">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <GlassCard key={i} glow={i === 2} className="floating">
              <div className="flex items-center gap-4 mb-6">
                {i === 1 && <Heart className="text-rose-400" size={28} />}
                {i === 2 && <Sparkles className="text-amber-400" size={28} />}
                {i === 3 && <Gift className="text-pink-400" size={28} />}
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Premium Bouquet {i}</h3>
              </div>
              <p className="text-base text-[var(--text-muted)]">Elegant arrangement with our finest red roses. Perfect for any special occasion.</p>
            </GlassCard>
          ))}
        </div>
      </div>
      <SoftParticles />
    </div>
  );
}