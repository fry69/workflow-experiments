#!/usr/bin/env bun

/**
 * tool.ts
 *
 * Bogus tool for testing.
 */

const args = process.argv.slice(2);

if (args[0] === '--version') {
  console.error('tool v0.0.0');
  process.exit(0);
}
