import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

describe('App', () => {
  it('renders home page with cinematic hero', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Love in Bloom')).toBeInTheDocument();
    expect(screen.getByText(/Experience the beauty of romance/)).toBeInTheDocument();
  });

  it('renders three glass cards on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Premium Bouquet/)).toHaveLength(3);
  });
});
