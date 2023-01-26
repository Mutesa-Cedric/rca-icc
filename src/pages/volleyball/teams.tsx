import React from "react";
import TeamCard from "../../components/constants/TeamCard";
import { useApp } from "../../contexts/AppProvider";
import MainLayout from "../../layouts/MainLayout";

const TeamsIndex = () => {
	const { teams } = useApp();
	return (
		<MainLayout>
			<h1 className=' text-lg font-semibold px-3'>VolleyBall Teams</h1>
			<div className='w-full h-fit grid desktop:flex flex-wrap desktop:gap-1 gap-3 md:grid-cols-2'>
				{teams?.volleyball.map((team) => (
					<TeamCard key={team._id} {...team} />
				))}
				{teams?.volleyball.length === 0 && (
					<div className='flex justify-center items-center w-full h-full'>
						<h1 className='text-lg font-semibold'>No Teams</h1>
					</div>
				)}
			</div>
		</MainLayout>
	);
};

export default TeamsIndex;
