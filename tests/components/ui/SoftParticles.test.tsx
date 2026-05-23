import { render, screen } from '@testing-library/react';
import { SoftParticles } from '@/components/ui/SoftParticles';

jest.useFakeTimers();

describe('SoftParticles', () => {
  it('renders particles after interval', () => {
    render(<SoftParticles />);
    expect(screen.queryAllByRole('img')).toHaveLength(0);
    jest.advanceTimersByTime(500);
    expect(screen.queryAllByRole('img')).toHaveLength(1);
  });

  it('limits particles to 30', () => {
    render(<SoftParticles />);
    for (let i = 0; i < 100; i++) {
      jest.advanceTimersByTime(500);
    }
    expect(screen.queryAllByRole('img')).toHaveLength(30);
  });
});
