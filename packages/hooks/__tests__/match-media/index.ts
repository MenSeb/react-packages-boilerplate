export const mediaListener = jest.fn();
export const mediaQuery = 'prefers-color-scheme: dark';

afterEach(() => mediaListener.mockReset());
