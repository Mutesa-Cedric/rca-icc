import React from "react";
import Image from "next/image";
import { BiFootball } from "react-icons/bi";
import { Team } from "../../utils/types/types1";

const TeamCard = ({ _id, name, category, logo }: Team) => {
	return (
		<div className='flex max-w-[300px] justify-between mx-auto cursor-pointer w-full items-center gap-x-2 h-[100px] rounded-md border-2 border-gray p-4 hover:bg-slate-100 duration-500 g-4 m-2'>
			<div className='flex items-center gap-x-3'>
				<Image
					src={logo || "/images/teamImage2.svg"}
					width={40}
					height={10}
					alt=''
				/>
				<div className='flex flex-col'>
					<p className='text-slate font-bold '>{name}</p>
					<span className='text-sm text-slate-500 capitalize'>{category}</span>
				</div>
			</div>
			<BiFootball className='text-2xl text-center' />
		</div>
	);
};

export default TeamCard;
