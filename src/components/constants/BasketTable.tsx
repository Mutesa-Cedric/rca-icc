import React from 'react'
import { Team } from '../../utils/types/types1';

type Props = {
	teams: Team[];
};

const BasketTable = ({teams}: Props) => {
  if (!teams) return <div>loading...</div>;
	if (teams.length === 0) return <div className='px-4'>No teams Found</div>;

	const standings = teams.sort((a, b) =>
		(b?.stats?.points ?? 0) < (a?.stats?.points ?? 0) ? -1 : 1
	);

	return (
		<table>
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th>P</th>
					<th>W</th>
					{/* <th>D</th> */}
					<th>L</th>
					{/* <th>GF</th>
					<th>GA</th>
					<th>GD</th>
					<th>PTS</th> */}
				</tr>
			</thead>
			<tbody>
				{standings.map((team, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{team.name}</td>
						<td>{team?.stats?.matchesPlayed ?? 0}</td>
						<td>{team?.stats?.matchesWon ?? 0}</td>
						{/* <td>{team?.stats?.matchesDrawn ?? 0}</td> */}
						<td>{team?.stats?.matchesLost ?? 0}</td>
						{/* <td>{team?.stats?.goalsScored ?? 0}</td>
						<td>{team?.stats?.goalsConceded ?? 0}</td>
						<td>
							{(team?.stats?.goalsScored ?? 0) -
								(team?.stats?.goalsConceded ?? 0)}
						</td>
						<td>{team?.stats?.points ?? 0}</td> */}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default BasketTable