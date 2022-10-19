import { argv } from 'node:process';
import { execSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';

type PackageJSON = {
  description: string;
  keywords: Array<string>;
  main: string;
  peerDependencies: object;
  publishConfig: object;
  typings: string;
};

function createPackage(): void {
  const packageName = argv[2];
  const packageFolder = `packages/${packageName}`;
  const packageSource = `${packageFolder}/src`;
  const packageTest = `${packageFolder}/__tests__`;
  const packageJSON = `${packageFolder}/package.json`;
  const packageConfig = `${packageFolder}/tsconfig.json`;

  if (existsSync(packageSource)) {
    throw Error(`Package {${packageName}} already exists !`);
  }

  execSync(`lerna create ${packageName} --yes`);

  const file = packageName.charAt(0).toUpperCase() + packageName.slice(1);
  const json = JSON.parse(readFileSync(packageJSON, 'utf-8')) as PackageJSON;

  json.description = `Accessible ${packageName} widget for React.`;
  json.keywords = ['accessible', packageName, 'widget', 'react'];
  json.main = 'lib/index.js';
  json.peerDependencies = { react: '^18.2.0', 'react-dom': '^18.2.0' };
  json.publishConfig = { access: 'public' };
  json.typings = `lib/${file}.d.ts`;

  writeFileSync(packageJSON, JSON.stringify(json));

  mkdirSync(packageSource);
  writeFileSync(`${packageSource}/index.ts`, '');
  writeFileSync(`${packageSource}/${file}.tsx`, '');

  writeFileSync(`${packageTest}/${file}.test.tsx`, '');
  unlinkSync(`${packageTest}/${packageName}.test.js`);

  writeFileSync(
    packageConfig,
    JSON.stringify({
      extends: '../../tsconfig.json',
      compilerOptions: { outDir: './lib' },
      include: ['src'],
    }),
  );

  execSync(`prettier --write ${packageFolder}`);
}

createPackage();
