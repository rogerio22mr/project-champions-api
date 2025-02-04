import { PlayerModel } from "../models/player-model";
import { PlayersTransfer } from "../models/players-transfer-model";
import { StatisticsModel } from "../models/statistics-model";
import * as playerRepository from "../repositories/players-repository";
import { StatusCode } from "../utils/enums/status-code";

const createResponse = (
	statusCode: StatusCode,
	body: any
): PlayersTransfer => ({
	statusCode,
	body,
});

export const getAllPlayer = async (): Promise<PlayersTransfer> => {
	const data = await playerRepository.findAllPlayers();
	return createResponse(
		data.length ? StatusCode.OK : StatusCode.NO_CONTENT,
		data
	);
};

export const getPlayerById = async (id: number): Promise<PlayersTransfer> => {
	const data = await playerRepository.findPlayerById(id);
	return createResponse(data ? StatusCode.OK : StatusCode.NO_CONTENT, data);
};

export const createPlayer = async (
	player: PlayerModel
): Promise<PlayersTransfer> => {
	const data = await playerRepository.insertPlayer(player);
	return createResponse(
		data ? StatusCode.CREATED : StatusCode.BAD_REQUEST,
		data
	);
};

export const deletePlayer = async (id: number) => {
	const data = await playerRepository.deletePlayerById(id);
	return createResponse(data ? StatusCode.OK : StatusCode.BAD_REQUEST, {
		message: data ? "player deleted" : "player id didn't exist",
	});
};

export const updatePlayer = async (id: number, statistics: StatisticsModel) => {
	const data = await playerRepository.updatePlayerById(id, statistics);
	return createResponse(data ? StatusCode.OK : StatusCode.BAD_REQUEST, {
		message: data ? "player updated" : "player id didn't exist",
	});
};
