import { createContext, ReactNode, useContext, useState } from "react";
import { Player } from "../utils/types/types1";

export type AppContextType =
	| {
			players?: Player[];
            setPlayers?: React.Dispatch<React.SetStateAction<Player[]>>;
	  }
	| {};

export const AppContext = createContext<AppContextType>({});
export const useApp = () => useContext(AppContext);

type Props = {
	children: ReactNode;
};

export default function AppProvider({ children }: Props) {
	const [players, setPlayers] = useState<Player[]>();

	return (
		<AppContext.Provider value={{ players, setPlayers }}>{children}</AppContext.Provider>
	);
}
