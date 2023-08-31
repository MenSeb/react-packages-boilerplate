import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
import { name as displayName } from './package.json';
import { jestConfig } from '../../jest.config';

const config: JestConfigWithTsJest = {
  ...jestConfig,
  displayName,
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

export default config;
