'use client'
import {Button} from '../components/ui/button'

export default function Error({error, reset}) {
  return (
    <article>
      <h1>Oh no! Something went wrong.</h1>
      <Button variant='outline' onClick={reset} className='bg-red-400 px-8'>
        Refresh
      </Button>
      <pre>{error.message}</pre>
    </article>
  )
}
