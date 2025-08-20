#!/usr/bin/env node
/**
 * ESM shim to run ESLint when CI tries to execute a file named "lint".
 * It calls the local npm script to ensure proper configuration.
 */
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const child = spawn(cmd, ['run', 'lint'], {
  stdio: 'inherit',
  cwd: __dirname,
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
