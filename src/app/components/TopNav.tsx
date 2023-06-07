import { Home as Homeicon, Library, Search } from 'lucide-react'

export function TopNav() {
    return (
        <nav className='space-y-5 mt-10 p-2'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                <Homeicon />
                Home
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                <Search />
                Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
                <Library />
                Your Library
            </a>
        </nav>
    )
}