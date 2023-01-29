import React from "react";
import Image from "next/image";

const Feed = () => {
	return (
		<div className='flex-col gap-y-3 lg:flex hidden'>
			<h1 className=' text-center font-semibold'>Insights</h1>
			<div className='w-[250px] float-right  border-2 border-gray h-[250px] rounded-md relative top-0 aspect-square'>
				<Image
					src={"https://cdn.sanity.io/images/lxeru4rg/production/affa58f141f37bf3e08e91821c235f9742977b06-2104x2630.jpg"}
					alt={"match feed"}
					className=" aspect-video object-cover h-full"
					width={250}
					height={50}
				/>
				<h1 className="font-semibold text-center">Hattrick Hero</h1>
				<p className='font-md font-sans text-coolGray-500 text-left p-2 text-sm'>
					Ishimwe Anglebert (Makaveli) becomes the first player to score a hat-trick in the history of the Rca Interclass competition.
				</p>
			</div>
		</div>
	);
};

export default Feed;
