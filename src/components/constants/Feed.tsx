import React from "react";
import Image from "next/image";

const Feed = () => {
	return (
		<div className='flex-col gap-y-3 lg:flex hidden'>
			<h1 className=' text-center font-semibold'>🔥 Trending</h1>
			<div className='w-[250px] float-right  border-2 border-gray h-[250px] rounded-md relative top-0 aspect-square'>
				<Image
					src={"/images/feedImage.png"}
					alt={"match feed"}
					width={250}
					height={50}
				/>
				<p className='font-md font-sans text-coolGray-500 text-left p-2 text-sm'>
					The so-called year11 kids surprise their opponents with a draw at their first official match and Welding dissapoints.
				</p>
			</div>
		</div>
	);
};

export default Feed;
