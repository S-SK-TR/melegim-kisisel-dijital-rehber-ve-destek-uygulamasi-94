import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
  });

  it('handles conditional classes', () => {
    expect(cn('text-red-500', false && 'bg-blue-500')).toBe('text-red-500');
  });

  it('resolves Tailwind conflicts', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });
});