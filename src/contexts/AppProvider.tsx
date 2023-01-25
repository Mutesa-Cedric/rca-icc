import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import {
	fetchMatchesQuery,
	fetchPlayersAllQuery,
	playersFootQuery,
	teamsStatsFootQuery,
	teamsStatsQuery,
} from "../lib/queries";
import { AllPlayersStatsQuery } from "../lib/query1";
import { sanityClient } from "../lib/sanity";
import { Match, Player, Team } from "../utils/types/types1";
import { PlayerByTeam, TeamGroups } from "../utils/types/types2";

export type AppContextType = {
	players?: PlayerByTeam;
	setPlayers?: React.Dispatch<React.SetStateAction<PlayerByTeam>>;
	matches?: Match[];
	setMatches?: React.Dispatch<React.SetStateAction<Match[]>>;
	getMatches?: () => void;
	teams?: TeamGroups;
	setTeams?: React.Dispatch<React.SetStateAction<TeamGroups>>;
	getPlayers?: () => void;
};

export const AppContext = createContext<AppContextType>({});
export const useApp = () => useContext(AppContext);

type Props = {
	children: ReactNode;
};

export default function AppProvider({ children }: Props) {
	const [players, setPlayers] = useState<PlayerByTeam>({
		football: [],
		basketball: [],
		pingpong: [],
		debate: [],
		volleyball: [],
	});
	const [matches, setMatches] = useState<Match[]>([]);
	const [teams, setTeams] = useState<TeamGroups>({
		football: [],
		basketball: [],
		pingpong: [],
		debate: [],
		volleyball: [],
	});

	const getMatches = async () => {
		try {
			const res = await sanityClient.fetch(fetchMatchesQuery);
			console.log(res);
			setMatches(res);
		} catch (error) {
			console.log(error);
		}
	};

	const getTeams = async () => {
		try {
			const teams = await sanityClient.fetch(teamsStatsQuery);
			const footballTeams = teams.filter(
				(team: Team) => team.category === "football"
			);
			const basketballTeams = teams.filter(
				(team: Team) => team.category === "basketball"
			);
			const volleyballTeams = teams.filter(
				(team: Team) => team.category === "volleyball"
			);
			const pingpongTeams = teams.filter(
				(team: Team) => team.category === "pingpong"
			);
			const debateTeams = teams.filter(
				(team: Team) => team.category === "debate"
			);
			setTeams({
				football: footballTeams,
				basketball: basketballTeams,
				volleyball: volleyballTeams,
				pingpong: pingpongTeams,
				debate: debateTeams,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const getPlayers = async () => {
		try {
			const teamPlayers = await sanityClient.fetch(AllPlayersStatsQuery);
			const footballTeamPlayers = teamPlayers.filter(
				(player: Team) => player.category === "football"
			);
			const basketballTeamPlayers = teamPlayers.filter(
				(player: Team) => player.category === "basketball"
			);
			const pingpongTeamPlayers = teamPlayers.filter(
				(player: Team) => player.category === "pingpong"
			);
			const debateTeamPlayers = teamPlayers.filter(
				(player: Team) => player.category === "debate"
			);
			const volleyballTeamPlayers = teamPlayers.filter(
				(player: Team) => player.category === "volleyball"
			);
			const footballPlayers = footballTeamPlayers
				.map((team: Team) => team.players)
				.flat();
			const basketballPlayers = basketballTeamPlayers
				.map((team: Team) => team.players)
				.flat();

			setPlayers({
				...players,
				football: footballPlayers,
				basketball: basketballPlayers,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMatches();
		getTeams();
	}, []);

	return (
		<AppContext.Provider
			value={{
				players,
				setPlayers,
				matches,
				setMatches,
				getMatches,
				teams,
				setTeams,
				getPlayers,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
