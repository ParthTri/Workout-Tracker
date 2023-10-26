import type { ExcerciseData } from "./interfaces.ts";

export default async function createExercise(
	data: ExcerciseData,
): Promise<any> {
	let response = await fetch(
		"http://127.0.0.1:8090/api/collections/Excercise/records",
		{
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		},
	);

	return response.json();
}
