import express, { json } from "express";
import router from "./routes/routes";
import cors from "cors";

function createApp() {
	const app = express();

	app.use(json());
	app.use("/api", router);

	const corsOptions = {
		origin: "localhost",
		methods: ["GET", "POST", "PATCH", "DELETE"],
	};

	app.use(cors());

	return app;
}

export default createApp;
