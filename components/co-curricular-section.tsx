import { Card, CardContent } from "@/components/ui/card"
import { Music, Users2, PhoneCall as Football, Trophy, Palette, Globe } from "lucide-react"

const activities = [
  {
    icon: Music,
    title: "Music & Dance",
    description: "[Brief description]",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users2,
    title: "Debate Club",
    description: "[Brief description]",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Football,
    title: "Sports",
    description: "[Brief description]",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "[Brief description]",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "[Brief description]",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Globe,
    title: "Language Clubs",
    description: "[Brief description]",
    color: "bg-accent/10 text-accent",
  },
]

export function CoCurricularSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Co-Curricular Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in holistic development. Our diverse range of activities helps students discover their passions
            and develop essential life skills.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-xl mb-4 ${activity.color} group-hover:scale-110 transition-transform`}
                >
                  <activity.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{activity.title}</h3>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
