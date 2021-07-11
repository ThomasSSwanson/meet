import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#559933"];

	const [data, setData] = useState([]);

	useEffect(() => { setData(() => getData()); }, [events]);

	const getData = () => {
		const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
		const data = genres.map((genre) => {
			const value = events.filter(({ summary }) => summary.split(" ").includes(genre)).length;
			return { name: genre, value };
		});
		return data;
	};

	return (
		<ResponsiveContainer height={400}>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					labelLine={true}
					outerRadius={120}
					dataKey="value"
					label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
				>
					{getData().map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Legend verticalAlign="top" />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenre;