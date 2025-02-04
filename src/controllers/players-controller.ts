import { Request, Response } from "express";
import * as servicePlayer from "../services/players-service";
import { PlayerModel } from "../models/player-model";

export const getPlayers = async (req: Request, res: Response) => {
	const httpResponse = await servicePlayer.getAllPlayer();

	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const httpResponse = await servicePlayer.getPlayerById(id);

	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (req: Request, res: Response) => {
	const body: PlayerModel = req.body;
	const httpResponse = await servicePlayer.createPlayer(body);

	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const httpResponse = await servicePlayer.deletePlayer(id);

	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const data = req.body;

	const httpResponse = await servicePlayer.updatePlayer(id, data);

	res.status(httpResponse.statusCode).json(httpResponse.body);
};
