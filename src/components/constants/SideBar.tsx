import Image from "next/image";
import React from "react";

const SideBar = () => {
	return (
		<div className=' tab:flex hidden flex-col h-full max-w-[300px] w-1/4 gap-y-4 overflow-y-auto min-w-[200px]'>
			<input
				placeholder='Search...'
				className=' outline-none border-divBack border-2 rounded-md px-4  py-2 focus:border-orange duration-300 w-full'
				type='text'
			/>
			<div className='flex flex-col w-full gap-y-3'>
				<span className='px-2'>Live matches</span>
				<div className='flex items-center justify-between bg-whiteblue border-2 p-2 rounded-md border-divBack cursor-pointer'>
					<div className='flex gap-x-2 items-start'>
						<Image src='/images/teamlogo.svg' height={20} width={20} alt='' />
						<span>Y1</span>
					</div>
					<span className=' text-xs'>vs</span>
					<div className='flex gap-x-2 items-start'>
						<span>Y2</span>
						<Image src='/images/teamlogo.svg' height={20} width={20} alt='' />
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-y-2'>
				<span className='px-2'>Fixtures</span>
				<div className='flex flex-col py-5 rounded-md  border-divBack border-2'>
					{new Array(6).fill(0).map((v, i) => (
						<span
							className=' w-full p-2 hover:bg-orange/20 duration-300 cursor-pointer rounded-md'
							 key={i}
						>
							Matchday {i + 1}
						</span>
					))}
				</div>
			</div>
			{/* <div className='flex flex-col gap-y-2'>
				<span className='px-2'>Teams</span>
				<div className='flex flex-col p-3 py-5 rounded-md gap-y-2 border-divBack border-2'>
					{new Array(6).fill(0).map((v, i) => (
						<div key={i} className='flex items-center gap-x-2'>
							<Image src='/images/teamlogo.svg' height={10} width={10} alt='' />
							<span>Matchday {i + 1}</span>
						</div>
					))}
				</div>
			</div> */}
		</div>
	);
};

export default SideBar;
