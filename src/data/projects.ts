const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink?: string
}[] = [
  {
    name: 'Crowbuddy',
    description: '',
    liveLink: 'http://crowbuddy.nl',
    previewImage: '/crowbuddy.png',
  },
  {
    name: 'Tiny~',
    description: 'A list of tiny projects',
    liveLink: 'https://nicode.solutions',
    previewImage: '/tiny~.png',
  },
  {
    name: 'Deep Learning For Fruits Image Recognition',
    description:
      'This thesis was prepared in partial fulfilment of the requirements for the Degree of Bachelor of Science in Data Science and Knowledge Engineering, Maastricht University, Supervisors: Alexia Briassouli, Gerasimos Spanakis.',
    repoUrl: 'https://github.com/nicolagheza/DeepFruit',
    liveLink: '/DeepFruit.pdf',
    previewImage: '/deepfruit.png',
  },
]

export default PROJECTS
