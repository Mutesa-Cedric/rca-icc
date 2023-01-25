import React from "react";
import Moment from "react-moment";

const Header = () => {
	return (
		<div className='w-full flex text-lg text-bold font-bold mb-2 justify-between h-[60px] items-center'>
			<div className=' text-center gap-x-1 flex items-center'>
				<p className='text-white font-sans bg-blue rounded-md px-3 py-1'>ICC</p>
				<p className='ml-1'>2023</p>
			</div>

			<span className=' text-grey font-normal truncate text-base'>
				<Moment format='DD MMMM YYYY'>{Date.now()}</Moment>
			</span>
		</div>
	);
};

export default Header;
