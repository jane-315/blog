interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'The Blog Site',
    description: `A blog site built with Next.js and Tailwind CSS, featuring a clean and minimalist design. The site supports markdown content, tags, search functionality, and includes features like dark mode and responsive layout.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/introducing-tailwind-nextjs-starter-blog',
  },
]

export default projectsData
