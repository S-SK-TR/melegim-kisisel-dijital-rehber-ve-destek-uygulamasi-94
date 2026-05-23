import { render, screen } from '@testing-library/react';
import { GlassCard } from '@/components/ui/GlassCard';

describe('GlassCard', () => {
  it('renders children correctly', () => {
    render(<GlassCard>Test Content</GlassCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies glow class when glow prop is true', () => {
    render(<GlassCard glow>Glowing Card</GlassCard>);
    const card = screen.getByText('Glowing Card').parentElement;
    expect(card).toHaveClass('shadow-[0_0_30px_rgba(255,105,180,0.3)]');
  });

  it('does not apply glow class when glow prop is false', () => {
    render(<GlassCard>Normal Card</GlassCard>);
    const card = screen.getByText('Normal Card').parentElement;
    expect(card).not.toHaveClass('shadow-[0_0_30px_rgba(255,105,180,0.3)]');
  });
});
