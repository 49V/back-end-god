import express from "express";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
  const unusedVariable = 1
   const unsuedVariableTow = 2
});

console.log(`Listening on port ${port}`);
    console.log("")
app.listen(port);
