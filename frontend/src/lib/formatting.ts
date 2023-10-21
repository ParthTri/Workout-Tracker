export function stripTime(input: string | Date): string {
	if (typeof input == "string") {
		let obj = new Date(input.split(" ")[0]);
		return obj.toDateString();
	} else if (input == undefined) {
		return new Date().toDateString();
	}
	return input.toDateString();
}
