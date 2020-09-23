const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

// here
app.get("/", (req, res, next) => {
  res.send("Hello world!");
});
app.use("/add", (req, res, next) => {
  let x = Number(1000000);
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (Number(req.body.num1) > x || Number(req.body.num2) > x) {
    res.json({
      status: "error",
      message: "Overflow"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.json({
      status: "success",
      message: "the sum of given two numbers",
      sum: result
    });
  }
});

app.use("/sub", (req, res, next) => {
  let x = Number(1000000);
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (Number(req.body.num1) < x || Number(req.body.num2) < x) {
    res.json({
      status: "error",
      message: "Underflow"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 - num2;
    res.json({
      status: "success",
      message: "the difference of given two numbers",
      sum: result
    });
  }
});

app.use("/multiply", (req, res, next) => {
  let x = Number(1000000);
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } /*else if (
    Number(req.body.num1) > x ||
    Number(req.body.num2) > x ||
    Number(req.body.num1) * Number(req.body.num12) > x
  ) {
    res.json({
      status: "error",
      message: "Overflow"
    });
  }*/ else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result1 = num1 * num2;
    res.json({
      status: "success",
      message: "The product of given numbers",
      sum: result1
    });
  }
});

app.use("/division", (req, res, next) => {
  if (Number(req.body.num2) === Number(0)) {
    res.json({
      status: "error",
      message: "cannot divide by 0"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 / num2;
    res.json({
      status: "success",
      message: "The division of given numbers",
      sum: result
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
