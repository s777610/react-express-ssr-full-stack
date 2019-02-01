import express from "express";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public")); // allow browser to find public/bundle
app.get("/", (req, res) => {
  res.send(renderer());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
