import Image from 'next/image'
import Link from 'next/link'
import {client, urlFor} from '@/lib/sanityClient'
import {Card, CardContent} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

export const revalidate = 60

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
    <main className='my-4 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2'>
      {data.map((blog, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(blog.coverImage).url()}
            alt='image'
            width={600}
            height={600}
            className='mx-auto h-[200px] rounded-t-lg border object-cover'
          />
          <CardContent className='mt-4'>
            <h2 className='line-clamp-2 text-lg font-bold'>{blog.title}</h2>
            <p className='mt-2 line-clamp-3 text-sm text-gray-700 dark:text-gray-400'>
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
