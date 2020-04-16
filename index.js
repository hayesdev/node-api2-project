const express = require("express");

const server = express();
const port = 3000;

server.use(express.json());

server.listen(port, () => {
  console.log(`Server listening at http://localhost${port}`);
});
