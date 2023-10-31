<script lang="ts">
	import { onMount } from "svelte"
	import * as d3 from "d3"
	import type { LogData } from "$lib/interfaces";

	import GraphPoints from "$lib/graphPoints.ts"

	export let data: Array<LogData> = [];
	export let showWeight: boolean;
	export let excerciseID;

	let vis: HTMLElement;

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

	data.map(val => {
		let date = val.date.split(" ")[0]
		val.date = new Date(date)
	})

	let width: number;
	let height: number;
	const margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	};

	onMount(() => {
		redraw();
		window.addEventListener('resize', redraw);
	})

	function redraw(): void {
		// empty vis div
		d3.select(vis).html(null); 

		// determine width & height of parent element and subtract the margin
		width = d3.select(vis).node().getBoundingClientRect().width - margin.left - margin.right;
		height = d3.select(vis).node().getBoundingClientRect().height - margin.top - margin.bottom;

		let yScale = d3.scaleLinear().domain([0, 50]);
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
		GraphPoints(svg, "steelblue", data, xScale, yScale, "reps")

		// Sets
		GraphPoints(svg, "red", data, xScale, yScale, "sets")

		if (first.weight != -1) {
			GraphPoints(svg, "green", data, xScale, yScale, "weight")
		}
		
	}

</script>

<div id="vis" 
	bind:this={vis} 
	class="max-h-[75vh] min-h-[50vh]"></div>
