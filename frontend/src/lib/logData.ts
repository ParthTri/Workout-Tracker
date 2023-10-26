interface LogData {
	ExcerciseID: number;
	date: string;
	sets: number;
	reps: number;
	weight: number;
}

export function extractData(form: HTMLFormElement): LogData {
	let x: LogData = {
		ExcerciseID: 0,
		date: "",
		sets: 0,
		reps: 0,
		weight: -1,
	};

	for (let i = 0; i < form.target.length; i++) {
		if (form.target[i].name == "date") {
			x[form.target[i].name] = new Date(form.target[i].value)
				.toISOString()
				.replace("T", " ");
		} else {
			x[form.target[i].name] = form.target[i].value;
		}
	}

	return x;
}

export default async function logData(
	data: HTMLFormElement,
	excerciseID: number,
): Promise<void> {
	let extractedData: LogData = extractData(data.originalTarget);
	extractedData.ExcerciseID = excerciseID;
	delete extractedData[""];
	console.log(extractedData);

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
			body: JSON.stringify(extractedData),
		},
	);
}
