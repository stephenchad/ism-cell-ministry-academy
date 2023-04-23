const express = require("express");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const cors = require("cors");
// const dotenv = require("dotenv");
// require("express-async-errors");

// file import
// const connectDB = require("./db/connect");

const port = 4000;
// const port = process.env.PORT || 4000;

// dotenv.config();
const app = express();

// Middleware
// app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("Hello, World!");
});

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
