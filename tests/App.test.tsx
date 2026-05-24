import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App Component', () => {
  it('renders AppShell and Routes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // AppShell bileşenlerinin render edildiğini kontrol et
    expect(screen.getByText('LoveBloom')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();

    // LovePage bileşenlerinin render edildiğini kontrol et
    expect(screen.getByText('Love in Bloom')).toBeInTheDocument();
    expect(screen.getByText('Experience the beauty of romance')).toBeInTheDocument();
  });
});