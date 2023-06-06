import { Music } from './components/Music'
import { Playlist } from './components/Playlist'
import { TopNav } from './components/TopNav'
import { Chevrons } from './components/Chevrons'
import { PlaylistCard } from './components/PlaylistCard'
import { MusicPlayerLeft } from './components/MusicPlayerLeft'
import { MusicPlayerControlers } from './components/MusicPlayerControlers'
import { MusicPlayerRight } from './components/MusicPlayerRight'

export default function Home() {

  const musicNames = [
    'Evangelion Finaly 1',
    'Evangelion Finaly 2',
    'Evangelion Finaly 3',
    'Evangelion Finaly 4',
    'Evangelion Finaly 5',
    'Evangelion Finaly 6',
  ]

  const playlistNames = [
    'Liked Songs',
    'The Girl Next Door',
    'Nelson Freire - Bach',
    'Blade Runner',
  ]

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <aside className="w-72 bg-zinc-950 p-6">
          <TopNav />
          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            {playlistNames.map((playlistName) => {
              return <Playlist name={playlistName} />
            })}
          </nav>
        </aside>

        <main className="flex-1 p-6">

          <Chevrons />

          <h1 className='font-semibold text-3xl mt-10' >Good Morning</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            {musicNames.map((musicName) => {
              return <Music text={musicName} />
            })}
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Wilk Printes</h2>

          <div className='flex flex-row justify-between gap-3 mt-4'>
            <PlaylistCard musicName='Evangelion Finaly' artistName='Hideaki Anno' />
            <PlaylistCard musicName='Evangelion Finaly' artistName='Hideaki Anno' />
            <PlaylistCard musicName='Evangelion Finaly' artistName='Hideaki Anno' />
            <PlaylistCard musicName='Evangelion Finaly' artistName='Hideaki Anno' />
            <PlaylistCard musicName='Evangelion Finaly' artistName='Hideaki Anno' />
          </div>

        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <MusicPlayerLeft musicName='Kom Susser tod' artistName='Hideaki Anno' />
        <MusicPlayerControlers />
        <MusicPlayerRight />
      </footer>
    </div>
  )
}
