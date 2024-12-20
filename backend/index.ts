import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

// use port 3000 unless there exists a preconfigured port
const PORT: string | number = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
