import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App', () => {
  it('renders the AppShell with Routes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // AppShell bileşeninin render edildiğini kontrol et
    expect(screen.getByText('LoveBloom')).toBeInTheDocument();

    // Ana sayfanın render edildiğini kontrol et
    expect(screen.getByText('Love in Bloom')).toBeInTheDocument();
    expect(screen.getByText('Experience the beauty of romance through our premium collection of red roses and heartfelt designs.')).toBeInTheDocument();
  });

  it('renders the HomePage with all components', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // CinematicHero bileşeninin render edildiğini kontrol et
    expect(screen.getByText('Love in Bloom')).toBeInTheDocument();

    // GlassCard bileşenlerinin render edildiğini kontrol et
    expect(screen.getAllByText(/Premium Bouquet/i)).toHaveLength(3);

    // SoftParticles bileşeninin render edildiğini kontrol et
    expect(document.querySelector('.absolute.inset-0.overflow-hidden.pointer-events-none')).toBeInTheDocument();
  });
});