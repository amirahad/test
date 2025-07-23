const { execSync } = require('child_process');

// Build the Strapi admin panel
execSync('npm run build', { stdio: 'inherit' }); 