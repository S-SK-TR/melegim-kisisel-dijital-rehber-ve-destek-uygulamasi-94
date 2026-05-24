import { render } from '@testing-library/react';
import { FloatingPetals } from '@/components/ui/FloatingPetals';

jest.useFakeTimers();

describe('FloatingPetals', () => {
  it('renders without crashing', () => {
    const { container } = render(<FloatingPetals />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('creates petals at intervals', () => {
    const { container } = render(<FloatingPetals />);
    expect(container.querySelectorAll('div').length).toBe(0);

    // 300ms sonra bir petal oluşturulmalı
    jest.advanceTimersByTime(300);
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });

  it('limits the number of petals', () => {
    const { container } = render(<FloatingPetals />);

    // 1500ms sonra 5 petal olmalı
    jest.advanceTimersByTime(1500);
    expect(container.querySelectorAll('div').length).toBe(5);
  });
});