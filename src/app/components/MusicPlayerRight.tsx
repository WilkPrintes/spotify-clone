import { Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from 'lucide-react'

export function MusicPlayerRight() {
    return (
        <div className='flex items-center gap-2 w-20vw'>
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-2'>
                <Volume2 size={20} />
                <input type="range" min="0" max="100" className="w-full h-1 text-green-400 cursor-pointer"/>
            </div>
            <div>
                <Maximize2 size={20} />
            </div>
        </div>
    )
}