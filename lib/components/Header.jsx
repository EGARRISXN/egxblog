import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {ThemeToggle} from '@/components/Theme-Toggle'

export default function Header() {
  return (
    <header className='mx-auto flex w-full max-w-3xl justify-between border-b-2 py-4'>
      <div className='flex'>
        <Link href='/'>
          <Button
            variant='link'
            className='text-2xl font-bold text-foreground no-underline hover:no-underline'
          >
            eg<span className='text-primary'>xblog</span>
          </Button>
        </Link>
      </div>
      <div className='flex gap-2 px-4'>
        <Link href='https://egxworld.net/'>
          <Button variant='outline' className='text-foreground'>
            egxworld
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
