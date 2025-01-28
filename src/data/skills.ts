import {
  type IconType,


  SiDocker,


  SiMongodb,
  SiMysql,
  SiNextdotjs,

  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,

  SiTailwindcss,
  SiPython,
  SiDart,
  SiZig,
  SiGo,
  SiSupabase,
  SiFirebase,
  SiFlutter,
  SiOpenai,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'flutter', icon: SiFlutter },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'dart',
          icon: SiDart,
        },
        {
          skill: 'go',
          icon: SiGo,
        },
        {
          skill: 'zig',
          icon: SiZig,

        },
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'ai',
          icon: SiOpenai,
        },
        {
          skill: 'firebase',
          icon: SiFirebase,

        },
        {
          skill: 'supabase',
          icon: SiSupabase,
        },
        {
          skill: 'redis',
          icon: SiRedis,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS
