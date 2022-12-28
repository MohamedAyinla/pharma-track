import HTTP from './HTTP';

const BASE = 'users';

export async function createAccount(payload) {
	const res = await HTTP.post(`${BASE}`, payload);
	return res;
}