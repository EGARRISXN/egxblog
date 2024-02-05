import Link from 'next/link'
import Image from 'next/image'
import {client, urlFor} from '@/lib/sanityClient'
import {PortableText} from '@portabletext/react'
import {Button} from '@/components/ui/button'

export const revalidate = 300 // revalidate at 5 minutes

async function getData(slug) {
  const query = `
*[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    coverImage
}[0]`

  const data = await client.fetch(query)
  return data
}

export default async function BlogPost({params}) {
  const data = await getData(params.slug)

  return (
    <div className='mt-8'>
      <div className='mb-8'>
        <Link href='/' className='hover:text-green-400'>
          ← Home
        </Link>
      </div>
      <h1>
        <span className='block text-center text-base font-semibold uppercase tracking-wide text-primary'>
          "Spend a little time inside my head."
        </span>
        <span className='mt-4 block text-center text-2xl font-bold leading-8 tracking-tight'>
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.coverImage).url()}
        alt='image'
        width={800}
        height={800}
        priority
        className='mx-auto mt-8 h-[400px] rounded-lg border object-cover'
      />
      <div className='prose prose-lg prose-blue mt-12 dark:prose-invert prose-a:text-primary prose-li:marker:text-primary'>
        <PortableText value={data.content} />
      </div>
      <Button asChild variant='destructive' className='mx-auto my-12 flex w-60'>
        <Link href='/'>Return</Link>
      </Button>
      <div className='prose mx-auto my-12 w-fit rounded-lg border px-8 py-4 text-center text-sm text-foreground lg:prose-lg'>
        If you'd like to support my work,
        <br />
        <Link
          href='https://www.buymeacoffee.com/egarrisxn'
          target='_blank'
          rel='noopener noreferrer'
          className='font-bold text-foreground no-underline'
        >
          consider buying me a coffee{' '}
          <span className='text-green-400 no-underline hover:text-yellow-400 hover:underline hover:underline-offset-4'>
            here
          </span>
          !
        </Link>
      </div>
    </div>
  )
}
