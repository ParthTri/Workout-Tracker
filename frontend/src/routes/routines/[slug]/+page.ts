
export async function load({ fetch, params }) {
    console.log(`http://127.0.0.1:8090/api/collections/Excercise/records`)
    let data = await fetch(`http://127.0.0.1:8090/api/collections/Excercise/records`);
    let json = await data.json();
    console.log(json)

    return json;
}
