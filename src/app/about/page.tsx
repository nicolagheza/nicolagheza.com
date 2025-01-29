import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 flex flex-col sm:flex-row items-start gap-6">
        <img
          className="border-border dark:border-darkBorder shadow-light dark:shadow-dark w-32 h-32 sm:w-40 sm:h-40 rounded-base border-2"
          src="/avatar_camuno.jpg"
          alt="avatar"
        />

        <p className="text-base sm:text-lg">
          👋 Hi, I’m Nicola, an Italian Software & AI Engineer with a strong backend development background.
          I hold a BSc in Data Science & AI from Maastricht University and have experience building scalable
          systems, AI-driven solutions, and efficient backend architectures.
          <br /><br />
          I love tackling complex problems, optimizing performance, and exploring emerging technologies.
          Whether it’s designing robust APIs, working with cloud infrastructures, or experimenting with AI,
          I’m always driven by curiosity and innovation.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
