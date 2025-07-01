import React from 'react'
import SearchBox from './SearchBox'
import AlertCard from './AlertCard'

export default function HomePage() {
    return (
        <div className='h-[max(100%,calc(100vh-4rem))] flex flex-col items-center text-black'>
            <div className='w-3/4 my-10'>
                <SearchBox />
                <div className='mt-8 w-full flex flex-col gap-y-8'>
                    <p className='text-2xl font-bold'>Current Alerts</p>
                    <div className='w-full flex flex-col items-center gap-y-6'>
                        <AlertCard src='/alert1.svg' />
                        <AlertCard src='/alert2.svg' />
                        <div>
                            <button className='bg-[#E8EDF5] px-4 py-2 rounded-lg font-semibold text-sm'>View All Alerts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};