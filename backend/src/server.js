import express from "express";
import cors from "cors";
import cakesRouter from "./routers/cakes.router.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use("/api/cakes", cakesRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// db.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import { Schema, model } from "mongoose";

// const app = express();
// const port = process.env.PORT || 8000;

// mongoose.connect(
//   "mongodb+srv://pasties:cakes@cluster0.nqcnlws.mongodb.net/ytpastry"
// );
// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// db.on("error", (error) => {
//   console.error("Error connecting to MongoDB:", error);
// });

// const CakeSchema = new Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   tags: { type: [String] },
//   favorite: { type: Boolean, default: false },
//   stars: { type: Number, default: 3 },
//   imageUrl: { type: String, required: true },
//   origins: { type: [String], required: true },
//   cookTime: { type: String, required: true },
// });

// const CakeModel = mongoose.model("Cakes", CakeSchema);

// app.use(cors());
// app.use(express.json());

// app.get("/", async (req, res) => {
//   try {
//     const cakes = await CakeModel.find({});
//     res.send(cakes);
//   } catch (error) {
//     console.error("Error fetching cakes:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
