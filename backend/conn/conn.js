const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://pratik99672:ioVHoIhPYHptlVOu@cluster0.76o8j.mongodb.net/"
  )
  .then(() => console.log("connected"));
