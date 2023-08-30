import { JestConfigWithTsJest } from 'ts-jest';
import { name as displayName } from './package.json';
import { jestConfig } from '../../jest.config';

const config: JestConfigWithTsJest = {
  ...jestConfig,
  displayName,
};

export default config;
