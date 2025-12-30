import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Cross } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033919_02.jpg"
            alt="AGCS Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">About Our School</h1>
            <p className="text-xl text-balance opacity-90">Empowering minds, building futures since 1956</p>
          </div>
        </div>
      </section>

      {/* About Institution - Real Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Institution</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Assemblies of God Church School/Dhaka was established and is operated to provide quality education
                  for the children of all communities, irrespective of caste or religion, recognizing and maintaining
                  that the guiding principle of the government, character and discipline of the school shall be based on
                  Christian teaching.
                </p>
                <p className="italic font-medium text-foreground">
                  Our Motto: &quot;Train up a child in the way he/she should go; and when he/she is old, he/she will not
                  depart from it.&quot; - King Solomon, Bible, Proverbs
                </p>
                <p className="text-sm">
                  <strong>EIIN:</strong> 900078
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://agcs.edu.bd/storage/images/pages/1701838077_WhatsApp%20Image%202023-12-05%20at%206.30.16%20PM.jpeg"
                alt="School Building"
                fill
                className="object-cover"
              />
            </div>
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
                  <Cross className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Faith</h3>
                <p className="text-muted-foreground text-sm">
                  Based on Christian teaching and values, nurturing spiritual growth alongside academic excellence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 text-secondary inline-flex p-4 rounded-xl mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Committed to providing quality education and developing well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 text-accent inline-flex p-4 rounded-xl mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                <p className="text-muted-foreground text-sm">
                  Education for children of all communities, irrespective of caste or religion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chairman's Full Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Chairman&apos;s Message</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="https://agcs.edu.bd/storage/images/pages/1705826991_Rev.%20Asa%20Michael%20Kain.JPG"
                    alt="Rev. Asa Michael Kain"
                    width={200}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                  <div className="text-center mt-4">
                    <h3 className="font-bold">Rev. Asa Michael Kain</h3>
                    <p className="text-sm text-muted-foreground">Chairman</p>
                  </div>
                </div>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Dear parents, guardian and our students,</p>
                  <p>
                    I am very pleased to inform you that the upgraded and updated website is now with you. This is an
                    interactive site which allows you to access everything you need to know about the school and your
                    child&apos;s progress in academics and any relevant field.
                  </p>
                  <p>
                    Each child will have his or her own password to log into their account and get to know all about
                    themselves. The parents can also take the password and be participant in your child&apos;s overall
                    development. Basically you are just one click away from the most important information you need on
                    your child.
                  </p>
                  <p>
                    I sincerely hope this will serve the purpose for which it has been created and you will get hold of
                    this opportunity to be involved with our teachers into the wellbeing of your children. We continue
                    to be committed in serving all our parents, students and A. G. Church school family towards
                    excelling in every aspect of our children.
                  </p>
                  <p className="font-medium">Keep in touch. Blessings!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Principal's Full Message */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Principal&apos;s Message</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="https://agcs.edu.bd/storage/images/pages/1753094600_1701491337_1103.jpg"
                    alt="Mrs. Sikha Borman"
                    width={200}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                  <div className="text-center mt-4">
                    <h3 className="font-bold">Mrs. Sikha Borman</h3>
                    <p className="text-sm text-muted-foreground">Principal</p>
                  </div>
                </div>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Our dear Students, Parents and Guardians,</p>
                  <p>Greetings from the A. G. Church School family!</p>
                  <p>
                    You are holding the Prospectus for the Academic year 2017-2018 for the English Medium and half the
                    year for the Bengali Medium. The Prospectus contains all the required and necessary information you
                    need in order to be aware of all the rules, guidelines and procedures of the School.
                  </p>
                  <p>
                    We are happy to start the Digital system and thanks to the parents for your cooperation. Over the
                    past thirty five years, we have been blessed to interact with you and your children in the school.
                    We thank you for your understanding and cooperation in implementing the discipline in the school and
                    we hope this will continue this year also.
                  </p>
                  <p>
                    Please adhere to all the matters provided in the prospectus so that the school functions at its
                    best. Our desire is to make sure that the children are well taken care of once they enter our school
                    premises. We continue to do our best to train up our children to become worthy and effective
                    citizens of our nation.
                  </p>
                  <p>
                    Our prayers are that they may become gentle and generous human being, loving and caring to their
                    parents and be a blessing to each other. Let us continue the good cooperation for the year to come.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Governing Body - Real Data */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Governing Body</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Rev. Asa Michael Kain",
                position: "Chairman",
                image: "https://www.agcs.edu.bd/storage/images/staffs/1705826516_Rev.%20Asa%20Michael%20Kain.JPG",
              },
              {
                name: "Rev. Mcdonald M. Adhikary",
                position: "Vice Chairman",
                image:
                  "https://www.agcs.edu.bd/storage/images/staffs/1744692977_WhatsApp%20Image%202025-04-15%20at%2010.54.46_26abe7d400.jpg",
              },
              {
                name: "Rev. Jeson Adhikary",
                position: "Secretary",
                image:
                  "https://www.agcs.edu.bd/storage/images/staffs/1744693145_Pastor%20Jeson%20Adhikary%20(Chairman).jpg",
              },
              {
                name: "Mr. Sudan Sikder",
                position: "Treasurer",
                image:
                  "https://www.agcs.edu.bd/storage/images/staffs/1744694025_WhatsApp%20Image%202025-04-15%20at%2011.13.11_090b99e5.jpg",
              },
              {
                name: "Ms. Mina Van Der Spek",
                position: "Member",
                image: "https://www.agcs.edu.bd/storage/images/staffs/1705826798_Mina%20Van%20Der%20Spek.JPG",
              },
              {
                name: "Mr. Victor Liton Joydhar",
                position: "Member",
                image: "https://www.agcs.edu.bd/storage/images/staffs/1744693309_PP.jpg",
              },
              {
                name: "Adv. Peniel R. Munshi",
                position: "Member",
                image:
                  "https://www.agcs.edu.bd/storage/images/staffs/1744693299_WhatsApp%20Image%202025-04-15%20at%2009.57.41_fb39392d.jpg",
              },
              {
                name: "Hubert Boidya FSC",
                position: "Member",
                image:
                  "https://www.agcs.edu.bd/storage/images/staffs/1744692898_WhatsApp%20Image%202025-04-15%20at%2010.52.39_05f5f501.jpg",
              },
              {
                name: "Mrs. Shikha Borman",
                position: "Ex-Officio",
                image: "https://www.agcs.edu.bd/storage/images/staffs/1744693007_1701491337_1103.png",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
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
