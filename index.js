import axios from "axios";
import express from "express";

const port = 5000;
const app = express();

const API_URL = "https://v2.jokeapi.dev/joke/Any?format=json&type=twopart";
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    console.log(result.data.setup);
    console.log(result.data.delivery);
    res.render("index.ejs", {
      setup: result.data.setup,
      delivery: result.data.delivery,
    });
  } catch (error) {
    res.render("index.ejs", { setup: "Error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
