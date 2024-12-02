import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Server, PenToolIcon as Tool } from 'lucide-react'

export function Skills() {
  const skills = [
    { name: 'Frontend', icon: Code, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { name: 'Tools', icon: Tool, items: ['Git', 'Docker', 'Jest', 'Figma'] },
  ]

  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <category.icon className="w-6 h-6 text-primary" />
                <CardTitle>{category.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {category.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

