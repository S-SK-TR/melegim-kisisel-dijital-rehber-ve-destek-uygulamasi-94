import { cn } from '@/lib/utils';

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
  });

  it('handles conditional classes', () => {
    expect(cn('text-red-500', false && 'bg-blue-500')).toBe('text-red-500');
  });

  it('handles tailwind merge conflicts', () => {
    expect(cn('p-4', 'p-8')).toBe('p-8');
  });
});