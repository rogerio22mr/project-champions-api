import { Request, Response } from "express";
import * as clubsService from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
	const httpResponse = await clubsService.getAllClubs();

	res.status(httpResponse.statusCode).json(httpResponse.body);
};
