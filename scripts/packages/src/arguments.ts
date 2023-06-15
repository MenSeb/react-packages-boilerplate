import { argv } from 'node:process';

/**
 * The regular expression for a command line argument {@link validateArgument}.
 */

export const REGEXP_ARGUMENT = /-{2}[a-z]+={1}[a-z]+/;

/**
 * Creates the message for an invalid command line argument.
 *
 * @param arg the command line argument.
 * @returns the message for an invalid argument.
 */

export function invalidArgument(arg: string) {
  return `Invalid argument {${arg}}. Should be {--[a-z]+=[a-z]+}.`;
}

/**
 *  Tests if the command line argument is valid.
 *
 * @param arg the command line argument.
 * @param validator the regular expression to test the argument. {@default REGEXP_ARGUMENT}
 * @returns true if the argument is valid, false otherwise.
 */

export function validateArgument(arg: string, validator = REGEXP_ARGUMENT) {
  return validator.test(arg);
}

/**
 * Throws an error if a command line argument is invalid.
 *
 * @param args the command line arguments.
 */

export function validateArguments(args: string[]) {
  for (const arg of args) {
    if (validateArgument(arg)) continue;

    throw new Error(invalidArgument(arg));
  }
}

/**
 * Extracts the arguments from the command line.
 *
 * @returns the command line arguments.
 */

export function extractArguments() {
  const args = argv.slice(2);

  validateArguments(args);

  return args;
}
