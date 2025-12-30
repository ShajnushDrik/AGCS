import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Calendar, Users, BookOpen, Award, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Slider */}
      <section className="relative h-[500px] bg-muted">
        <div className="absolute inset-0">
          <Image src="/modern-school-campus-building-aerial-view.jpg" alt="School Campus" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              [Welcome to Assemblies of God Church School]
            </h1>
            <p className="text-lg md:text-xl mb-6 text-pretty">
              [Providing quality education since 1956. Excellence in learning, character building, and holistic
              development.]
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-semibold whitespace-nowrap">
              <Bell className="h-5 w-5" />
              Latest Notice:
            </div>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap">
                <Link href="#" className="hover:underline mx-4">
                  [Important Dates for May and June 2025]
                </Link>
                <span className="mx-2">|</span>
                <Link href="#" className="hover:underline mx-4">
                  [Bangla Medium Admit Card Distribution Notice]
                </Link>
                <span className="mx-2">|</span>
                <Link href="#" className="hover:underline mx-4">
                  [School will remain closed on 1st May 2025]
                </Link>
                <span className="mx-2">|</span>
                <Link href="#" className="hover:underline mx-4">
                  [Notice About Parking]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Access</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/admissions">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <FileText className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">Admissions</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/academics">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">Academics</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/gallery">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">Gallery</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/about">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">About Us</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/contact">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">Contact</h3>
                </CardContent>
              </Card>
            </Link>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <Bell className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Notices</h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About Institution</h2>
              <div className="mb-4">
                <Image
                  src="/historic-school-building-facade.jpg"
                  alt="School Building"
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                [The Assemblies of God Church School/Dhaka was established and is operated to provide quality education
                for the children of all communities, irrespective of caste or religion, recognizing and maintaining that
                the guiding principle of the government, character and discipline of the school shall be based on
                Christian teaching.]
              </p>
              <p className="text-sm italic mb-4">
                Our Motto: "Train up a child in the way he/she should go; and when he/she is old, he/she will not depart
                from it."
              </p>
              <Button asChild>
                <Link href="/about">Read More About Us</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Notices */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Notices</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      [Test Image Notice]
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      [All Teachers Email Address]
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      [গুগল ক্লাসরুম ও পরীক্ষা সংক্রান্ত বিজ্ঞপ্তি]
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      [অনলাইন ক্লাস বন্ধের নোটিশ]
                    </Link>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="#">View All Notices</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Facebook Page */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Facebook Page</h3>
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">[Facebook feed placeholder]</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Messages Section */}
        <section className="mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Chairman's Message</h3>
                <div className="flex gap-4 mb-4">
                  <Image
                    src="/professional-chairman-portrait.jpg"
                    alt="Chairman"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      [Dear parents, guardian and our students, I am very pleased to inform you that the upgraded and
                      updated website is now with you. This is an interactive site which allows you to access everything
                      you need to know about the school...]
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="#">Read Full Message</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Principal's Message</h3>
                <div className="flex gap-4 mb-4">
                  <Image
                    src="/professional-principal-portrait.png"
                    alt="Principal"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      [Our dear Students, Parents and Guardians, Greetings from the A. G. Church School family! You are
                      holding the Prospectus for the Academic year. The Prospectus contains all the required and
                      necessary information you need...]
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="#">Read Full Message</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Co-Curricular Activities */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Co-Curricular Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Dance", "Debate", "Football", "Cricket", "Badminton"].map((activity) => (
              <Card key={activity} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={`/.jpg?height=100&width=100&query=${activity.toLowerCase()} activity icon`}
                    alt={activity}
                    width={100}
                    height={100}
                    className="mx-auto mb-3 rounded-lg"
                  />
                  <h3 className="font-semibold">{activity}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Photo Gallery Preview */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/school-campus-life-photo-.jpg?height=300&width=300&query=school campus life photo ${i}`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
