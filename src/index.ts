import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRouter } from "./routes/userRouter";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true, // Allow all origins
    credentials: true, // Allow credentials (cookies, authorization headers) cross-origin
  })
);
config();

app.use("/compiler", compilerRouter);
app.use("/user", userRouter);

dbConnect();
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
