// testConnect.js (CommonJS or ESM depending on your project)
// If your project uses ESM (import), use import; here is a Node-style example using require.
// If your project uses ESM, let me know and I will provide the import version.

const mongoose = require('mongoose');
require('dotenv').config();

(async () => {
  try {
    console.log('Trying to connect to:', process.env.MONGODB_URI?.slice(0,80) + '...');
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas successfully ✅');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Connection failed ❌', err);
    process.exit(1);
  }
})();
