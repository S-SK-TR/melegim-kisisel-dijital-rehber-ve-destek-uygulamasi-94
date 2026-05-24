import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/ui/GlassCard';

describe('GlassCard', () => {
  it('renders children', () => {
    render(
      <GlassCard>
        <div data-testid="child-element">Test Content</div>
      </GlassCard>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  it('applies glow class when glow prop is true', () => {
    const { container } = render(
      <GlassCard glow>
        <div>Test</div>
      </GlassCard>
    );

    expect(container.firstChild).toHaveClass('shadow-[0_0_30px_rgba(255,105,180,0.3)]');
  });

  it('does not apply glow class when glow prop is false', () => {
    const { container } = render(
      <GlassCard>
        <div>Test</div>
      </GlassCard>
    );

    expect(container.firstChild).not.toHaveClass('shadow-[0_0_30px_rgba(255,105,180,0.3)]');
  });
});