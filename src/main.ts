import express from "express";
const app = express();
const port: number = 3000;
 
app.get("/", function (req, res) {
  res.send("Hello World");
});
 
console.log(`Listening on port ${port}`)
app.listen(port);