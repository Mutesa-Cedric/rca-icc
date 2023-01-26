import { GetStaticProps } from "next";
import PlayerCard from "../../components/constants/PlayerCard";
import MainLayout from "../../layouts/MainLayout";
import { playersVolleyQuery } from "../../lib/queries";
import { sanityClient } from "../../lib/sanity";
import { Player } from "../../utils/types/types1";

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
				{teamPlayers.length === 0 && (
					<div className='flex justify-center items-center w-full h-full'>
						<h1 className='text-lg font-semibold'>No Players Available</h1>
					</div>
				)}
			</div>
		</MainLayout>
	);
};

export default PlayersIndex;

export const getStaticProps: GetStaticProps = async () => {
	const teamPlayers = await sanityClient.fetch(playersVolleyQuery);
	console.log(teamPlayers);

	return {
		props: {
			teamPlayers: teamPlayers,
		},
		revalidate: 20,
	};
};
