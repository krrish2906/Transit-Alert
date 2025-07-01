import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchBox() {
    return (
        <div className='flex items-center bg-[#E8EDF5] rounded-xl text-[#4A739C] gap-x-3 w-full px-3 h-12'>
            <IoSearchOutline className='size-6' />
            <input type="text" name="" id="" placeholder='Search for route' className='placeholder-[#4A739C] outline-none' />
        </div>
    )
};