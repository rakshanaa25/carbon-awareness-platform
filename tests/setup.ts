import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Emulate and safely stub programmatic layout APIs not present under standard jsdom execution wrappers
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);