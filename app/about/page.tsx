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
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
The Assemblies of God Church School/Dhaka was established and is operated to provide quality education for the children of all communities, irrespective of caste or religion, recognizing and maintaining that the guiding principle of the government, character and discipline of the school shall be based on Christian teaching.
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/AGCS.jpg" alt="AGCS Photo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
