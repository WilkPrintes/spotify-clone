import { Heart, Play } from "lucide-react";
import Image from "next/image";

export function MobileMusicPlayer() {
    return (
        <div className="bg-zinc-900 fixed w-screen h-10vh mt-90vh border-t border-zinc-700 px-6 py-4 flex items-center justify-between visible lg:invisible">
            <div className="h-10vh flex flex-row items-center">
                <div className="h-full w-70vw flex flex-row items-center">
                    <Image src='images/album.jpg' className='h-full w-auto p-2' width={104} height={104} alt='Capa Evangelion Finaly' />
                    <div className="flex flex-col">
                        <strong>Music Name</strong>
                        <span className='text-sm text-zinc-400' >Artist Name</span>
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-20vw justify-around">
                    <Heart />
                    <Play />
                </div>
            </div>
        </div>
    )
}