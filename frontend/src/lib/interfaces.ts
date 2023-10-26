export interface LogData {
	ExcerciseID: number;
	date: string;
	sets: number;
	reps: number;
	weight: number;
}

export interface ExcerciseData {
	RoutineID: string;
	Date: string;
	Name: string;
	Weight: boolean;
}

export interface RoutineData {
	id?: string;
	name: string;
	created?: string;
}
