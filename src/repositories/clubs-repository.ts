import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const filePath = "./src/data/clubs.json";

async function loadClubs(): Promise<ClubModel[]> {
	try {
		const data = await fs.readFile(filePath, "utf-8");
		return JSON.parse(data) as ClubModel[];
	} catch (error) {
		console.error("Error loading clubs:", error);
		return [];
	}
}

export const findAllClubs = async (): Promise<ClubModel[]> => loadClubs();
