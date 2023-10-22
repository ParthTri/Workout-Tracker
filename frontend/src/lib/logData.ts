interface LogData {
	ExcerciseID: number;
	date: string;
	sets: number;
	reps: number;
	weight: number;
}

function extractData(form: HTMLFormElement): LogData {
	let x: LogData = {
		ExcerciseID: 0,
		date: "",
		sets: 0,
		reps: 0,
		weight: 0,
	};

	for (let i = 0; i < form.length; i++) {
		if (form[i].name == "date") {
			x[form[i].name] = new Date(form[i].value).toISOString().replace("T", " ");
		} else {
			x[form[i].name] = form[i].value;
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
