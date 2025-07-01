import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function AdminPage() {
    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white flex text-black'>
            <Sidebar />
        </div>
    )
}
