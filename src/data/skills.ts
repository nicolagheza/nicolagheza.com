import {
  type IconType,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiDart,
  SiGo,
  SiSupabase,
  SiFirebase,
  SiTypescript,
  SiSqlite,
  SiPocketbase,
  SiFastapi,
  SiTsnode,
  SiDotnet,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiC,
  SiCsharp,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Languages',
      skills: [
        {
          skill: 'c',
          icon: SiC,
        },
        {
          skill: 'c#',
          icon: SiCsharp,
        },
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'typescript',
          icon: SiTypescript,
        },
        {
          skill: 'go',
          icon: SiGo,
        },
      ],
    },
    {
      field: 'Data Sciece & AI',
      skills: [
        {
          skill: 'scikit-learn',
          icon: SiScikitlearn,
        },
        {
          skill: 'opencv',
          icon: SiOpencv,
        },
        {
          skill: 'tensorflow',
          icon: SiTensorflow,
        },
        {
          skill: 'keras',
          icon: SiKeras,
        },
        {
          skill: 'torch',
          icon: SiPytorch,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'ts-node',
          icon: SiTsnode,
        },
        {
          skill: 'fastapi',
          icon: SiFastapi,
        },
        {
          skill: 'dotnet',
          icon: SiDotnet,
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
          skill: 'pocketbase',
          icon: SiPocketbase,
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
          skill: 'sqlite',
          icon: SiSqlite,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
    {
      field: 'Frontend',
      skills: [
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
      ],
    },
  ]

export default SKILLS
