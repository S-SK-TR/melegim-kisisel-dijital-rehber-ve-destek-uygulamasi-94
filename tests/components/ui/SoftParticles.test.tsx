import { render } from '@testing-library/react';
import { SoftParticles } from '@/components/ui/SoftParticles';

jest.useFakeTimers();

describe('SoftParticles Component', () => {
  it('renders particles after interval', () => {
    const { container } = render(<SoftParticles />);

    // İlk renderda hiç particle olmamalı
    expect(container.querySelectorAll('div').length).toBe(0);

    // 500ms sonra particle eklenmeli
    jest.advanceTimersByTime(500);
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });
});