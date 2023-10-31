// BUG: Need to filter data based on id

export async function load({ fetch, params }) {
	let data = await fetch(
		`http://127.0.0.1:8090/api/collections/Excercise/records?filter=(RoutineID='${params.slug}')`,
	);
	let json = await data.json();

	let routineData = await fetch(
		`http://127.0.0.1:8090/api/collections/Routine/records/${params.slug}`,
	)
	let result = await routineData.json()

	json.routineData = result;

	return json;
}
