import Image from 'next/image'
import React from 'react'

export default function AlertCard({ src }: { src: string }) {
    return (
        <div className='flex w-full h-50 p-4 bg-gray-50/60 hover:bg-gray-50 rounded-xl transition-all'>
            <div className='flex flex-col gap-y-0.5 h-full w-7/10'>
                <p className='text-[#4A739C] text-sm'>Route 101</p>
                <h3 className='text-base font-bold'>Service Disruption</h3>
                <p className='text-[#4A739C] text-sm'>
                    Due to unforeseen circumstances, Route 101 is experiencing delays. Please expect longer wait times.
                </p>
            </div>
            <div className='w-3/10 h-full flex items-center justify-center'>
                <Image
                    src={src}
                    alt='alert_image'
                    width={100}
                    height={100}
                    className='h-full w-full'
                />
            </div>
        </div>
    )
}
