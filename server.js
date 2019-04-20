// setting up node dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const sassMiddleware = require("node-sass-middleware");
const routes = require("./routes");

// checking for .env.PORT in deployment enviroment (heroku) otherwise using local 3000
const PORT = process.env.PORT || 3000;

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

// starting express server and console-logging local server
app.listen(PORT, function() {
  console.log("Server is on: http://localhost:" + PORT);
});
