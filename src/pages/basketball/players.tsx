import { GetStaticProps } from 'next';
import React from 'react'
import PlayerCard from '../../components/constants/PlayerCard';
import MainLayout from '../../layouts/MainLayout'
import { playersBaccoQuery, playersFootQuery } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';
import { Player } from '../../utils/types/types1';

type PlayerProps = {
	teamPlayers: Array<{
		_id: string;
		category: string;
		players: Player[];
		name: string;
	}>;
};

const PlayersIndex = ({ teamPlayers }: PlayerProps) => {
	return (
		<MainLayout>
			<div className='p-3 gap-y-3'>
				<h1 className='px-3 font-semibold'>Players</h1>
				{/* <div className='flex gap-3 flex-wrap w-full mt-3'>
					{players.map((player) => (
						<PlayerCard key={player._id} {...player} />
					))}
				</div> */}
				{teamPlayers.map((team) => (
					<div key={team._id}>
						<h1 className='px-3 font-semibold my-3'>{team.name}</h1>
						<div className='flex gap-3 flex-wrap w-full mt-3'>
							{team.players.map((player, i) => (
								<PlayerCard key={i} {...player} />
							))}
						</div>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default PlayersIndex

export const getStaticProps: GetStaticProps = async () => {
	const teamPlayers = await sanityClient.fetch(playersBaccoQuery);
	console.log(teamPlayers);

	return {
		props: {
			teamPlayers: teamPlayers,
		},
		revalidate: 20,
	};
};