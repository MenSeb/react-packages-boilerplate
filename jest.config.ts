/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/*.{ts,tsx}',
    '<rootDir>/packages/**/src/**/*.{ts,tsx}',
    '!<rootDir>/packages/**/src/index.{ts,tsx}',
    '!<rootDir>/packages/**/src/**/index.{ts,tsx}',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['^(.(?!\\.test\\.))*$'],
  transform: { '\\.[jt]sx?$': 'ts-jest' },
  verbose: true,
};

export default config;
