const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI, {
      // These options are no longer needed in Mongoose 6+, but good to know
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`\n################################################`);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`################################################\n`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;