import { render } from '@testing-library/react';
import { SoftParticles } from '@/components/ui/SoftParticles';

jest.useFakeTimers();

describe('SoftParticles', () => {
  it('renders without crashing', () => {
    const { container } = render(<SoftParticles />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('creates particles at intervals', () => {
    const { container } = render(<SoftParticles />);
    expect(container.querySelectorAll('div').length).toBe(0);

    // 500ms sonra bir particle oluşturulmalı
    jest.advanceTimersByTime(500);
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });

  it('limits the number of particles', () => {
    const { container } = render(<SoftParticles />);

    // 1500ms sonra 3 particle olmalı
    jest.advanceTimersByTime(1500);
    expect(container.querySelectorAll('div').length).toBe(3);
  });
});