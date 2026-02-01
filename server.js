const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './.env' });

const app = require('./src/app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`\n################################################`);
  console.log(`🚀 Server running on PORT: ${PORT}`);
  console.log(`################################################\n`);
});