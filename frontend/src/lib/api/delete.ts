import { browser, dev } from "$app/environment";

let SECRET_SERVER_IP: string;
if (browser && dev) {
	SECRET_SERVER_IP = `${window.location.hostname}:8090`
} else if (browser) {
	SECRET_SERVER_IP = `${window.location.hostname}`
}

export async function deleteRoutine(id: string) {
	let request = await fetch(`http://${SECRET_SERVER_IP}/api/collections/Routine/records/${id}`,
		{
			method: "DELETE",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			}
	})

	return request;
}

export async function deleteExcercise(id: string) {
	let request = await fetch(`http://${SECRET_SERVER_IP}/api/collections/Excercise/records/${id}`,
		{
			method: "DELETE",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			}
	})

	return request;
}

export async function deleteStat(id: string) {
	let request = await fetch(`http://${SECRET_SERVER_IP}/api/collections/Stats/records/${id}`,
		{
			method: "DELETE",
			mode: "cors",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			}
	})

	return request;
}
