<script lang="ts">
	import * as d3 from "d3"
	import type { LogData } from "$lib/interfaces";

	import GraphPoints from "$lib/graphPoints.ts"

	export let data: Array<LogData> = [];
	export let showWeight: boolean;
	export let excerciseID;
	export let targetAndColour: Array<Array<string>>

	let vis: HTMLElement;

	const getBounds = () => {
		let today = new Date();
		let first: LogData = data.length != 0 ? data[0] : {
			ExcerciseID: excerciseID,
			date: today,
			sets: 0,
			reps: 0,
			weight: showWeight ? 0 : -1,
		};

		let later: Date = new Date()
		if (today.getMonth() == 12) {
			later.setFullYear(today.getFullYear()+1)
			later.setMonth(1);
		} else {
			later.setMonth(today.getMonth() + 1);
		}

		let last: LogData = data.length != 0 ? data[data.length - 1] : {
			ExcerciseID: excerciseID,
			date: later,
			sets: 0,
			reps: 0,
			weight: showWeight ? 0 : -1,
		};

		return [first, last]
	}

	let width: number;
	let height: number;
	const margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	};

	$: {
		data.map(val => {
			if (typeof val.date == "string")  {
				let date = val.date.toString().split(" ")[0]
				val.date = new Date(date)
			}
		})
		if (vis) {
			window.addEventListener('resize', () => redraw(data));
			redraw(data);
		}
	}

	function redraw(data: Array<LogData>): void {
		// empty vis div
		d3.select(vis).html(null); 

		// determine width & height of parent element and subtract the margin
		width = d3.select(vis).node().getBoundingClientRect().width - margin.left - margin.right;
		height = d3.select(vis).node().getBoundingClientRect().height - margin.top - margin.bottom;

		let yScale = d3.scaleLinear().domain([0, 50]);
		let [first, last] = getBounds();
		let xScale = d3.scaleTime([first.date, last.date], [0, width])

		// init scales according to new width & height
		xScale.range([0, width]);
		yScale.range([height, 0]);

		// create svg and create a group inside that is moved by means of margin
		const svg = d3.select(vis)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${[margin.left, margin.top]})`)

		// draw x and y axes
		svg.append("g")
			.attr("transform", `translate(${[0, height]})`)
			.call(d3.axisBottom(xScale));
		svg.append("g")
    		.call(d3.axisLeft(yScale));

		// Reps
		targetAndColour.map(element => GraphPoints(svg, element[1], data, xScale, yScale, element[0]) )
	}

</script>

<div id="vis" 
	bind:this={vis} 
	class="max-h-[75vh] min-h-[50vh]"></div>
