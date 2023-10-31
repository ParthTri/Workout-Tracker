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
