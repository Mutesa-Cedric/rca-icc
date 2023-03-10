export default {
  layout: {
    width: 'medium',
  },
  widgets: [
    {
      name: 'new-document-list',
      layout: {
        width: 'full',
      },
      options: {
        title: 'Recent documents',
        limit: 3,
        types: ['page', 'about', 'sermons', 'events','blog','legal', 'siteSettings'],
      },
    },
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/studio-supercharged',
      },
    },
  ],
}
