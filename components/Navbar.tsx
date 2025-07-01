import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { PiBell } from 'react-icons/pi'

export default function Navbar() {
    return (
        <nav className='w-full h-[4rem] bg-white text-black flex justify-between items-center border-b border-gray-400/50 px-8'>
            <div className='flex h-full items-center'>
                <div className='flex items-center gap-x-4'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={16}
                        height={16}
                        className='cursor-pointer'
                    />
                    <h1 className='font-bold text-xl cursor-pointer'>
                        <Link href='/'>TransitAlert</Link>
                    </h1>
                </div>
                <div className='pl-8'>
                    <ul className='flex gap-x-6 text-zinc-800'>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/routes"}>Routes</Link>
                        </li>
                        <li>
                            <Link href={"/alerts"}>Alerts</Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-x-6'>
                <div className='flex items-center bg-[#E8EDF5] rounded-xl text-[#4A739C] gap-x-2 w-[160px] px-3'>
                    <IoSearchOutline className='size-5' />
                    <input type="text" name="" id="" placeholder='Search' className='placeholder-[#4A739C] w-3/5 outline-none' />
                </div>
                <div className='h-[40px] w-[40px] rounded-xl bg-[#E8EDF5] flex justify-center items-center'>
                    <PiBell className='size-5' />
                </div>
            </div>
        </nav>
    )
}
