import { render, screen } from '@testing-library/react';
import { CinematicHero } from '@/components/ui/CinematicHero';

describe('CinematicHero', () => {
  it('renders title and subtitle', () => {
    render(
      <CinematicHero title="Test Title" subtitle="Test Subtitle" />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <CinematicHero title="Title" subtitle="Subtitle">
        <div>Child Content</div>
      </CinematicHero>
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
