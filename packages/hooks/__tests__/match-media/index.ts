export const listener = jest.fn();
export const query = 'prefers-color-scheme: dark';

afterEach(() => listener.mockReset());
