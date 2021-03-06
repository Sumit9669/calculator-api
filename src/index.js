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
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (
    Number(req.body.num1) >= x ||
    Number(req.body.num2) >= x ||
    result >= 1000000
  ) {
    res.status(200).json({
      message: "Overflow"
    });
  } else {
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
  } else if (
    Number(req.body.num1) <= -1000000 ||
    Number(req.body.num2) <= -1000000
  ) {
    res.status(200).json({
      message: "Underflow"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result1 = num1 - num2;
    res.status(200).json({
      message: "the difference of given two numbers",
      difference: result1
    });
  }
});

app.use("/multiply", (req, res, next) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  }
  let mul = num1 * num2;
  if (num1 >= 1000000 || num2 >= 1000000 || mul > 1000000) {
    return res.status(200).json({ message: "Overflow" });
  }

  res
    .status(200)
    .json({ message: "The product of given numbers", result: mul });
});

app.use("/divide", (req, res, next) => {
  if (Number(req.body.num2) === Number(0)) {
    res.json({
      status: "error",
      message: "Cannot divide by zero"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result1 = num1 / num2;
    res.status(200).json({
      message: "The division of given numbers",
      result: result1
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
