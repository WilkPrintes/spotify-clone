import { MusicPlayerLeft } from './MusicPlayerLeft';
import { MusicPlayerControlers } from './MusicPlayerControlers';
import { MusicPlayerRight } from './MusicPlayerRight';

export function MusicPlayer(){
    return (
        <div className="bg-zinc-900 fixed w-screen h-15vh mt-85vh border-t border-zinc-700 px-6 py-4 flex items-center justify-between invisible lg:visible">
            <MusicPlayerLeft musicName='teste' artistName='test' />
            <MusicPlayerControlers />
            <MusicPlayerRight />
        </div>
    )
    
}