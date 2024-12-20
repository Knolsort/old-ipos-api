import express from "express";
import customerRouter from "./routes/customer";
import userRouter from "./routes/user";
import shopRouter from "./routes/shop";
import supplierRouter from "./routes/supplier";
import loginRouter from "./routes/login";
import unitRouter from "./routes/unit";
import brandRouter from "./routes/brand";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1", customerRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", shopRouter);
app.use("/api/v1", supplierRouter);
app.use("/api/v1", loginRouter);
app.use("/api/v1", unitRouter);
app.use("/api/v1", brandRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", productRouter);

app.listen(PORT, () => {
  console.log("Server is Running..");
});
