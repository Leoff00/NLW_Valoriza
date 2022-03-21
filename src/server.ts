import "reflect-metadata";
import { app } from "./app";
import "./database";
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🔥 Listening on PORT http://localhost:${PORT} 🔥`);
});
