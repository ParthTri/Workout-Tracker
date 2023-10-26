import type { LogData } from "./interfaces.ts";

export function extractData(form: HTMLFormElement, obj: any): void {
	for (let i = 0; i < form.target.length; i++) {
		if (form.target[i].name == "date") {
			obj[form.target[i].name] = new Date(form.target[i].value)
				.toISOString()
				.replace("T", " ");
		} else {
			if (form.target[i].type == "checkbox") {
				obj[form.target[i].name] = form.target[i].checked;
			} else {
				obj[form.target[i].name] = form.target[i].value;
			}
		}
	}

	delete obj[""];
}

export default async function logData(
	log: LogData,
	excerciseID: number,
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
