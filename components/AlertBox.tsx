import React from 'react'
import { GoAlert } from 'react-icons/go'

export default function AlertBox({ head, desc } : { head: string, desc: string }) {
    return (
        <div className='flex w-full gap-4 items-center'>
            <div className='bg-[#E8EDF5] rounded-xl p-3 flex justify-center items-center'>
                <GoAlert className='size-6' />
            </div>
            <div className='flex flex-col'>
                <p className='font-medium'>{ head }</p>
                <span className='text-sm text-[#4A739C]'>{ desc }</span>
            </div>
        </div>
    )
}
