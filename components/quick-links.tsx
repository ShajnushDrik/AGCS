import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Calendar, FileText, Mail } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  {
    icon: FileText,
    title: "Admissions",
    description: "Apply Now",
    href: "/admissions",
    color: "text-primary",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "View Events",
    href: "/calendar",
    color: "text-secondary",
  },
  {
    icon: BookOpen,
    title: "Curriculum",
    description: "Our Programs",
    href: "/academics",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Faculty",
    description: "Meet Our Team",
    href: "/faculty",
    color: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "Achievements",
    description: "Our Success",
    href: "/achievements",
    color: "text-secondary",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Get in Touch",
    href: "/contact",
    color: "text-accent",
  },
]

export function QuickLinks() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <link.icon
                    className={`h-10 w-10 mx-auto mb-3 ${link.color} group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="font-semibold text-sm mb-1">{link.title}</h3>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
