"use client"

import LatestAlert from '@/components/LatestAlert';
import SearchBox from '@/components/SearchBox';
import { latestAlerts } from '@/lib/data';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function RoutePage() {
    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white flex justify-center items-center'>
            <div className='w-9/10 h-95/100 flex justify-between gap-x-8 my-5'>
                <div className='w-3/4 h-full flex flex-col items-center gap-y-2'>
                    <div className='w-full h-1/10'><SearchBox /></div>
                    <div className='w-full h-9/10'><Map /></div>
                </div>
                <div className='w-1/4 h-full text-black'>
                    <h2 className='text-3xl font-semibold mt-2 mb-6 tracking-tight'>Latest Alerts</h2>
                    <div className='flex flex-col gap-y-3'>
                        {
                            latestAlerts.map((alert, index) => (
                                <LatestAlert
                                    key={index}
                                    title={alert.title}
                                    description={alert.description}
                                    severity={alert.severity}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
