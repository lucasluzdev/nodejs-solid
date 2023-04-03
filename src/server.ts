import { app } from "./app";
import { config } from "dotenv";

config();
const port = process.env.APPLICATION_PORT || 3000;

app.listen(port, () => console.log(`app listening on port ${port}`));