import Image from 'next/image'
import { Play } from 'lucide-react'

export function Music(props: { text: string }) {
    return (
        <a href='' className='bg-white/5 h-6vh w-auto lg:h-15vh group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src='/album.jpg' className='h-full' width={104} height={104} alt='Capa Evangelion Finaly' />
            <strong className=' text-xs lg:text-base'>{props.text}</strong>
            <button className='w-12 h-12 flex invisible items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 lg:group-hover:visible '>
                <Play />
            </button>
        </a>
    )
}