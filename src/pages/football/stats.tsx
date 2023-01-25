import React, { useEffect } from "react";
import Stats from "../../components/constants/Stats";
import { useApp } from "../../contexts/AppProvider";
import MainLayout from "../../layouts/MainLayout";
import { mixArray } from "../../utils/funcs";
import { Player } from "../../utils/types/types1";

const StatsIndex = () => {
	const { players, getPlayers } = useApp();

	const footPlayers: Player[] = mixArray(players?.football!);
	const withMostGoals = footPlayers?.sort(
		(a, b) => (b?.goals ?? 0) - (a?.goals ?? 0)
	);
	const withMostAssits = footPlayers?.sort(
		(a, b) => ((b.footballAssists ?? 0) - (a.footballAssists ?? 0)) as any
	);

	useEffect(() => {
		if (!players || players.football.length === 0) {
			getPlayers!();
		}
	}, []);

	if (footPlayers.length === 0)
		return (
			<MainLayout>
				<div className='flex justify-center items-center h-screen'>
					Loading...
				</div>
			</MainLayout>
		);
	console.log(withMostGoals);

	return (
		<MainLayout>
			<div className='p-3 flex flex-col w-full gap-y-2'>
				<h3 className=' px-2 font-semibold text-lg mt-5'>Goals</h3>
				{withMostGoals?.slice(0, 5)?.map((player, i) => {
					return (
						<div
							key={i}
							className='w-full border-b-2 border-gray  flex  gap-2 mt-5 justify-between'
						>
							<div className='flex items-center'>
								<span className='text-sm font-bold px-2'>{i + 1}.</span>
								<p className='text-sm font-bold'>{player.fullName}</p>
							</div>
							<div className=' bg-gray w-[30px] h-6 text-slate-700 rounded-md text-center'>
								<p className=' '>{player.goals ?? 0}</p>
							</div>
						</div>
					);
				})}
				<h3 className=' px-2 font-semibold text-lg mt-5'>Assists</h3>
				{withMostAssits?.slice(0, 5)?.map((player, i) => {
					return (
						<div
							key={i}
							className='w-full border-b-2 border-gray  flex  gap-2 mt-5 justify-between'
						>
							<div className='flex items-center'>
								<span className='text-sm font-bold px-2'>{i + 1}.</span>
								<p className='text-sm font-bold'>{player.fullName}</p>
							</div>
							<div className=' bg-gray w-[30px] h-6 text-slate-700 rounded-md text-center'>
								<p className=' '>{player.footballAssists ?? 0}</p>
							</div>
						</div>
					);
				})}
			</div>
		</MainLayout>
	);
};

export default StatsIndex;
