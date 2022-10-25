/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transform: { '\\.[jt]sx?$': 'ts-jest' },
  verbose: true,
};
