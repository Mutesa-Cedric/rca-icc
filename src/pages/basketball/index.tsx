import Link from 'next/link';
import BasketTable from '../../components/constants/BasketTable';
import Table from '../../components/constants/Table';
import MatchCard from '../../components/MatchCard';
import { useApp } from '../../contexts/AppProvider';
import MainLayout from '../../layouts/MainLayout'

const IndexBasket = () => {
	const { teams, matches } = useApp();
	const unfinishedMatches = matches?.filter(
		(match) => match.status?.status !== "FT" && match.category === "basketball"
	);
	const upComingMatches = unfinishedMatches?.slice(0, 5);
  return (
		<MainLayout title='Baskeball'>
			<div className='flex flex-col w-full gap-y-3'>
				{/* <div className='flex w-full flex-col mx-auto max-w-[800px]'>
				<LiveGameCard path='/match/23' />
			</div> */}
				<div className='flex flex-col border-2 rounded-md p-2 border-gray'>
					<div className='p-3 gap-y-3'>
						<div className='float-left font-bold text-lg px-3'>
							<h3>Basketball Standings</h3>
						</div>
						<BasketTable teams={teams?.basketball!} />
					</div>
				</div>
				<div className='flex flex-col border-2 rounded-md p-2 border-gray'>
					<h1 className='text-xl font-semibold'>Upcoming Matches</h1>
					<div className='flex w-full mt-4 flex-wrap gap-2'>
						{upComingMatches?.map((match, i) => (
							<MatchCard key={match._id} {...match} />
						))}
					</div>
					{upComingMatches?.length === 0 && (
						<h1 className=''>No Matches Available</h1>
					)}
					<Link
						href={"/football/fixtures"}
						className='w-fit mt-4 px-3 py-2 text-blue flex items-center hover:text-[#1a44da] duration-300 rounded-md'
					>
						See All Fixtures<span className='ml-2 mt-1'>{">>"}</span>
					</Link>
				</div>
			</div>
		</MainLayout>
	);
}

export default IndexBasket;