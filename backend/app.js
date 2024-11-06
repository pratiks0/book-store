const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path"); 
const bookRoute = require("./routes/booksRoutes");
app.use(express.json());
app.use(cors());

app.use("/api/v1", bookRoute);

app.get("/", (req, res) => { 
  app.use(express.static(path.resolve(__dirname, "frontend", "build"))); 
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")); 
}); 

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
