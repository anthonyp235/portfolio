import { Button } from '@/components/ui/button'

export function Introduction() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Anthony Pastran
        </h1>
        <p className="max-w-[600px] text-muted-foreground sm:text-xl">
          Full Stack Web Developer passionate about creating beautiful, functional, and user-centered digital experiences.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

