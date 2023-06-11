import Image from 'next/image'

interface PlaylistCardProps {
    musicName: string,
    artistName: string,
}

export function PlaylistCard(props: PlaylistCardProps) {
    return (
        <a href='' className='bg-white/5 h-auto lg:h-30vh w-40vw lg:w-auto p-3 rounded-md flex flex-col items-center gap-2 hover:bg-white/10'>
            <Image src='images/album.jpg' className='h-2/3 w-auto' width={104} height={104} alt='Capa Evangelion Finaly' />
            <strong className='font-semibold'>{props.musicName}</strong>
            <span className='text-sm text-zinc-400' >{props.artistName}</span>
        </a>
    )
}