import { describe, it, expect } from 'vitest';
import { NAVIGATION } from '../../src/navigation';

describe('NAVIGATION data structure', () => {
  it('should be an array', () => {
    expect(Array.isArray(NAVIGATION)).toBe(true);
  });

  it('should have valid navigation items', () => {
    function validateNavItem(item: any) {
      expect(item).toHaveProperty('title');
      expect(typeof item.title).toBe('string');

      if (item.path) {
        expect(typeof item.path).toBe('string');
      } else if (item.children) {
        expect(Array.isArray(item.children)).toBe(true);
        item.children.forEach(validateNavItem);
      } else {
        throw new Error('Navigation item must have either a path or children');
      }
    }

    NAVIGATION.forEach(validateNavItem);
  });

  it('should have unique paths for all navigable items', () => {
    const paths = new Set<string>();

    function extractPaths(item: any) {
      if (item.path) {
        expect(paths.has(item.path)).toBe(false); // Path should be unique
        paths.add(item.path);
      } else if (item.children) {
        item.children.forEach(extractPaths);
      }
    }

    NAVIGATION.forEach(extractPaths);
  });
});
