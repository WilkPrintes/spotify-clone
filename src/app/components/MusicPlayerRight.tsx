import { Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from 'lucide-react'

export function MusicPlayerRight() {
    return (
        <div className='flex items-center gap-2'>
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-2'>
                <Volume2 size={20} />
                <div className='bg-white h-1 w-24 rounded-full bg-zinc-600'>
                    <div className='bg-green-400 h-1 w-1/3 rounded-full'></div>
                </div>
            </div>
            <div>
                <Maximize2 size={20} />
            </div>
        </div>
    )
}