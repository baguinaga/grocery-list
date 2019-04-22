// setting up node dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const sassMiddleware = require("node-sass-middleware");
const mongoose = require("mongoose");
const routes = require("./routes");

// checking for deployment enviroment (heroku) otherwise using localhost
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/grocerylist";

// setting up express middleware and client/api routes
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// handlebars middleware options
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/* options for sass Middleware compiler, prefix option ignores the prepending 
file path; referenced in the stylesheet e.i. <link rel="stylesheet" href="assets/css/main.css" /> 
*/

app.use(
  sassMiddleware({
    src: __dirname + "/sass",
    dest: __dirname + "/public/assets/css",
    prefix: "/assets/css",
    debug: true,
    outputStyle: "expanded"
  })
);

// serving public dir as static
app.use(express.static("public"));
app.use('/favicon.ico', express.static("public/assets/images/favicon.ico"));

// connecting to mongo DB locally or throught deployment enviroment
mongoose.connect( MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// starting express server and console-logging local server
app.listen(PORT, function() {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
