import Image from "next/image";
import React from "react";
import { Match, Team } from "../../utils/types/types1";

type Props = {
	stats: Match["stats"];
	teams: Team[];
};

const Stats = ({ stats, teams }: Props) => {
	if (!stats) return <div className=' text-center'>No Stats Available</div>;

	const awayStat = Object.entries(stats?.awayTeamStats);
	const homeStat = Object.entries(stats?.homeTeamStats);
	const statsNames = awayStat.map((stat) => stat[0]);

	console.log(awayStat, homeStat[1]);

	return (
		<div className='p-5 flex flex-col'>
			<div className='flex items-center justify-between'>
				<Image
					height={40}
					width={40}
					className='w-[30px]'
					src={teams[0].logo ?? "/images/teamImage.svg"}
					alt=''
				/>
				<p>TEAM STATS</p>
				<Image
					height={40}
					width={40}
					className='w-[30px]'
					src={teams[1].logo ?? "/images/teamImage2.svg"}
					alt=''
				/>
			</div>
			{new Array(statsNames.length - 1).fill(0).map((_, i: number) => (
				<RowStat
					key={i}
					left={homeStat[i + 1][1]}
					right={awayStat[i + 1][1]}
					stat={statsNames[i + 1]}
				/>
			))}
		</div>
	);
};

export default Stats;

const RowStat = ({ left, stat, right }: any) => {
	if (left === null || right === null) return null;

	let l = left;
	let r = right;
	if (stat === "possession") {
		l = `${left}%`;
		r = `${right}%`;
	}
	return (
		<div className='w-full mt-4 flex items-center justify-between'>
			<p>{l}</p>
			<p className=' capitalize'>{stat}</p>
			<p>{r}</p>
		</div>
	);
};
