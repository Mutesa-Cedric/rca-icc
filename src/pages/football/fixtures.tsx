import { useRouter } from 'next/router';
import React, { useState } from 'react'
import MatchCard from '../../components/MatchCard';
import MainLayout from '../../layouts/MainLayout'
import { capitalize } from '../../utils/funcs';
import { useApp } from "../../contexts/AppProvider";

const Fixtures = () => {
	const { getMatches, matches } = useApp();
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(false);

	const unfinishedMatches = matches?.filter(
		(match) => match.status?.status !== "FT"
	);

    const router = useRouter();
    const title =
			capitalize(router.pathname.split("/")[2]) +
			" - " +
			capitalize(router.pathname.split("/")[1]);
  return (
		<MainLayout title={title}>
			<h1 className='my-2 font-semibold'>Today</h1>
			<div className='grid desktop:grid-cols-3 md:grid-cols-2 gap-3'>
			{unfinishedMatches?.map((match, i) => (
							<MatchCard key={match._id} {...match} />
						))}
			</div>
		</MainLayout>
	);
}

export default Fixtures