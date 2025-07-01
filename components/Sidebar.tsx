"use client"

import React, { useState } from 'react'
import { SidebarData, sidebar, icons } from '@/lib/data'
import SidebarTile from './SidebarTile'

export default function Sidebar() {
    const [selected, setSelected] = useState<SidebarData>(sidebar[0]);

    return (
        <div className='p-5 flex flex-col w-[320px]'>
            <div className='flex flex-col ml-4'>
                <h5 className='text-base font-medium'>Transit Alert</h5>
                <span className='text-[13px] text-[#4D7599]'>Admin Panel</span>
            </div>
            <div className='flex flex-col mt-4 gap-y-2'>
                {
                    sidebar.map((tile, index) => (
                        <SidebarTile
                            key={index}
                            selected={selected}
                            setSelected={setSelected}
                            state={tile}
                            icons={icons[index]}
                        />
                    ))
                }
            </div>
        </div>
    );
};
