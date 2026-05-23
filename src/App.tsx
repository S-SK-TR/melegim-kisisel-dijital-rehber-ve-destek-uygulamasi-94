import { Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { CinematicHero } from './components/ui/CinematicHero';
import { GlassCard } from './components/ui/GlassCard';
import { SoftParticles } from './components/ui/SoftParticles';
import { Heart, Sparkles, Gift } from 'lucide-react';

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <CinematicHero
        title="Love in Bloom"
        subtitle="Experience the beauty of romance through our premium collection of red roses and heartfelt designs."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map(i => (
            <GlassCard key={i} glow={i === 2} className="floating">
              <div className="flex items-center gap-3 mb-4">
                {i === 1 && <Heart className="text-rose-400" size={24} />}
                {i === 2 && <Sparkles className="text-amber-400" size={24} />}
                {i === 3 && <Gift className="text-pink-400" size={24} />}
                <h3 className="text-xl font-semibold">Premium Bouquet {i}</h3>
              </div>
              <p className="text-sm text-white/80">Elegant arrangement with our finest red roses. Perfect for any special occasion.</p>
            </GlassCard>
          ))}
        </div>
      </CinematicHero>
      <SoftParticles />
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Diğer route'lar buraya eklenebilir */}
      </Routes>
    </AppShell>
  );
}