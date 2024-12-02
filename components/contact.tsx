import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { User, Mail, MessageSquare } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-muted-foreground" />
            <Input type="text" placeholder="Name" required />
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <Input type="email" placeholder="Email" required />
          </div>
          <div className="flex items-start space-x-2">
            <MessageSquare className="w-5 h-5 mt-2 text-muted-foreground" />
            <Textarea placeholder="Message" required />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

