import { GetStaticProps } from 'next';
import React from 'react'
import Table from '../../components/constants/Table';
import MainLayout from '../../layouts/MainLayout'
import { teamsStatsFootQuery } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';
import { Team } from '../../utils/types/types1';

const FootTableIndex = ({ teams }: { teams: Team[] }) => {
	return (
		<MainLayout>
			<div className='p-3 gap-y-3'>
				<div className='float-left font-bold text-lg px-3'>
					<h3>Standings</h3>
				</div>
				<Table teams={teams} />
			</div>
		</MainLayout>
	);
};

export default FootTableIndex;

export const getStaticProps: GetStaticProps = async () => {
	const teams = await sanityClient.fetch(teamsStatsFootQuery);
	return {
		props: {
			teams: teams,
		},
		revalidate: 20,
	};
};