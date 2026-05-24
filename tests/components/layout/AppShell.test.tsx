import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

describe('AppShell Component', () => {
  it('renders navigation items', () => {
    render(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );

    // Desktop navigasyon öğelerini kontrol et
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();

    // Mobile navigasyon öğelerini kontrol et
    expect(screen.getAllByText('Home').length).toBe(2); // Hem desktop hem mobile
  });

  it('applies active styles to current route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell />
      </MemoryRouter>
    );

    // Aktif route için stil uygulandığını kontrol et
    const activeLink = screen.getByText('Home').closest('a');
    expect(activeLink).toHaveClass('bg-[var(--brand-500)]/20');
  });
});