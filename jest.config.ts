import { JestConfigWithTsJest } from 'ts-jest';

export const jestConfig: JestConfigWithTsJest = {
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/*.{ts,tsx}',
    '<rootDir>/packages/**/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/**/src/index.{ts,tsx}',
    '!<rootDir>/packages/**/src/**/index.{ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/mocks/svg.tsx',
  },
  passWithNoTests: true,
  setupFiles: ['whatwg-fetch'],
  setupFilesAfterEnv: [`${__dirname}/jest.setup.ts`],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['^(.(?!\\.test\\.))*$'],
  transform: { '\\.tsx?': 'ts-jest' },
  verbose: true,
};

export default jestConfig;
