'use client'
import * as React from 'react'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {MoonIcon, SunIcon} from '@radix-ui/react-icons'
import {Button} from './ui/button'

export default function Header() {
  const {setTheme} = useTheme()

  return (
    <header className='mx-auto flex w-full max-w-7xl justify-between border-b-2 py-4'>
      <section className='flex'>
        <Link href='/'>
          <Button
            variant='link'
            className='text-2xl font-bold text-foreground no-underline hover:no-underline 2xl:text-4xl'
          >
            eg<span className='text-primary'>xblog</span>
          </Button>
        </Link>
      </section>
      <section className='flex gap-2 px-4'>
        <Button variant='outline' className='text-foreground'>
          <Link href='https://egxworld.net/' className='2xl:text-lg'>
            egxworld
          </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <SunIcon className='size-[1.2rem] rotate-0 scale-100 transition-all 2xl:size-[1.5rem] dark:-rotate-90 dark:scale-0' />
              <MoonIcon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all 2xl:size-[1.5rem] dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </header>
  )
}
