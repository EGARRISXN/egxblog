import {client} from '@/lib/sanityClient'

export default async function PostIndex() {
  const posts = (await client.fetch) < `*[_type == "post"]`

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={post?.slug.current}>${post?.title}</a>
        </li>
      ))}
    </ul>
  )
}
