const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
const PORT = process.env.PORT || 4000


dotenv.config({path:"backend/config/config.env"})

// connect to database
connectDatabase();

app.listen(PORT, () => {

    console.log(`Server is working on http://localhost:${PORT}`);
  });