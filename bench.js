const { execSync } = require('child_process');
const fs = require('fs');
const chalk = require('chalk');

const methods = fs.readdirSync('./methods');

/**
 * We could run `pnpm run bench --r`, but we do it this way to ensure only 1 benchmark is running at a time.
 */
methods.forEach(method => {
  console.info(chalk.blueBright(`Starting benchmark for method '${method}'...`));
  execSync(`pnpm run bench --filter ${method}`, {
    stdio: 'inherit',
  });
});
