import type { IconType } from 'react-icons'
import { SidebarData } from '@/lib/data'
import Link from 'next/link'

type SidebarTileProps = {
    selected: SidebarData,
    setSelected: React.Dispatch<React.SetStateAction<SidebarData>>,
    state: SidebarData,
    icons: {
        blank: IconType,
        fill: IconType
    }
}

export default function SidebarTile({ selected, setSelected, state, icons } : SidebarTileProps) {
    return (
        <div
            onClick={() => setSelected(state)}                
            className={`w-full rounded-xl px-3 py-2.5 text-sm font-medium transition duration-200 cursor-pointer
            ${selected === state ? "bg-[#E8EDF2]" : "bg-white"}`}
        >
            <Link href={`/admin/${state}`} className='w-full flex items-center gap-x-3.5'>
                <div>
                    {
                        selected === state ? 
                        (<icons.fill className='size-6' />) : 
                        (<icons.blank className='size-6' />)
                    }
                </div>
                <div className='capitalize'>{ state }</div>
            </Link>
        </div>
    );
};