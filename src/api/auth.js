import HTTP from './HTTP';

const BASE = 'auth';

export async function connectAccount(payload) {
	const res = await HTTP.post(`${BASE}/login`, payload);
	return res;
}
