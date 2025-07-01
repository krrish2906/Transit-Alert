import AlertBox from '@/components/AlertBox'
import React from 'react'
import { SlArrowDown } from 'react-icons/sl'

export default function AlertsPage() {
    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex justify-center'>
            <div className='w-5/6 flex flex-col gap-y-7 mt-12'>
                <div className='flex flex-col gap-y-3'>
                    <h1 className='text-4xl font-bold'>Alerts</h1>
                    <p className='text-sm text-[#4A739C]'>Stay informed about service disruptions</p>
                </div>
                <div className='flex gap-x-4'>
                    <p className='bg-[#E8EDF5] flex items-center gap-x-3 px-3 py-1 rounded-xl'>
                        All Alerts
                        <SlArrowDown className='size-3' />
                    </p>
                    <p className='bg-[#E8EDF5] flex items-center gap-x-3 px-3 py-1 rounded-xl'>
                        Route 101
                        <SlArrowDown className='size-3' />
                    </p>
                    <p className='bg-[#E8EDF5] flex items-center gap-x-3 px-3 py-1 rounded-xl'>
                        Route 202
                        <SlArrowDown className='size-3' />
                    </p>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <AlertBox head='Delays on Route 101 and 202 due to construction' desc='Route 101, 202' />
                    <AlertBox head='Service disruption on Route 303 due to mechanical issues' desc='Route 303' />
                    <AlertBox head='Route 404 temporarily suspended due to weather conditions' desc='Route 404' />
                    <AlertBox head='Minor delays on Route 505 due to traffic congestion' desc='Route 505' />
                </div>
            </div>
        </div>
    )
}
