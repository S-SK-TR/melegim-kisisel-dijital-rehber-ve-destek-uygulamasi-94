import { render, screen } from '@testing-library/react';
import { FloatingPetals } from '@/components/ui/FloatingPetals';

jest.useFakeTimers();

describe('FloatingPetals', () => {
  it('renders petals after interval', () => {
    render(<FloatingPetals />);
    expect(screen.queryAllByRole('img')).toHaveLength(0);
    jest.advanceTimersByTime(300);
    expect(screen.queryAllByRole('img')).toHaveLength(1);
  });

  it('limits petals to 50', () => {
    render(<FloatingPetals />);
    for (let i = 0; i < 100; i++) {
      jest.advanceTimersByTime(300);
    }
    expect(screen.queryAllByRole('img')).toHaveLength(50);
  });
});
