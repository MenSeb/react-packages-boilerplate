import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const PATH_PACKAGES = 'packages';
const PATH_COVERAGE = 'coverage';

export function readCoverages() {
  for (const package of readdirSync(PATH_PACKAGES))
    const coverage = readFileSync(`${package}/PATH_COVERAGE`);
}

export function createCoverage() {
  const coverage = readCoverages();

  writeFileSync(PATH_COVERAGE, coverage);
}
