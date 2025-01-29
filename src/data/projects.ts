const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink?: string
}[] = [
    {
      name: 'Reptilia',
      description: 'Smart Reptile Care',
      liveLink: 'https://play.google.com/store/apps/details?id=solutions.nicode.reptilia',
      previewImage: '/project1.png',
    },
    {
      name: 'Dartis',
      description: 'A tiny Redis implementation in Dart for Learning Purposes',
      repoUrl: 'https://github.com/nicolagheza/dartis',
      previewImage: '/project1.png',
    },

  ]

export default PROJECTS
