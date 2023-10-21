export async function load({ fetch, params }) {
	let data = await fetch(
		`http://127.0.0.1:8090/api/collections/Excercise/records`,
	);
	let json = await data.json();

	return json;
}
