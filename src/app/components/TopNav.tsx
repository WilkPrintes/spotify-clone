import { Home as Homeicon, Library, Search } from 'lucide-react'

export function TopNav() {
    return (
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
    )
}