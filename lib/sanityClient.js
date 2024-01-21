import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "yjby8z6w",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
