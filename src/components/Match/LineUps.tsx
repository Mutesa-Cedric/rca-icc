import Image from "next/image";
import React, { useEffect } from "react";
import { LineUp, Match, Player, Team } from "../../utils/types/types1";
import PlayerLineUp from "./PlayerLineUp";

type Props = {
	lineups: [LineUp, LineUp];
	homeTeam: Team;
	awayTeam: Team;
	isBasketball: boolean;
};

export type LineUpType = {
	eleven: Player[];
	subs: Player[];
};

const LineUps = (props: Props) => {
	const [homeLineUps, setHomeLineUps] = React.useState<LineUpType>({
		eleven: [],
		subs: [],
	});
	const [awayLineUps, setAwayLineUps] = React.useState<LineUpType>({
		eleven: [],
		subs: [],
	});
	if (props.isBasketball)
		return <div className=' text-center'>Not Available</div>;

	const homePlayers = props.homeTeam.players;
	const awayPlayers = props.awayTeam.players;
	const awayLineUp = props.lineups[1];
	const homeLineUp = props.lineups[0];

	useEffect(() => {
		console.log(awayLineUp, homeLineUp);
		
		// get starting eleven
		awayLineUp.startingEleven.map((player, i) => {
			const foundPlayer = awayPlayers.find((p) => p._id === player._ref);
			if (foundPlayer)
				setAwayLineUps((prev) => ({
					...prev,
					eleven: [...prev.eleven, foundPlayer],
				}));
		});

		homeLineUp.startingEleven.map((player) => {
			const foundPlayer = homePlayers.find((p) => p._id === player._ref);
			if (foundPlayer)
				setHomeLineUps((prev) => ({
					...prev,
					eleven: [...prev.eleven, foundPlayer],
				}));
			else
				setHomeLineUps((prev) => ({
					...prev,
					eleven: [...prev.eleven, { name: "Dummy", number: 1 } as any],
				}));
		});

		// get subs
		const homeSubs = homePlayers.filter(
			(player) => !homeLineUp.startingEleven.find((p) => p._ref === player._id)
		);
		const awaySubs = awayPlayers.filter(
			(player) => !awayLineUp.startingEleven.find((p) => p._ref === player._id)
		);
		setHomeLineUps((prev) => ({
			...prev,
			subs: homeSubs,
		}));
		setAwayLineUps((prev) => ({
			...prev,
			subs: awaySubs,
		}));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className=' w-full flex flex-col'>
			<div className='flex flex-col w-4/5 mx-auto bg-green-600 px-1'>
				<div className='flex items-center justify-between text-white bg-black/20 p-2 shadow-md'>
					<h1>Y1</h1>
					<h1>4-3-3</h1>
				</div>
				<div className='relative h-[120vh] w-full border-2 border-white'>
					<PlayerLineUp homeLineUp={homeLineUps} awayLineUp={awayLineUps} />
					<div className=' absolute border-white top-0 w-3/5 h-1/4 border-2 left-1/2 -translate-x-1/2 border-t-0'>
						<div className=' absolute border-white top-0 w-3/5 h-2/5 border-2  left-1/2 -translate-x-1/2 border-t-0'></div>
					</div>
					<hr className='absolute top-1/2 -translate-y-1/2 h-[2px] outline-none border-none bg-white w-full' />
					<div className=' absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/4 aspect-square rounded-full border-2 border-white'></div>
					<div className=' absolute border-white bottom-0 rotate-180 w-3/5 h-1/4 border-2 left-1/2 -translate-x-1/2 border-t-0'>
						<div className=' absolute border-white top-0 w-3/5 h-2/5 border-2  left-1/2 -translate-x-1/2 border-t-0'></div>
					</div>
				</div>
				<div className='flex items-center justify-between text-white bg-black/20 p-2 shadow-md'>
					<h1>TVET</h1>
					<h1>4-3-3</h1>
				</div>
			</div>
			<div className='flex flex-col w-4/5 mx-auto py-4'>
				<div className='flex w-full items-center justify-between'>
					<Image
						src={"/images/teamImage.svg"}
						alt='team1'
						width={30}
						height={20}
					/>
					<span className=' uppercase'>SUBSTITUTEs</span>
					<Image
						src={"/images/teamImage2.svg"}
						alt='team1'
						width={30}
						height={20}
					/>
				</div>
			</div>
		</div>
	);
};

export default LineUps;
