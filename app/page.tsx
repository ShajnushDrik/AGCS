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

      {/* Hero Slider - Using actual school images */}
      <section className="relative h-[500px] bg-muted">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033914_01.jpg"
            alt="AGCS Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Welcome to Assemblies of God Church School
            </h1>
            <p className="text-lg md:text-xl mb-6 text-pretty">
              Providing quality education for children of all communities since 1982. Excellence in learning, character
              building, and holistic development.
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

      {/* Notice Board - Real Notices */}
      <section className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-semibold whitespace-nowrap">
              <Bell className="h-5 w-5" />
              Latest Notice:
            </div>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap">
                <span className="mx-4">Important Dates for May and June 2025</span>
                <span className="mx-2">|</span>
                <span className="mx-4">Bangla Medium Admit Card Distribution Notice</span>
                <span className="mx-2">|</span>
                <span className="mx-4">
                  School will remain closed on 1st May 2025 on the occasion of International Labour Day
                </span>
                <span className="mx-2">|</span>
                <span className="mx-4">Notice About Parking</span>
                <span className="mx-2">|</span>
                <span className="mx-4">Notice for English Medium</span>
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
          {/* About Section - Real Content */}
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About Institution</h2>
              <div className="mb-4">
                <Image
                  src="https://agcs.edu.bd/storage/images/pages/1701838077_WhatsApp%20Image%202023-12-05%20at%206.30.16%20PM.jpeg"
                  alt="School Building"
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Assemblies of God Church School/Dhaka was established and is operated to provide quality education
                for the children of all communities, irrespective of caste or religion, recognizing and maintaining that
                the guiding principle of the government, character and discipline of the school shall be based on
                Christian teaching.
              </p>
              <p className="text-sm italic mb-4">
                Our Motto: "Train up a child in the way he/she should go; and when he/she is old, he/she will not depart
                from it." - King Solomon, Bible, Proverbs
              </p>
              <Button asChild>
                <Link href="/about">Read More About Us</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Notices - Real */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Notices</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <span className="text-primary hover:underline cursor-pointer">Test Image Notice</span>
                  </li>
                  <li>
                    <span className="text-primary hover:underline cursor-pointer">All Teachers Email Address</span>
                  </li>
                  <li>
                    <span className="text-primary hover:underline cursor-pointer">
                      গুগল ক্লাসরুম ও পরীক্ষা সংক্রান্ত বিজ্ঞপ্তি
                    </span>
                  </li>
                  <li>
                    <span className="text-primary hover:underline cursor-pointer">অনলাইন ক্লাস বন্ধের নোটিশ</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="#">View All Notices</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Facebook Page - Real Embed */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Facebook Page</h3>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F61553904477115&tabs=timeline&width=300&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="100%"
                  height="300"
                  className="border-none rounded-lg"
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Messages Section - Real Content */}
        <section className="mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Chairman&apos;s Message</h3>
                <div className="flex gap-4 mb-4">
                  <Image
                    src="https://agcs.edu.bd/storage/images/pages/1705826991_Rev.%20Asa%20Michael%20Kain.JPG"
                    alt="Rev. Asa Michael Kain - Chairman"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Dear parents, guardian and our students, I am very pleased to inform you that the upgraded and
                      updated website is now with you. This is an interactive site which allows you to access everything
                      you need to know about the school and your child&apos;s progress in academics...
                    </p>
                    <p className="font-semibold mt-2 text-sm">Rev. Asa Michael Kain</p>
                    <p className="text-xs text-muted-foreground">Chairman</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="/about">Read Full Message</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Principal&apos;s Message</h3>
                <div className="flex gap-4 mb-4">
                  <Image
                    src="https://agcs.edu.bd/storage/images/pages/1753094600_1701491337_1103.jpg"
                    alt="Mrs. Sikha Borman - Principal"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Our dear Students, Parents and Guardians, Greetings from the A. G. Church School family! We are
                      happy to start the Digital system. Over the past thirty five years, we have been blessed to
                      interact with you and your children...
                    </p>
                    <p className="font-semibold mt-2 text-sm">Mrs. Sikha Borman</p>
                    <p className="text-xs text-muted-foreground">Principal</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="/about">Read Full Message</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Co-Curricular Activities - Real */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Co-Curricular Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Dance", "Debate", "Football", "Cricket", "Badminton"].map((activity) => (
              <Card key={activity} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">
                      {activity === "Dance" && "💃"}
                      {activity === "Debate" && "🎤"}
                      {activity === "Football" && "⚽"}
                      {activity === "Cricket" && "🏏"}
                      {activity === "Badminton" && "🏸"}
                    </span>
                  </div>
                  <h3 className="font-semibold">{activity}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Photo Gallery Preview - Real Images */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://agcs.edu.bd/storage/images/images/1701757107_P1200828.JPG"
                alt="School Event"
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://agcs.edu.bd/storage/images/images/1702446428_IMG_20170915_112054.jpg"
                alt="Campus Life"
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://agcs.edu.bd/storage/images/images/1702445752_DSC_8299.JPG"
                alt="Students"
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://agcs.edu.bd/storage/images/images/1709007172_IGCSE%202023.JPG"
                alt="IGCSE 2023"
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </section>

        {/* YouTube Video */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Watch Our Video</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-I7uEvPvVyw?si=S4H7l8i2YVuivr3g"
                title="AGCS Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
