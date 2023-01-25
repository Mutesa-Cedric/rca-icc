import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Match } from "../utils/types/types1";
import Moment from "react-moment";

const MatchCard = ({
	awayTeam,
	homeTeam,
	stats,
	status,
	date,
	_id,
	category,
}: Match) => {
	const isFinished = status?.status === "FT";
	const isBasketball = category === "basketball";

	const awayScore = isBasketball
		? stats?.awayTeamStats?.points
		: stats?.awayTeamStats?.goals;
	const homeScore = isBasketball
		? stats?.homeTeamStats?.points
		: stats?.homeTeamStats?.goals;

	return (
		<Link
			href={`/match/${_id}`}
			className='flex border-2 border-gray max-w-[300px] w-full h-[120px] rounded-md hover:bg-slate-100 duration-300 cursor-pointer'
		>
			<div className='lg:p-6 p-3 flex justify-center w-full gap-y-2 flex-col'>
				<div className='flex gap-2 text-center'>
					<Image
						src={homeTeam?.logo ?? "/images/teamImage.svg"}
						width={20}
						height={10}
						alt={""}
					/>
					<p className='text-slate text-sm text-start font-bold'>
						{homeTeam?.name}
					</p>
				</div>
				<div className='flex gap-2 text-center'>
					<Image
						src={awayTeam?.logo ?? "/images/teamImage2.svg"}
						width={20}
						height={10}
						alt={""}
					/>
					<p className='text-slate text-sm text-start font-bold'>
						{awayTeam?.name}
					</p>
				</div>
			</div>
			{isFinished && (
				<div className='flex flex-col justify-center gap-y-2 px-1 items-center'>
					<span className='text-slate text-sm text-white p-1 px-2 bg-orange font-bold'>
						{homeScore}
					</span>
					<span className='text-slate text-sm text-white p-1 px-2 bg-black font-bold'>
						{awayScore}
					</span>
				</div>
			)}
			<span className='w-[1px] h-[80%] bg-gray mt-2'></span>
			{isFinished ? (
				<div className=' p-3 px-1 min-w-[80px] flex flex-col items-center justify-center'>
					<span className=' text-center'>FT</span>
					<span className='text-xs font-bold text-center'>
						<Moment format='MMM Do YYYY'>{date}</Moment>
					</span>
				</div>
			) : (
				<div className=' p-3 px-1 min-w-[100px] flex flex-col gap-y-2 justify-center'>
					<p className='text-xs font-bold text-center'>
						<Moment format='MMM Do YYYY'>{date}</Moment>
					</p>
					<span className=' text-sm text-center'>
						<Moment format='LT'>{date}</Moment>
					</span>
				</div>
			)}
		</Link>
	);
};

export default MatchCard;
