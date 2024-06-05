import Link from 'next/link'
import Image from 'next/image'
import {client, urlFor} from '../../lib/sanityClient'
import {Card, CardContent} from '../../components/ui/card'
import {Button} from '../../components/ui/button'

export const revalidate = 600

async function getData() {
  const query = `
 *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      coverImage
  }`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <main className='my-4 grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-2'>
      {data.map((blog, idx) => (
        <Card key={idx} className='sm:border-2 sm:p-1 sm:shadow-sm sm:shadow-green-400/80'>
          <Image
            src={urlFor(blog.coverImage).url()}
            alt='image'
            width={750}
            height={215}
            className='mx-auto rounded-t-lg border object-cover md:h-[180px] lg:h-[215px]'
          />
          <CardContent className='mt-4'>
            <h2 className='line-clamp-2 text-xl font-bold'>{blog.title}</h2>
            <p className='mt-2 line-clamp-2 text-gray-700 dark:text-gray-400'>
              {blog.smallDescription}
            </p>
            <Button asChild className='mt-4 w-full'>
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </main>
  )
}
