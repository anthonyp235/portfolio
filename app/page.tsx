import { Header } from '@/components/header'
import { Introduction } from '@/components/introduction'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Articles } from '@/components/articles';
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-sky-50 font-sans">
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

