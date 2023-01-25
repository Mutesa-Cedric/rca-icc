import { useRouter } from 'next/router';
import React, { useState } from 'react'
import MatchCard from '../../components/MatchCard';
import MainLayout from '../../layouts/MainLayout'
import { capitalize } from '../../utils/funcs';

const Fixtures = () => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const title =
			capitalize(router.pathname.split("/")[2]) +
			" - " +
			capitalize(router.pathname.split("/")[1]);
			
  return (
		<MainLayout title={title}>
			<h1 className='my-2 font-semibold'>Today</h1>
			<div className='grid desktop:grid-cols-3 md:grid-cols-2 gap-3'>
				<MatchCard />
				<MatchCard />
				<MatchCard />
				<MatchCard />
				<MatchCard />
			</div>
		</MainLayout>
	);
}

export default Fixtures