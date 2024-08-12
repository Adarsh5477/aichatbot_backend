import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
     app.listen(PORT,'0.0.0.0', () => {
        console.log("Server Open & Connected To Database 🤟")
        console.log("GenAI Service is Online")
    });
  })
  .catch((err) => console.log(err));
