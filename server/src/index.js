const express = require("express");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");

const logs = require("./api/logs");

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    credentials: true,
  /*   origin: [
      process.env.CORS_ORIGIN,
      'https://travel-log-mapbox.herokuapp.com',
      'https://travel-log-mapbox.herokuapp.com',
    ], */
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "You ask for a get petition",
  });
});

app.use("/api/logs", logs);

// The last middleware, when you can't finde the direction.
app.use(middlewares.notFound);

// Error handle Middleware.
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(`${__dirname}/public/index.html`);
});

app.use(middlewares.errorHandler);
