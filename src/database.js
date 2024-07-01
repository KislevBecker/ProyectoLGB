import { connect } from "mongoose";
import {MONGODB_URI} from "./config"


(async () => {
  try {
     //const db = await connect("mongodb://127.0.0.1:27017/crud-lgb");
    const db = await connect("mongodb+srv://kisbeckerchavez:Ks9737-5357@cluster0.ngn9chn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("db connected", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
