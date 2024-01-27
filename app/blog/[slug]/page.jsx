import { client, urlFor } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // revalidate at 60 seconds

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

  return (
    <div className="mt-8">
      <div className="mb-8">
        <Link href="/" className="hover:text-green-400">
          ← Home
        </Link>
      </div>
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          "Spend a little time inside my head."
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
        className="rounded-lg mx-auto mt-8 h-[400px] object-cover border"
      />
      <div className="mt-12 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
      <Button asChild variant="destructive" className="flex mx-auto w-60 my-12">
        <Link href="/">Return</Link>
      </Button>
      <div className="text-center w-fit mx-auto prose lg:prose-lg text-sm border text-foreground rounded-lg px-8 py-4 my-12">
        If you'd like to support my work,
        <br />
        <Link
          href="https://www.buymeacoffee.com/egarrisxn"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-foreground no-underline"
        >
          consider buying me a coffee{" "}
          <span className="text-green-400 hover:text-yellow-400 hover:underline hover:underline-offset-4 no-underline">
            here
          </span>
          !
        </Link>
      </div>
    </div>
  );
}
