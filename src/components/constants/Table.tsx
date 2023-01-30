import { Team } from "../../utils/types/types1";

type Props = {
	teams: Team[];
};

const Table = ({ teams }: Props) => {
	if (!teams) return <div>loading...</div>;
	if (teams.length === 0) return <div>no teams</div>;

	const standings = teams.sort((a, b) => {
		if (a?.stats?.points === b?.stats?.points) {
			const aDiff = (a?.stats?.goalsScored ?? 0) - (a?.stats?.goalsConceded ?? 0)
			const bDiff = (b?.stats?.goalsScored ?? 0) - (b?.stats?.goalsConceded ?? 0)
			return aDiff > bDiff ? -1 : 1
		}
		return (b?.stats?.points ?? 0) < (a?.stats?.points ?? 0) ? -1 : 1
	}
	)

	return (
		<div className='flex w-full flex-col overflow-x-auto table-cont'>
			<table className=' min-w-[450px] overflow-x-auto'>
				<thead>
					<tr>
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
					</tr>
				</thead>
				<tbody>
					{standings.map((team, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{team.name}</td>
							<td>{team?.stats?.matchesPlayed ?? 0}</td>
							<td>{team?.stats?.matchesWon ?? 0}</td>
							<td>{team?.stats?.matchesDrawn ?? 0}</td>
							<td>{team?.stats?.matchesLost ?? 0}</td>
							<td>{team?.stats?.goalsScored ?? 0}</td>
							<td>{team?.stats?.goalsConceded ?? 0}</td>
							<td>
								{(team?.stats?.goalsScored ?? 0) -
									(team?.stats?.goalsConceded ?? 0)}
							</td>
							<td>{team?.stats?.points ?? 0}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
