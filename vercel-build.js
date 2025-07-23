const { execSync } = require('child_process');

// Check if we need to run database migrations
if (process.env.DATABASE_CLIENT === 'postgres') {
    console.log('Running database migrations...');
    try {
        // Optional: Add database migration commands here if needed
        // execSync('npm run strapi database:migrate', { stdio: 'inherit' });
    } catch (error) {
        console.error('Error running migrations:', error);
    }
}

// Build the Strapi admin panel
console.log('Building Strapi admin panel...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!'); 