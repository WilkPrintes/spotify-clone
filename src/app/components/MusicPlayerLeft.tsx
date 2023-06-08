import Image from 'next/image'

interface MusicPlayerLeftProps {
    musicName: string
    artistName: string
}

export function MusicPlayerLeft(props: MusicPlayerLeftProps) {
    return (
        <>
            <div className='flex items-center gap-3 w-20vw'>
                <Image src='/album.jpg' width={64} height={64} alt='Capa Evangelion Finaly' />
                <div className='flex flex-col'>
                    <strong className='font-normal'>{props.musicName}</strong>
                    <span className='text-xs text-zinc-400'>{props.artistName}</span>
                </div>
            </div>
        </>
        
    )
}