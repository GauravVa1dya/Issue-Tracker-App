const mongoose = require("mongoose");
const url = "mongodb+srv://gauravprof2998:V8m0kQXdTWVEsIHO@cluster0.x6mutts.mongodb.net/";
// mongoose.connect('url')
mongoose.connect(url, {
  useNewUrlParser: true,
});
const db = mongoose.connection;

//If any Error then Getting this Line
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to Database :: MongoDB ");
});

module.exports = db; //Exports db
