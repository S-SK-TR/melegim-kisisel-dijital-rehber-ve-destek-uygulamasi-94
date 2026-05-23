import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

const TestComponent = () => <div>Test Content</div>;

describe('AppShell', () => {
  it('renders navigation items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell>
          <TestComponent />
        </AppShell>
      </MemoryRouter>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
