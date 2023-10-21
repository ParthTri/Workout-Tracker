import * as d3 from "d3";
import type { ScaleLinear } from "d3";

export function drawPoints(
	graph: ScaleLinear,
	color: string,
	data: Array<any>,
	xScale: any,
	yScale: any,
	key: string,
): void {
	graph
		.append("g")
		.selectAll("dot")
		.data(data)
		.enter()
		.append("circle")
		.attr("cx", (d) => xScale(d.date))
		.attr("cy", (d) => yScale(d[key]))
		.attr("r", 3)
		.style("fill", color);

	return graph;
}

export function drawLine(
	graph: ScaleLinear,
	color: string,
	data: Array<any>,
	xScale: any,
	yScale: any,
	key: string,
): void {
	graph
		.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", color)
		.attr("stroke-width", 1.5)
		.attr(
			"d",
			d3
				.line()
				.x((d) => xScale(d.date))
				.y((d) => yScale(d[key])),
		);
}

export default function GraphPoints(
	graph: ScaleLinear,
	color: string,
	data: Array<any>,
	xScale: any,
	yScale: any,
	key: string,
): void {
	drawPoints(graph, color, data, xScale, yScale, key);
	drawLine(graph, color, data, xScale, yScale, key);
}
