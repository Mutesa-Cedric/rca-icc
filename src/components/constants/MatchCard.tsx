import React from 'react'
import  Image from 'next/image';
import {useState} from 'react'

const MatchCard = () => {
    const [fullTime,setFullTime]=useState(false)
  return (
    <div className={fullTime?`flex border-2 border-gray w-[350px] h-[120px] rounded-md hover:bg-slate-100 duration-300 `:`flex border-2 border-gray w-[300px] h-[120px] rounded-md hover:bg-slate-100 duration-300 `}>
        <div className='p-6 flex gap-4'>
            <div >
            <div className='flex gap-2 text-center mb-4'>
                <Image src='/images/teamImage.svg' width={20} height={10}/>
                <p className='text-slate text-sm font-bold' >Y1 Coding</p>
            </div>
            <div className='flex gap-2 text-center mb-2'>
                <Image src='/images/teamImage2.svg' width={20} height={10}/>
                <p className='text-slate text-sm font-bold' >TVET L5</p>
            </div>
            </div>
            {fullTime && (
            <div className='w-8 h-14 bg-slate-300 ' >
            <div className='w-full h-7 '>
                    <p> 2</p>
            </div>
            <div className='w-full h-7 bg-slate-500'>
                    <p>4</p>
            </div>
        </div>
        )}
           
           
        </div>
       
        
        <span className='w-[1px] h-[80%] bg-gray mt-2'></span>
        <div className={fullTime ?'p-4':'p-7'}>
            {fullTime && (
                <span className='text-sm font-bold '>FT</span>
            )}
            <p className='text-sm font-bold'>Sat 21 Jan</p>
            <span>13:10</span>
        </div>
    </div>
  )
}

export default MatchCard