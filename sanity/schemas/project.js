export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'SLug',
      type: 'slug',
      options: { source: 'title', maxLength: 90 },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },

    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'linkToCode',
      title: 'LinkToCode',
      type: 'url',
    },
  ],
};
