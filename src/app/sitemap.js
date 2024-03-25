export default async function sitemap() {

  const blog = await fetch('https://www.mohztec.com/api/blog')
  const resBlog = await blog.json()
  const blogEntries = resBlog.map(({ id }) => ({
    url: `https://mohztec.com/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }))
  const project = await fetch('https://www.mohztec.com/api/project')
  const resProject = await project.json()
  const projectEntries = resProject.map(({ id }) => ({
    url: `https://mohztec.com/project/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }))

  return [
    {
      url: 'https://mohztec.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mohztec.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mohztec.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://mohztec.com/project',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://mohztec.com/services',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mohztec.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogEntries,
    ...projectEntries
  ]
}