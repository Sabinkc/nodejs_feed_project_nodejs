require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");

connectDb();

// 1. Use the PORT provided by Render, OR default to 3000 for local dev
const PORT = process.env.PORT || 3000;

// 2. Bind to '0.0.0.0' so Render can route external traffic to your app
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
