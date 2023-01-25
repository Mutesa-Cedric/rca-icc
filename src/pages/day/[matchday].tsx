import React from 'react'
import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout';
import { useApp } from '../../contexts/AppProvider';
import MatchCard from '../../components/MatchCard';
import { matchdaysQuery } from '../../lib/queries';
import { MatchDay } from '../../utils/types/types1';
import { Match } from '../../utils/types/types1';
import { sanityClient } from '../../lib/sanity';
import { GetStaticProps } from 'next';
import {useState,useEffect} from 'react'



// type MatchDayProps = {
//   matchdays: Array<{
//     _id: string;
//     category:string;
//     matches: Match[];
//     title: string;
//     date:string;

//   }>;
// }


const FixturePage = () => {
  const [matchdays, setMatchdays] = useState<MatchDay | null>(null);
  const router= useRouter()
    const {matchdayname}=router.query;

  const getMatchday = async () => {
		const queryResult = await sanityClient.fetch(matchdaysQuery(matchdayname as string));
		setMatchdays(queryResult);
	};

  console.log(matchdays);
    

  //   const respectiveMatchdays = matchdays?.filter(
	// 	(matchday) => matchday?.category === 'football' 
	// );
  useEffect(() => {
		if (matchdayname) {
			getMatchday();
		}
	}, [matchdayname]);

  return (
    <MainLayout isGeneral>
       <h3 className='text-slate-700 font-bold p-6'>{matchdayname}</h3>
       {matchdays.map((matchday)=>(

        <div className='w-full h-fit grid grid-cols-3 gap-2'>
       
            {matchday.matches.map((match) =>(

                 <div >
                 
                        <MatchCard key={match._id} {...match} />
                 </div>


            ))}
           
        </div>
))}
    </MainLayout>
  )
}

export default FixturePage
