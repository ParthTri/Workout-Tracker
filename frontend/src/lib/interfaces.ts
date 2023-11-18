export interface LogData {
	ExcerciseID: string;
	date: string;
	sets: number;
	reps: number;
	weight: number;
}

export interface ExcerciseData {
	RoutineID: string;
	Date: string;
	Name: string;
	Weight: number;
	Active: boolean;
}

export interface RoutineData {
	id?: string;
	name: string;
	created?: string;
}

export interface StatData {
	id?: string;
	Name: string;
	created?: string;
}

export interface StatLogData {
	StatID?: string;
	date: string;
	Measurement: number;
}

export interface Data {
	id?: string;
	date: string;
}
