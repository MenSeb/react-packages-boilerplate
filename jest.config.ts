/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/*.{ts,tsx}',
    '<rootDir>/packages/**/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/**/src/index.{ts,tsx}',
    '!<rootDir>/packages/**/src/**/index.{ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/mocks/svg.tsx',
  },
  setupFiles: ['whatwg-fetch'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['^(.(?!\\.test\\.))*$'],
  transform: { '\\.tsx?': 'ts-jest' },
  verbose: true,
};

export default config;
