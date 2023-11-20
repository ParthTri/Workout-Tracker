import { browser, dev } from "$app/environment";

let SECRET_SERVER_IP: string;
if (browser && dev) {
	SECRET_SERVER_IP = `${window.location.hostname}:8090`
} else if (browser) {
	SECRET_SERVER_IP = `${window.location.hostname}`
}

export async function updateRoutineName(id: string, name: string): Promise<any>{
	let payload = {
		name: name,	
	}

	let request = await fetch(`http://${SECRET_SERVER_IP}/api/collections/Routine/records/${id}`,
		{
			method: "PATCH",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
	})

	let response = await request.json();

	return response;
}
