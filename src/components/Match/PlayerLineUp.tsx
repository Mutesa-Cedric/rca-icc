import React from "react";
import { LineUpType } from "./LineUps";

type Props = {
	awayLineUp: LineUpType;
	homeLineUp: LineUpType;
};

const PlayerLineUp = ({ awayLineUp, homeLineUp }: Props) => {
	const homeDefenders = homeLineUp.eleven.filter((player) =>
		player.position?.includes("defender")
	);
	const homeMidfielders = homeLineUp.eleven.filter((player) =>
		player.position?.includes("midfielder")
	);
	const homeForwards = homeLineUp.eleven.filter((player) =>
		player.position?.includes("forward")
	);
	const awayDefenders = awayLineUp.eleven.filter((player) =>
		player.position?.includes("defender")
	);
	const awayMidfielders = awayLineUp.eleven.filter((player) =>
		player.position?.includes("midfielder")
	);
	const awayForwards = awayLineUp.eleven.filter((player) =>
		player.position?.includes("forward")
	);
	const homeGoalkeeper = homeLineUp.eleven.find((player) =>
		player.position?.includes("goalkeeper")
	);
	const awayGoalkeeper = awayLineUp.eleven.find((player) =>
		player.position?.includes("goalkeeper")
	);
	return (
		<>
			<div className='h-1/2 w-full flex-col flex p-2 justify-between'>
				<div className='flex items-center justify-center'>
					<Player
						name='Player 1'
						color={`#ff7b35`}
						{...homeGoalkeeper}
						id='1'
					/>
				</div>
				<div className={`grid grid-cols-${homeDefenders.length} w-full`}>
					{homeDefenders.map((player, i) => (
						<Player name='Player 2' color={`#ff7b35`} {...player} id={i} />
					))}
				</div>
				<div className={`grid grid-cols-${homeMidfielders.length} w-full`}>
					{homeMidfielders.map((player, i) => (
						<Player name='Player 6' color={`#ff7b35`} {...player} id={i} />
					))}
				</div>
				<div className={`grid grid-cols-${homeForwards.length} w-full`}>
					{homeForwards.map((player, i) => (
						<Player name='Player 9' color={`#ff7b35`} {...player} id={i} />
					))}
				</div>
			</div>
			<div className='h-1/2 w-full flex-col-reverse flex p-2 justify-between'>
				<div className='flex items-center justify-center'>
					<Player name='Player 1' color={`#000`} number='1' />
				</div>
				<div className='grid grid-cols-4 w-full'>
					<Player name='Player 2' color={`#000`} number='2' />
					<Player name='Player 3' color={`#000`} number='3' />
					<Player name='Player 4' color={`#000`} number='4' />
					<Player name='Player 5' color={`#000`} number='5' />
				</div>
				<div className='grid grid-cols-3 w-full'>
					<Player name='Player 6' color={`#000`} number='6' />
					<Player name='Player 7' color={`#000`} number='7' />
					<Player name='Player 8' color={`#000`} number='8' />
				</div>
				<div className='grid grid-cols-3 w-full'>
					<Player name='Player 9' color={`#000`} number='9' />
					<Player name='Player 10' color={`#000`} number='10' />
					<Player name='Player 11' color={`#000`} number='11' />
				</div>
			</div>
		</>
	);
};

export default PlayerLineUp;

const Player = ({ name, number, color, id, displayName }: any) => (
	<div className='flex flex-col items-center text-white mx-auto z-10 cursor-pointer'>
		<span
			style={{
				backgroundColor: color,
			}}
			className={`border-2 border-white w-11 aspect-square rounded-full flex items-center justify-center p-2`}
		>
			<span className=''>{number??id+1}</span>
		</span>
		<span className=''>{displayName}</span>
	</div>
);
