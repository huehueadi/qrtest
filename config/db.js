const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://temploginoffice:btCJXCYZH0kJa9ew@cluster0.hytfw.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB