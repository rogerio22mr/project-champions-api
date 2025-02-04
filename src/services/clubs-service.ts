import { StatusCode } from "../utils/enums/status-code";
import * as clubRepository from "../repositories/clubs-repository";

export const getAllClubs = async () => {
	const body = await clubRepository.findAllClubs();
	return { statusCode: body ? StatusCode.OK : StatusCode.NO_CONTENT, body };
};
