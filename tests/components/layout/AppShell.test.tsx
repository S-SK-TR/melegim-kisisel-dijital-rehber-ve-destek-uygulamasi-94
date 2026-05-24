import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

describe('AppShell', () => {
  it('renders the navigation bar with all items', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );

    // Logo'nun render edildiğini kontrol et
    expect(screen.getByText('LoveBloom')).toBeInTheDocument();

    // Desktop navigasyon öğelerini kontrol et
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();

    // Mobile navigasyon öğelerini kontrol et
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop + Mobile
  });

  it('applies active styles to the current route', () => {
    render(
      <MemoryRouter initialEntries={['/collections']}>
        <AppShell />
      </MemoryRouter>
    );

    // Aktif route için stil uygulandığını kontrol et
    const activeLink = screen.getByText('Collections').closest('a');
    expect(activeLink).toHaveClass('bg-[var(--brand-500)]/20');
  });
});