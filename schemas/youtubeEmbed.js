export default {
  name: 'youtubeEmbed',
  title: 'YouTube',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'youtubeVideo',
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'controls',
      title: 'Controls',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      video: 'youtubeVideo',
    },
    prepare(selection) {
      const {video} = selection
      return {...selection, video: video}
    },
  },
}
