import React from 'react'
import { GoAlert } from 'react-icons/go'

export default function LatestAlert({ title, description, severity } : { title: string, description: string, severity: string }) {
    return (
        <div className={`w-full h-fit rounded-lg p-2 flex gap-x-5 px-4
            ${severity === "high" ? "bg-red-500/10 border border-red-500" : ""}
            ${severity === "medium" ? "bg-yellow-500/10 border border-yellow-500" : ""}
            ${severity === "low" ? "bg-green-500/10 border border-green-500" : ""}
        `}>
            <div className='flex items-center'>
                <GoAlert className='size-5' />
            </div>
            <div>
                <span className='text-base font-semibold'>{ title }</span>
                <p className='text-sm font-light text-gray-800'>{ description }</p>
            </div>
        </div>
    )
}
