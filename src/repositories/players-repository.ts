import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from "fs/promises";

const filePath = "./src/data/players.json";

async function loadPlayers(): Promise<PlayerModel[]> {
	try {
		const data = await fs.readFile(filePath, "utf-8");
		return JSON.parse(data) as PlayerModel[];
	} catch (error) {
		console.error("Error loading players:", error);
		return [];
	}
}

async function savePlayers(players: PlayerModel[]): Promise<void> {
	try {
		const jsonData = JSON.stringify(players, null, 2);
		await fs.writeFile(filePath, jsonData, "utf-8");
	} catch (error) {
		console.error("Error saving players:", error);
	}
}

export const findAllPlayers = async (): Promise<PlayerModel[]> => loadPlayers();

export const findPlayerById = async (
	id: number
): Promise<PlayerModel | undefined> => {
	const players = await loadPlayers();
	return players.find((player) => player.id === id);
};

export const insertPlayer = async (
	player: Omit<PlayerModel, "id">
): Promise<PlayerModel> => {
	const players = await loadPlayers();
	const newPlayer: PlayerModel = { id: players.length + 1, ...player };
	players.push(newPlayer);
	await savePlayers(players);
	return newPlayer;
};

export const deletePlayerById = async (
	id: number
): Promise<PlayerModel | null> => {
	const players = await loadPlayers();
	const index = players.findIndex((player) => player.id === id);
	if (index === -1) return null;

	const [deletedPlayer] = players.splice(index, 1);
	await savePlayers(players);
	return deletedPlayer;
};

export const updatePlayerById = async (
	id: number,
	statistics: StatisticsModel
): Promise<PlayerModel | null> => {
	const players = await loadPlayers();
	const player = players.find((p) => p.id === id);
	if (!player) return null;

	player.statistics = statistics;
	await savePlayers(players);
	return player;
};
