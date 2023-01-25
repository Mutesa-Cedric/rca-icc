import React from 'react'
import LiveGameCard from '../../components/constants/LiveGameCard';
import MatchCard from '../../components/MatchCard';
import MainLayout from '../../layouts/MainLayout'

const IndexFootball = () => {
  return (
		<MainLayout title='Football'>
			<div className='flex w-full flex-col mx-auto max-w-[800px]'>
				<LiveGameCard />
				<div className='w-full h-fit p-4 mt-4 border-2 border-gray rounded-md'>
					<h3 className='text-slate-700 font-bold pb-4'>Upcoming Events</h3>
					<div className='flex flex-wrap p-2 grid grid-cols-2 gap-4'>

						<MatchCard/>
						<MatchCard/>
						<MatchCard/>
						<MatchCard/>
						<a  href={'football/fixtures'}className='  text-blue cursor-pointer'>
							see all >>
						</a>

					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default IndexFootball