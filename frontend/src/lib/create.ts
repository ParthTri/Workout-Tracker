import type { ExcerciseData, LogData, RoutineData, StatData, StatLogData } from "./interfaces.ts";

export function extractFormData(form: HTMLFormElement, obj: any): void {
	for (let i = 0; i < form.target.length; i++) {
		let currentElement: HTMLElement = form.target[i];

		if (currentElement.name == "date") {
			obj[currentElement.name] = new Date(currentElement.value)
				.toISOString()
				.replace("T", " ");
		} else {
			if (currentElement.type == "checkbox") {
				obj[currentElement.name] = currentElement.checked;
			} else {
				obj[currentElement.name] = currentElement.value;
			}
		}
	}

	delete obj[""];
}

export async function createExercise(
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


export async function createLog(
	log: LogData,
	excerciseID: string,
): Promise<any> {
	log.ExcerciseID = excerciseID;

	let response = await fetch(
		"http://127.0.0.1:8090/api/collections/Log/records",
		{
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(log),
		},
	);

	return response.json();
}

export async function createRoutine(
	log: RoutineData,
): Promise<any> {
	let response = await fetch(
		"http://127.0.0.1:8090/api/collections/Routine/records",
		{
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(log),
		},
	);

	return response.json();
}

export async function createStat(
	stat: StatData,
): Promise<any> {
	let response = await fetch(
		"http://127.0.0.1:8090/api/collections/Stats/records",
		{
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(stat),
		},
	);

	return response.json();
}

export async function createStatLog(
	log: StatLogData,
	statID: string
): Promise<any> {
	log.StatID = statID;
	let response = await fetch(
		"http://127.0.0.1:8090/api/collections/StatLog/records", 
		{
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(log),
		},
	);

	return response.json();
}
