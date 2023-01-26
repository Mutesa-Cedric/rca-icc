import { useRouter } from "next/router";
import React from "react";
import MatchCard from "../../components/MatchCard";
import MainLayout from "../../layouts/MainLayout";
import { fetchMatchDayTitleQuery } from "../../lib/query1";
import { sanityClient } from "../../lib/sanity";
import { MatchDayType } from "../../utils/types/types2";

const Matchday = () => {
	const [matchday, setMatchday] = React.useState<MatchDayType | null>(null);
	const router = useRouter();
	const { title } = router.query;

	const getMatchday = async () => {
		try {
			const matchday = await sanityClient.fetch(
				fetchMatchDayTitleQuery(title as string)
			);
			console.log(title, matchday);

			setMatchday(matchday[0]);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		if (title) getMatchday();
	}, [title]);
	return (
		<MainLayout isGeneral>
			<div className={`flex px-2 flex-col  w-full `}>
				<h1 className=' capitalize text-lg font=semibold'>{title}</h1>
				<div className='flex w-full mt-4 flex-wrap gap-2'>
					{matchday?.matches?.map((match, i) => (
						<MatchCard key={match._id} {...match} />
					))}
					{matchday?.matches?.length === 0 && (
						<h1 className=''>No Matches Available</h1>
					)}
					{(matchday === null || matchday === undefined) && (
						<h1 className=''>No Matches Available</h1>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

export default Matchday;
