import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Chevrons() {
    return (
        <div className='flex fixed items-center gap-3 w-screen lg:w-80vw lg:ml-20vw mb-15vh bg-zinc-600 bg-opacity-25 h-6vh'>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
            </button>
        </div>
    )
}