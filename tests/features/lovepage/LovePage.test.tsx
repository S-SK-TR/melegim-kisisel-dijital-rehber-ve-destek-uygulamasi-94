import { render, screen } from '@testing-library/react';
import { LovePage } from '@/features/lovepage/LovePage';

describe('LovePage Component', () => {
  it('renders with default props', () => {
    render(<LovePage />);

    expect(screen.getByText('Love in Bloom')).toBeInTheDocument();
    expect(screen.getByText('Experience the beauty of romance')).toBeInTheDocument();
    expect(screen.getAllByText(/Premium Bouquet/).length).toBe(3);
  });

  it('renders with custom props', () => {
    render(
      <LovePage
        title="Custom Title"
        subtitle="Custom Subtitle"
      />
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Subtitle')).toBeInTheDocument();
  });
});