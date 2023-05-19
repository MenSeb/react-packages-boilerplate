/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/*.{ts,tsx}',
    '<rootDir>/packages/**/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/**/src/index.{ts,tsx}',
    '!<rootDir>/packages/**/src/**/index.{ts,tsx}',
  ],
  setupFiles: ['../../jest.setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['^(.(?!\\.test\\.))*$'],
  transform: { '\\.tsx?': 'ts-jest' },
  verbose: true,
};

export default config;
