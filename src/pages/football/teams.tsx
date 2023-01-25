import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import TeamCard from '../../components/constants/TeamCard'
import { GetStaticProps } from 'next';
import { teamsFootQuery } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';
import { Team } from '../../utils/types/types1';

const TeamsIndex = ({teams}: {teams: Team[]}) => {
  return (
		<MainLayout>
			<h1 className=' text-lg font-semibold px-3'>Football Teams</h1>
			<div className='w-full h-fit grid desktop:flex flex-wrap desktop:gap-1 gap-3 md:grid-cols-2'>
				{teams.map((team) => (
					<TeamCard key={team._id} {...team} />
				))}
			</div>
		</MainLayout>
	);
}

export default TeamsIndex

export const getStaticProps: GetStaticProps = async () => {
	const teams = await sanityClient.fetch(teamsFootQuery);
	console.log(teams);
	
	return {
		props: {
			teams: teams,
		},
		revalidate: 20,
	};
};
