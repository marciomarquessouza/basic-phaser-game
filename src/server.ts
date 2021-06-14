import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.resolve(__dirname, "../dist")));

const PORT: string | number = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist"));
});

app.listen(PORT, () => console.log(`hosting @${PORT}`));
