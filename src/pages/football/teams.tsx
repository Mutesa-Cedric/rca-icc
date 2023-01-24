import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import TeamCard from '../../components/constants/TeamCard'
import { GetStaticProps } from 'next';
import { teamsFootQuery } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';

const TeamsIndex = ({teams}) => {
  return (
		<MainLayout>
			<div className='w-full h-fit flex-wrap flex  '>
			{teams.map(team=> <TeamCard key={team._id}/>)}
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
