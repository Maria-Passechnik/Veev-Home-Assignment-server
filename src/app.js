const express = require("express");
const projectsRouter = require("./routes/projectsRouter");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/projects", projectsRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port} !`);
});
