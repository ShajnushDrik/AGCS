"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, FileText, Users, CreditCard, ClipboardList } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033952_03.JPG"
            alt="Join AGCS"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Join Our Family</h1>
            <p className="text-xl text-balance opacity-90">Start your journey towards excellence at AGCS</p>
          </div>
        </div>
      </section>

      {/* Admission Requirements - Real Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Admission Requirements & Procedures</h2>
            <Card>
              <CardContent className="p-8">
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Information regarding availability of seats may be obtained by calling the school Office and, if
                    seats are available, arrangements for an admission test date will be set.
                  </p>
                  <p>
                    Except for Playgroup and Lower Shishu, admission into other classes depends upon the availability of
                    seats. A printed notice regarding annual admission procedures will be posted on our Notice Board as
                    well as included in our School Newsletter and Website.
                  </p>
                  <p>
                    New students in all classes will be required to pass an admission test and/or interview before
                    admission. Students are admitted and placed in their proper grade and language medium with
                    consideration of the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Age</li>
                    <li>Achievement level</li>
                    <li>Language proficiency</li>
                    <li>Grade level at previous school</li>
                    <li>Emotional and physical maturity</li>
                  </ul>
                  <p>
                    We give preference to some such as in-house transfers, actual siblings of current students, etc.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                step: "Step 1",
                title: "Get Application Form",
                description: "Collect or download the admission form from office",
              },
              {
                icon: ClipboardList,
                step: "Step 2",
                title: "Submit Documents",
                description: "Submit required documents with the completed form",
              },
              {
                icon: Users,
                step: "Step 3",
                title: "Admission Test/Interview",
                description: "Appear for the admission test and/or interview",
              },
              {
                icon: CreditCard,
                step: "Step 4",
                title: "Complete Admission",
                description: "Pay fees and complete the admission process",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary inline-flex p-4 rounded-full mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">{item.step}</p>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Required Documents</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-4 text-lg">For New Admissions:</h3>
                    <ul className="space-y-3">
                      {[
                        "Birth Certificate (Original & Photocopy)",
                        "Previous School Report Card",
                        "Transfer Certificate (TC)",
                        "Passport Size Photos (4 copies)",
                        "Parent's NID/Passport Copy",
                        "Medical Certificate",
                      ].map((doc, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4 text-lg">Important Notes:</h3>
                    <ul className="space-y-3">
                      {[
                        "All original documents must be presented",
                        "Photocopies should be attested",
                        "Documents should be submitted before deadline",
                        "Incomplete applications will not be processed",
                      ].map((doc, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Programs Offered</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">English Medium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Following Pearson Edexcel Curriculum standards English as the primary medium of instruction.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Levels:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Playgroup to Grade 10</li>
                    <li>IGCSE preparation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Bangla Medium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Following NCTB (National Curriculum and Textbook Board) Framework with Bengali as the primary medium of instruction.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Levels:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Shishu to Class 10</li>
                    <li>SSC preparation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">Contact our admission office for more information</p>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-muted-foreground">+880-2-41031641, +880-2-41032356, +880-2-41030971</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground">info@agcs.edu.bd</p>
                  </div>
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-muted-foreground">401/1, New Eskaton Road, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* Contact for Admission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">Contact our admission office for more information</p>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-muted-foreground">+880-2-41031641, +880-2-41032356, +880-2-41030971</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground">info@agcs.edu.bd</p>
                  </div>
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-muted-foreground">401/1, New Eskaton Road, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Admission Inquiry</h2>
            <p className="text-center text-muted-foreground mb-12">
              Fill out the form below and we&apos;ll get back to you soon
            </p>
            <Card>
              <CardContent className="p-8">
                {/* 1. Added Formspree action and method */}
                <form action="https://formspree.io/f/mnjqyarg" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Student Name *</Label>
                      {/* 2. Added name="student_name" */}
                      <Input id="name" name="student_name" placeholder="Enter student name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade Applying For *</Label>
                      {/* 3. Added name="grade_applying_for" */}
                      <Input id="grade" name="grade_applying_for" placeholder="e.g., Grade 7" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent">Parent/Guardian Name *</Label>
                      {/* 4. Added name="parent_name" */}
                      <Input id="parent" name="parent_name" placeholder="Enter parent name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      {/* 5. Added name="phone" */}
                      <Input id="phone" name="phone" type="tel" placeholder="01XXXXXXXXX" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    {/* 6. Added name="email" */}
                    <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message/Questions</Label>
                    {/* 7. Added name="message" */}
                    <Textarea id="message" name="message" placeholder="Any questions or special requirements?" rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-blue-900 text-white" size="lg">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
