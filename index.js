import express from 'express'
import path from 'path';

const app = express();
const PORT = 3000;
const __dirname = path.resolve(); 

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to send HTML");
    }
  });
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to send HTML");
    }
  });
});

app.get("/contact", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to send HTML");
    }
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
