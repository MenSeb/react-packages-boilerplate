/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transform: { '\\.[jt]sx?$': 'ts-jest' },
  verbose: true,

  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.{ts,tsx}'],
};
