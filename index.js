const express = require("express");
const cors = require("cors");
const CONST = require("./configs/constans");
const appRouter = require("./routes");
const connectDB = require("./configs/configDB");

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

connectDB();

app.use(express.json());
app.use(cors(corsOptions));

//api
app.use("/", appRouter.userRoute);
app.use("/api/medicines", appRouter.medicineRoute);
app.use("/api/elements", appRouter.elementRoute);
app.use("/", appRouter.planRoute);
app.use("/api/steps", appRouter.stepRoute);
app.use("/api/processes", appRouter.processRoute);
app.use("/", appRouter.profile);
app.use("/", appRouter.order);

const port = CONST.POST;

app.listen(port, () => console.log(`Server is running on port:${port}`));
