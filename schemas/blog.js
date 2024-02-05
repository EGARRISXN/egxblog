import {FaBeer} from 'react-icons/fa'

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: FaBeer,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of post',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Post slug',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Cover image for post',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'smallDescription',
      title: 'Small Description',
      type: 'text',
      description: 'Small description of post',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'youtubeVideo',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
