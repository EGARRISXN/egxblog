import { client, urlFor } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug) {
  const query = `
*[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    coverImage
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogPost({ params }) {
  const data = await getData(params.slug);
  console.log(data);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          World by E.
        </span>
        <span className="mt-4 block text-2xl text-center leading-8 font-bold tracking-tight">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.coverImage).url()}
        alt="image"
        width={800}
        height={800}
        priority
        className="rounded-lg mx-auto mt-8 h-[200px] object-cover border"
      />

      <div className="mt-12 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
