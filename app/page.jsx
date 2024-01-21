import { client, urlFor } from "@/lib/sanityClient";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // revalidate at 30 seconds

async function getData() {
  const query = `
 *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      coverImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.coverImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-lg mx-auto h-[200px] object-cover border"
          />
          <CardContent className="mt-4">
            <h2 className="text-lg font-bold line-clamp-2">{post.title}</h2>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-400 line-clamp-3">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-4">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
