import { Team } from "../../utils/types/types1";

type Props = {
	teams: Team[];
}

const Table = ({ teams }: Props) => {

	return (
		<table>
			<thead>
				<th></th>
				<th></th>
				<th>P</th>
				<th>W</th>
				<th>D</th>
				<th>L</th>
				<th>GF</th>
				<th>GA</th>
				<th>GD</th>
				<th>PTS</th>
			</thead>
			<tbody>
				{teams.map((team, index) => (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{team.name}</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
