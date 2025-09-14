import express = require('express');
import cors from "cors";
import shopRouter from "./routes/shops";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/shops", shopRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

