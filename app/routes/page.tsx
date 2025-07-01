"use client"

import { HiMiniBars3 } from 'react-icons/hi2'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function RoutePage() {
    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white flex justify-center items-center'>
            <div className='w-3/4 h-full flex flex-col items-center gap-y-2'>
                <div className='h-11/12 w-3/4 pt-8 pb-4'>
                    <Map />
                </div>
                <div className='flex justify-center items-end mb-8 w-full h-fit'>
                    <HiMiniBars3 className='bg-blue-500 rounded-lg h-8 w-8 p-1.5' />
                </div>
            </div>
        </div>
    );
}
