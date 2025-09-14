import express = require('express');
import cors from "cors";
import shopRouter from "./routes/shops";
import flowerRouter from "./routes/flowers";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/shops", shopRouter);
app.use("/api/shops", flowerRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

