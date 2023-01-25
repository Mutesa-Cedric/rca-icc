import React from 'react'
import  Image from 'next/image';
import {BiFootball} from 'react-icons/bi'
import team from '../../../cms/schemas/documents/team';


const TeamCard = ({name,desc}) => {
   
  return (
    <div className='flex w-[300px] h-[100px] rounded-md border-2 border-gray p-4 hover:bg-slate-100 duration-500 g-4 m-2'>
        <Image src='/images/teamImage2.svg' width={40} height={10} alt='' />
        <div className='pl-3 pt-1'>
          <p className='text-slate font-bold '>{name}</p>
          <span className='text-sm text-slate-500 '>{desc}</span>
        </div>
        <BiFootball className='text-2xl text-center mt-4 ml-3'/>
    </div>
  )
}

export default TeamCard