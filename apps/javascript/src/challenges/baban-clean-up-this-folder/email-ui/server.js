const express = require("express");
const path = require("path");

const app = express();

app.use("/src", express.static(path.resolve(__dirname, "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

const port = 5500;
app.listen(port, () => console.log(`Server running successfully at ${port}`));
