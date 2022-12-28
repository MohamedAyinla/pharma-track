import HTTP from "./HTTP";

const BASE = 'numeros-urgence';

export async function getAllNumbers() {
	const res = await HTTP.get(`${BASE}`);
	return res;
}