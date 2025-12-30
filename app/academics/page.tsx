import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Microscope, Globe, Calculator, Palette, Music, Dumbbell } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/students-studying-together.jpg" alt="Academic Excellence" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Academic Excellence</h1>
            <p className="text-xl text-balance opacity-90">Nurturing curious minds through quality education</p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="bg-primary/10 text-primary inline-flex p-4 rounded-xl mb-2 w-fit">
                  <BookOpen className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">English Medium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  [Describe your English Medium program. What curriculum do you follow? What grades do you offer? What
                  makes it special?]
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• [Grade levels offered]</li>
                  <li>• [Curriculum type - e.g., Cambridge, Edexcel]</li>
                  <li>• [Special features or programs]</li>
                  <li>• [Class timings]</li>
                </ul>
                <Button className="mt-6">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="bg-secondary/10 text-secondary inline-flex p-4 rounded-xl mb-2 w-fit">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Bangla Medium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  [Describe your Bangla Medium program. What curriculum do you follow? What grades do you offer? What
                  makes it special?]
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• [Grade levels offered]</li>
                  <li>• [Curriculum type - e.g., National Curriculum]</li>
                  <li>• [Special features or programs]</li>
                  <li>• [Class timings]</li>
                </ul>
                <Button className="mt-6" variant="secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Subjects We Teach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: "Mathematics", color: "bg-primary/10 text-primary" },
              { icon: Microscope, title: "Science", color: "bg-secondary/10 text-secondary" },
              { icon: BookOpen, title: "Languages", color: "bg-accent/10 text-accent" },
              { icon: Globe, title: "Social Studies", color: "bg-primary/10 text-primary" },
              { icon: Palette, title: "Arts", color: "bg-secondary/10 text-secondary" },
              { icon: Music, title: "Music", color: "bg-accent/10 text-accent" },
              { icon: Dumbbell, title: "Physical Education", color: "bg-primary/10 text-primary" },
              { icon: BookOpen, title: "Religious Studies", color: "bg-secondary/10 text-secondary" },
            ].map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-xl mb-3 ${subject.color}`}>
                    <subject.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{subject.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48">
                <Image src="/modern-library-facility.jpg" alt="Library" fill className="object-cover rounded-t-lg" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Library</h3>
                <p className="text-muted-foreground text-sm">
                  [Describe your library facilities. How many books? Digital resources? Study areas?]
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/science-lab-equipment.jpg" alt="Science Labs" fill className="object-cover rounded-t-lg" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Science Labs</h3>
                <p className="text-muted-foreground text-sm">
                  [Describe your lab facilities. Physics, Chemistry, Biology labs? What equipment do you have?]
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/computer-lab-modern.jpg" alt="Computer Lab" fill className="object-cover rounded-t-lg" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Computer Lab</h3>
                <p className="text-muted-foreground text-sm">
                  [Describe your computer facilities. How many computers? What software? Internet access?]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Routine */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Class Timings</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">English Medium</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>School Starts:</span>
                        <span className="font-semibold text-foreground">[TIME]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>School Ends:</span>
                        <span className="font-semibold text-foreground">[TIME]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lunch Break:</span>
                        <span className="font-semibold text-foreground">[TIME]</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">Bangla Medium</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>School Starts:</span>
                        <span className="font-semibold text-foreground">[TIME]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>School Ends:</span>
                        <span className="font-semibold text-foreground">[TIME]</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lunch Break:</span>
                        <span className="font-semibold text-foreground">[TIME]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Teaching Approach</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              [Describe your teaching philosophy and methodology. How do you engage students? What makes your approach
              unique? Do you use technology? How do you support different learning styles?]
            </p>
            <Button size="lg">Download Academic Prospectus</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
