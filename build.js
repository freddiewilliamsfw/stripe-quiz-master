
#!/usr/bin/env node

const { execSync } = require('child_process');

try {
  console.log('Starting build process...');
  console.log('Cleaning previous build...');
  
  try {
    execSync('rm -rf docs', { stdio: 'inherit' });
  } catch (e) {
    console.log('No previous build to clean or error cleaning');
  }
  
  console.log('Building project...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
