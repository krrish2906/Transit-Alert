import React from 'react'
import SearchBox from './SearchBox'

export default function HomePage() {
    return (
        <div className='h-[calc(100vh-4rem)] flex flex-col items-center'>
            <div className='w-4/5 mt-10'>
                <SearchBox />
            </div>
        </div>
    )
}
