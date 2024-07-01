import { connect } from "mongoose";
import {MONGODB_URI} from "./config"


(async () => {
  try {
     const db = await connect("mongodb://127.0.0.1:27017/crud-lgb");
    //const db = await connect(MONGODB_URI);
    console.log("db connected", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
