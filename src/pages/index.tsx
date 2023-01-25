import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { BiFootball } from 'react-icons/bi';
import MatchCard from '../components/MatchCard';
import MainLayout from '../layouts/MainLayout'
import { competitions } from '../utils/data/other';

const Home: NextPage = () => {
  return (
		<MainLayout title='ICC - Home' isGeneral>
			<main className='flex w-full flex-1 flex-col p-2 gap-y-3'>
				<div className='flex flex-col border-2 rounded-md p-2 border-gray'>
					<h1 className='text-lg font-semibold'>RCA Interclasses Are Back</h1>
					<div className='flex w-full mt-4 gap-x-3'>
						<div className='flex flex-col justify-between h-full'>
							<p className=''>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
								provident saepe consequatur sunt possimus iusto similique
								voluptatem eum! Suscipit harum cupiditate voluptatum facilis
								totam. Neque debitis perspiciatis laborum porro sit?
							</p>
							<button className='w-fit mt-4 px-3 py-2 text-blue flex items-center hover:text-[#1a44da] duration-300 rounded-md'>
								See live matches <span className='ml-2 mt-1'>{">>"}</span>
							</button>
						</div>
						<Image
							src={"/images/interclass.png"}
							alt=''
							className=' object-cover aspect-video'
							height={250}
							width={500}
						/>
					</div>
				</div>
				<div className='flex flex-col border-2 rounded-md p-2 border-gray'>
					<h1 className='text-xl font-semibold'>Upcoming Matches</h1>
					<div className='flex w-full mt-4'>
						<MatchCard />
					</div>
					<Link
						href={"/football/fixtures"}
						className='w-fit mt-4 px-3 py-2 text-blue flex items-center hover:text-[#1a44da] duration-300 rounded-md'
					>
						See All Fixtures<span className='ml-2 mt-1'>{">>"}</span>
					</Link>
				</div>
				<div className='flex flex-col border-2 rounded-md p-2 border-gray'>
					<h1 className='text-xl font-semibold'>Competitions</h1>
					<div className='flex w-full mt-4 flex-wrap gap-3'>
						{competitions.map((comp, i) => (
							<Link href={`/${comp.name}`} key={comp.id} className=' border-2 items-center w-full max-w-[250px] gap-3 border-gray flex flex-col gap-y-3 p-3'>
								{comp.icon}
								<h1 className='font-semibold capitalize'>{comp.name}</h1>
							</Link>
						))}
					</div>
					<Link
						href={"/football/fixtures"}
						className='w-fit mt-4 px-3 py-2 text-blue flex items-center hover:text-[#1a44da] duration-300 rounded-md'
					>
						See All Fixtures<span className='ml-2 mt-1'>{">>"}</span>
					</Link>
				</div>
			</main>
		</MainLayout>
	);
}

export default Home;
