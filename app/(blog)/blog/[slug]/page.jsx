import Link from 'next/link'
import Image from 'next/image'
import {client, urlFor} from '../../../../lib/sanityClient'
import {Button} from '../../../../components/ui/button'
import {PortableText} from '@portabletext/react'

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
    <main className='mt-8'>
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
        width={825}
        height={435}
        className='mx-auto mt-8 rounded-lg border object-cover'
      />
      <div className='prose prose-lg prose-blue mx-auto mt-12 max-w-[800px] dark:prose-invert prose-a:text-primary prose-li:marker:text-primary'>
        <PortableText value={data.content} />
      </div>
      <Button asChild variant='destructive' className='mx-auto my-12 flex w-80'>
        <Link href='/'>Return</Link>
      </Button>
      <div className='prose prose-sm mx-auto my-12 w-fit rounded-lg border p-8 text-center text-foreground lg:prose-lg'>
        If you'd like to support my work,
        <br />
        <Link
          href='https://www.buymeacoffee.com/egarrisxn'
          target='_blank'
          rel='noopener noreferrer'
          className='text-foreground no-underline'
        >
          consider buying me a coffee{' '}
          <span className='text-green-400 no-underline hover:text-green-600'>here!</span>
        </Link>
      </div>
    </main>
  )
}
