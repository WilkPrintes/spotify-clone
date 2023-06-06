import { Shuffle, SkipBack, Play, SkipForward, Repeat } from 'lucide-react';

export function MusicPlayerControlers() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
                <Shuffle className='text-zinc-200' />
                <SkipBack className='text-zinc-200' />
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
                    <Play />
                </button>
                <SkipForward className='text-zinc-200' />
                <Repeat className='text-zinc-200' />
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-400'>0:31</span>
                <div className='bg-white h-1 w-96 rounded-full bg-zinc-600'>
                    <div className='bg-green-400 h-1 w-1/3 rounded-full'></div>
                </div>
                <span className='text-xs text-zinc-400'>2:35</span>
            </div>
        </div>
    )
}