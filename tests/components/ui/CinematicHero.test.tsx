import { render, screen } from '@testing-library/react';
import { CinematicHero } from '@/components/ui/CinematicHero';

describe('CinematicHero Component', () => {
  it('renders title and subtitle', () => {
    render(
      <CinematicHero
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <CinematicHero title="Test" subtitle="Test">
        <div data-testid="child-element">Child Content</div>
      </CinematicHero>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });
});