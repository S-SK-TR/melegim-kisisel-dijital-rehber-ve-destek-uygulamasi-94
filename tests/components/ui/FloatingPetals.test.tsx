import { render } from '@testing-library/react';
import { FloatingPetals } from '@/components/ui/FloatingPetals';

jest.useFakeTimers();

describe('FloatingPetals Component', () => {
  it('renders petals after interval', () => {
    const { container } = render(<FloatingPetals />);

    // İlk renderda hiç petal olmamalı
    expect(container.querySelectorAll('div').length).toBe(0);

    // 300ms sonra petal eklenmeli
    jest.advanceTimersByTime(300);
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });
});