import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import LineUps from "../../components/Match/LineUps";
import Stats from "../../components/Match/Stats";
import Timeline from "../../components/Match/Timeline";
import { useApp } from "../../contexts/AppProvider";
import MainLayout from "../../layouts/MainLayout";
import { fetchMatchByIdQuery } from "../../lib/queries";
import { sanityClient } from "../../lib/sanity";
import statistics from "../../utils/data/stats.json";
import { Match } from "../../utils/types/types1";

const MatchPage = () => {
	const [match, setMatch] = useState<Match | null>(null);
	const [active, setActive] = useState("stats");
	const router = useRouter();
	const { id } = router.query;

	const today = new Date();
	const dateMatch = new Date(match?.date ?? "");
	const isToday =
		dateMatch.getDate() === today.getDate() &&
		dateMatch.getMonth() === today.getMonth() &&
		dateMatch.getFullYear() === today.getFullYear();

	const hasStarted = match?.status?.status ?? null !== "NS";

	const getMatch = async () => {
		const match = await sanityClient.fetch(fetchMatchByIdQuery(id as string));
		setMatch(match);
	};

	useEffect(() => {
		if (id) {
			getMatch();
		}
	}, [id]);

	return (
		<MainLayout isGeneral>
			<div
				className={`flex px-2 flex-col tablet:w-4/5 max-w-[1000px] w-full shadow-md mx-auto`}
			>
				<div className='flex px-3 items-center justify-between w-full'>
					<p className='text-violet-400'>
						<span className=' cursor-pointer'>{match?.category}</span>
						<span className={`ml-2`}>
							{isToday ? (
								"Today"
							) : (
								<Moment format='DD MMM'>{match?.date}</Moment>
							)}
						</span>
					</p>
					<p>{match?.status?.status}</p>
				</div>
				<div className='flex px-4 py-4 max-w-[800px] w-full justify-between mx-auto mt-4'>
					<div className='flex gap-3 align-middle text-center flex-col'>
						<div className='flex items-center gap-x-2'>
							<Image
								src={"/images/teamImage.svg"}
								alt='team1'
								width={30}
								height={20}
							/>
							<p className='text-md text-slate-700'>Y1</p>
						</div>
						{!hasStarted && (
							<div className='flex flex-col gap-y-1'>
								<div className=' gap-x-2'>
									<span className='text-md font-bold text-sm'>34'</span>
									<span className='text-slate p-2 text-sm'>Jonas</span>
								</div>
							</div>
						)}
					</div>
					<div className='flex flex-col gap-y-3 items-center'>
						{!hasStarted ? (
							<>
								<div className='flex items-center gap-x-4'>
									<span className='text-center align-middle text-2xl'>1</span>
									<span className=' text-sm text-slate-500 '>VS</span>
									<span className='text-center align-middle text-2xl'>3</span>
								</div>
								<span className=''>45'</span>
							</>
						) : (
							<span className=' text-sm text-slate-500 '>VS</span>
						)}
					</div>
					<div className='flex gap-3 align-middle text-center flex-col'>
						<div className='flex items-center gap-x-2'>
							<p className='text-md text-slate-700'>TVET</p>
							<Image
								src={"/images/teamImage2.svg"}
								alt='team1'
								width={30}
								height={20}
							/>
						</div>
						{!hasStarted && (
							<div className='flex flex-col gap-y-1'>
								<div className='gap-x-2 flex'>
									<span className='text-slate text-sm'>Charles</span>
									<span className='text-md font-bold text-sm'>50'</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='flex w-full overflow-x-auto shadow-md'>
					<div className='w-full border-t-[1px] border-gray grid auto-cols-fr grid-flow-col mt-3 items-center shadow-md min-w-[350px]'>
						<p
							onClick={() => setActive("timeline")}
							className={`px-6 py-2 hover:bg-slate-300/30 active:bg-slate-300/30 duration-300 cursor-pointer text-center ${
								active === "timeline" && "border-b-2  border-orange"
							}`}
						>
							TIMELINE
						</p>
						<p
							onClick={() => setActive("lineups")}
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "lineups" && "border-b-2  border-orange"
							}`}
						>
							LINEUPS
						</p>
						<p
							onClick={() => setActive("stats")}
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "stats" && "border-b-2  border-orange"
							}`}
						>
							STATS
						</p>
						<p
							onClick={() => setActive("trendings")}
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "trendings" && "border-b-2  border-orange"
							}`}
						>
							TRENDINGS
						</p>
					</div>
				</div>
				<div className='flex flex-col w-full py-3 '>
					{!match || !hasStarted ? (
						active === "stats" ? (
							<Stats statistics={statistics.statistics} />
						) : active === "lineups" ? (
							<LineUps
								lineups={[
									match?.stats?.homeTeamLineup,
									match?.stats.awayTeamLineup,
								]}
							/>
						) : (
							<Timeline timeline={match?.events} />
						)
					) : (
						<div className='flex flex-col items-center justify-center h-[300px]'>
							<p className='text-xl text-slate-700 opacity-75'>
								Match not started yet
							</p>
						</div>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

export default MatchPage;
