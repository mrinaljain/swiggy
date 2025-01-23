import App from "express";
import resRouter from "./routes/restaurant_router.js";

const app = App();

app.use("/api/restaurant", resRouter);
// app.get("/ping", (req, res) => {
//   console.log(req.url);
//   res.json({ url: req.url });
// });

app.listen("5233", () => {
  console.log("server is running");
});
