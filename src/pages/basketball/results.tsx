import React from "react";
import MatchCard from "../../components/MatchCard";
import { useApp } from "../../contexts/AppProvider";
import MainLayout from "../../layouts/MainLayout";

const ResultsIndex = () => {
	const { matches } = useApp();
	const finishedMatches = matches?.filter(
		(match) =>
			match?.status?.status === "FT" && match?.category === "basketball"
	);
	return (
		<MainLayout title='BasketBall'>
			<div className='flex flex-col border-2 rounded-md p-2 border-gray'>
				<h1 className='text-xl font-semibold'>Latest Results</h1>
				<div className='flex w-full mt-4 flex-wrap gap-3'>
					{finishedMatches?.map((match, i) => (
						<MatchCard key={match._id} {...match} />
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default ResultsIndex;
