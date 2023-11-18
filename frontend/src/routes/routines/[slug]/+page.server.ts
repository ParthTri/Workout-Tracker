// BUG: Need to filter data based on id
import { SECRET_SERVER_IP } from "$env/static/private";
// import "dot

export async function load({ fetch, params }) {
	let data = await fetch(
		`http://${SECRET_SERVER_IP}/api/collections/Excercise/records?filter=(RoutineID='${params.slug}')`,
		{
			"mode": "cors",
			"headers": {
				"Access-Control-Allow-Origin": "*"
			}
		}
	);
	let json = await data.json();

	let routineData = await fetch(
		`http://${SECRET_SERVER_IP}/api/collections/Routine/records/${params.slug}`,
		{
			"mode": "cors",
			"headers": {
				"Access-Control-Allow-Origin": "*"
			}

		}
	)
	let result = await routineData.json()

	json.routineData = result;

	return json;
}
