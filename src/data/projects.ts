const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink?: string
}[] = [
    {
      name: 'Deep Learning For Fruits Image Recognition',
      description: 'This thesis was prepared in partial fulfilment of the requirements for the Degree of Bachelor of Science in Data Science and Knowledge Engineering, Maastricht University, Supervisors: Alexia Briassouli, Gerasimos Spanakis.',
      repoUrl: 'https://github.com/nicolagheza/DeepFruit',
      liveLink: '/DeepFruit.pdf',
      previewImage: '/deepfruit.png',
    },
    {
      name: 'Reptilia',
      description: 'Smart Reptile Care',
      liveLink: 'https://play.google.com/store/apps/details?id=solutions.nicode.reptilia',
      previewImage: '/reptilia.png',
    },
  ]

export default PROJECTS
