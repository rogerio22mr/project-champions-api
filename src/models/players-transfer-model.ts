import { PlayerModel } from "./player-model";

export interface PlayersTransfer {
	statusCode: number;
	body: PlayerModel | PlayerModel[] | undefined;
}
