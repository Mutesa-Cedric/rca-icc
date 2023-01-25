import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchMatchesQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";
import { Match, Player } from "../utils/types/types1";

export type AppContextType ={
			players?: Player[];
			setPlayers?: React.Dispatch<React.SetStateAction<Player[]>>;
			matches?: Match[];
			setMatches?: React.Dispatch<React.SetStateAction<Match[]>>;
			getMatches?: () => void;
	  }

export const AppContext = createContext<AppContextType>({});
export const useApp = () => useContext(AppContext);

type Props = {
	children: ReactNode;
};

export default function AppProvider({ children }: Props) {
	const [players, setPlayers] = useState<Player[]>([]);
	const [matches, setMatches] = useState<Match[]>([]);

	const getMatches = async () => {
		try {
			const res = await sanityClient.fetch(fetchMatchesQuery);
			console.log(res);
			setMatches(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMatches();
	}, []);

	return (
		<AppContext.Provider value={{ players, setPlayers, matches, setMatches, getMatches }}>
			{children}
		</AppContext.Provider>
	);
}
