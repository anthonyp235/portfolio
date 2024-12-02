import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github } from 'lucide-react'
import { WeatherProject } from './weather-project'
import { WhoisLookup } from './whois-lookup'

export function Projects() {
  const projects = [
    {
      title: 'Weather Checker',
      description: 'A real-time weather checking application using the API Ninjas weather API.',
      component: <WeatherProject />,
      tags: ['React', 'API Integration', 'Next.js'],
      link: 'https://github.com/anthonyp235?tab=repositories',
    },
    {
      title: 'WHOIS Lookup',
      description: 'A domain information lookup tool using the API Ninjas WHOIS API.',
      component: <WhoisLookup />,
      tags: ['React', 'API Integration', 'Next.js'],
      link: 'https://github.com/anthonyp235?tab=repositories',
    },
    {
      title: 'Task Management App',
      description: 'A responsive web app for managing tasks and projects.',
      image: '/images/postgres.png',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: 'https://github.com/anthonyp235?tab=repositories',
    },
  ]

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              )}
              {project.component && (
                <div className="mb-4">{project.component}</div>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-blue-500 hover:underline"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

