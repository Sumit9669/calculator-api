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

app.use("/add", (req, res, next) => {
  console.log(req.body.num1);

  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "invalid data type"
    });
  } else if (
    Number(req.body.num1) > 1000000 ||
    Number(req.body.num2) > 1000000
  ) {
    res.json({
      status: "faliure",
      message: "Overflow"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.json({
      status: "success",
      message: "the sum of given two number",
      sum: result
    });
  }
});

app.use("/sub", (req, res, next) => {
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "invalid data type"
    });
  } else if (
    Number(req.body.num1) < 1000000 ||
    Number(req.body.num2) < 1000000
  ) {
    res.json({
      status: "faliure",
      message: "Underflow"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 - num2;
    res.json({
      status: "success",
      message: "the difference of given two number",
      sum: result
    });
  }
});

app.use("/multiply", (req, res, next) => {
  if (typeof req.body.num1 == "string" || typeof req.body.num2 == "string") {
    res.json({
      status: "error",
      message: "invalid data type"
    });
  } else if (
    Number(req.body.num1) > 1000000 ||
    Number(req.body.num2) > 1000000
  ) {
    res.json({
      status: "faliure",
      message: "Overflow"
    });
  } else {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 * num2;
    res.json({
      status: "success",
      message: "the product of given two number",
      sum: result
    });
  }
});

app.use("/division", (req, res, next) => {
  console.log(req.body.num1);
  if (Number(req.body.num2 === 0)) {
    res.json({
      status: "faliure",
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
