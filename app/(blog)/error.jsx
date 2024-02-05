'use client'
import {useEffect} from 'react'
import {Button} from '@/components/ui/button'

export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='pt-2 text-lg font-semibold sm:text-2xl'>Oh no! Something went wrong.</p>
      <br />
      <Button variant='outline' onClick={reset} className='bg-red-400 px-8'>
        Refresh
      </Button>
    </div>
  )
}
