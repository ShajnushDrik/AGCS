import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, Lightbulb, Users, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/school-campus-aerial-view.jpg" alt="School Campus" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">About Our School</h1>
            <p className="text-xl text-balance opacity-90">Empowering minds, building futures since [YEAR]</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="bg-primary/10 text-primary inline-flex p-4 rounded-xl mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Replace with your school's mission statement. What are your core goals? What do you aim to achieve
                  for your students? What makes your educational approach unique?]
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="bg-secondary/10 text-secondary inline-flex p-4 rounded-xl mb-4">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Replace with your school's vision statement. Where do you see your school in the future? What kind of
                  students do you aim to develop? What impact do you want to make?]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 text-primary inline-flex p-4 rounded-xl mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground text-sm">[Describe how integrity is practiced in your school]</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 text-secondary inline-flex p-4 rounded-xl mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm">[Describe your commitment to academic excellence]</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 text-accent inline-flex p-4 rounded-xl mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground text-sm">
                  [Describe your focus on building strong community bonds]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  [Replace with your school's founding story. When was it established? Who founded it? What was the
                  original vision?]
                </p>
                <p>
                  [Add more history about how the school has grown and evolved over the years. What milestones have you
                  achieved?]
                </p>
                <p>
                  [Mention any significant achievements, expansions, or changes that have shaped your school into what
                  it is today.]
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/historical-school-photo.jpg" alt="Historical Photo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "[Achievement 1]", description: "[Year/Details]" },
              { icon: Award, title: "[Achievement 2]", description: "[Year/Details]" },
              { icon: Award, title: "[Achievement 3]", description: "[Year/Details]" },
              { icon: Award, title: "[Achievement 4]", description: "[Year/Details]" },
            ].map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary inline-flex p-4 rounded-xl mb-4">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Body */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Governing Body</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <Card key={member}>
                <CardContent className="p-6 text-center">
                  <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={`/board-member-${member}.jpg`}
                      alt={`Board Member ${member}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1">[Member Name]</h3>
                  <p className="text-sm text-muted-foreground mb-2">[Position]</p>
                  <p className="text-xs text-muted-foreground">[Brief info or qualifications]</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
