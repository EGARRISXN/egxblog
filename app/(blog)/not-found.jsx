import Link from 'next/link'
import {Button} from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <p className=' pt-2 text-2xl font-semibold sm:text-3xl'>PAGE NOT FOUND.</p>
      <br />
      <Link href='/'>
        <Button className='bg-red-400 px-8'>Go Home</Button>
      </Link>
    </div>
  )
}
