import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Award, BookOpen } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "[XXXX]+",
    label: "Students",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    value: "[XXX]+",
    label: "Teachers",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Award,
    value: "[XX]+",
    label: "Awards Won",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    value: "[XX]+",
    label: "Programs",
    color: "bg-primary/10 text-primary",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-xl mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
