import { Home as Homeicon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Homeicon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Liked Songs</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>The Girl Next Door</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Nelson Freire - Bach</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Blade Runner</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10' >Good Morning</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong>Evangelion Finaly</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong>Evangelion Finaly</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong>Evangelion Finaly</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong>Evangelion Finaly</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong>Evangelion Finaly</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong>Evangelion Finaly</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Wilk Printes</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong className='font-semibold'>Evangelion Finaly</strong>
              <span className='text-sm text-zinc-400' >Hideaki Anno</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong className='font-semibold'>Evangelion Finaly</strong>
              <span className='text-sm text-zinc-400' >Hideaki Anno</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong className='font-semibold'>Evangelion Finaly</strong>
              <span className='text-sm text-zinc-400' >Hideaki Anno</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong className='font-semibold'>Evangelion Finaly</strong>
              <span className='text-sm text-zinc-400' >Hideaki Anno</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Capa Evangelion Finaly' />
              <strong className='font-semibold'>Evangelion Finaly</strong>
              <span className='text-sm text-zinc-400' >Hideaki Anno</span>
            </a>
          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src='/album.jpg' className='w-full' width={32} height={32} alt='Capa Evangelion Finaly' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Kom Susser Tod</strong>
            <span className='text-xs text-zinc-400'>Evangelion</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle className='text-zinc-200' />
            <SkipBack className='text-zinc-200'/>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
              <Play />
            </button>
            <SkipForward className='text-zinc-200'/>
            <Repeat className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='bg-white h-1 w-96 rounded-full bg-zinc-600'>
              <div className='bg-green-400 h-1 w-1/3 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:35</span>
          </div>
        </div>
        <div>

        </div>
      </footer>
    </div>
  )
}
