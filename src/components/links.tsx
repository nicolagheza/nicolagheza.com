import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:nicode.solutions@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/nicolagheza',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/nicola-gheza-9995bb116/',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
