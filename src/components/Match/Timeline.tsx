import Image from "next/image";
import React from "react";
import { BiFootball } from "react-icons/bi";
import { MdHeadphones } from "react-icons/md";
import { TbArrowsUpDown } from "react-icons/tb";
import { timelist, TimeType } from "../../utils/data/other";

type Props = {
	timeline: any;
	isBasketball: boolean;
};

const Timeline = (props: Props) => {
	if (props.isBasketball)
		return <div className=' text-center'>Not Available</div>;
	return (
		<div className='flex flex-col gap-y-3 w-4/5 mx-auto border-[1px] border-gray p-3 shadow-md'>
			{timelist.map((time: TimeType) => (
				<TimeCard {...time} />
			))}
		</div>
	);
};

export default Timeline;

const TimeCard = (props: TimeType) => {
	return (
		<div className='flex flex-col p-2 rounded-md border-2 border-gray'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					{props.type === "Goal" && <BiFootball className='text-xl' />}
					{props.type === "Substitution" && (
						<TbArrowsUpDown className='text-xl' />
					)}
					{props.type === "Commentry" && <MdHeadphones className='text-xl' />}
					<p className='text-sm font-semibold'>Commentary</p>
				</div>
				<p className='text-sm font-semibold'>1:00</p>
			</div>
			{props.type === "Goal" && (
				<div className='flex flex-col bg-orange text-white py-4 w-full items-center'>
					<BiFootball size={40} />
					<p className='text-4xl uppercase font-semibold'>Goooaaalll!!!</p>
					<p className='font-semibold'>Dabagire Valens</p>
				</div>
			)}
			{props.image && (
				<Image src={props.image} alt={props.image} height={314} width={500} />
			)}
			<p>{props.comment}</p>
		</div>
	);
};
