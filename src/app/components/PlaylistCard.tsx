import Image from 'next/image'

interface PlaylistCardProps {
    musicName: string,
    artistName: string,
}

export function PlaylistCard(props: PlaylistCardProps) {
    return (
        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Capa Evangelion Finaly' />
            <strong className='font-semibold'>{props.musicName}</strong>
            <span className='text-sm text-zinc-400' >{props.artistName}</span>
        </a>
    )
}