import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Download, Calendar, FileText, Users, CreditCard } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/students-excited-admission.jpg" alt="Join Our School" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Join Our Family</h1>
            <p className="text-xl text-balance opacity-90">Start your journey towards excellence</p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                step: "Step 1",
                title: "Get Application Form",
                description: "Collect or download the admission form",
              },
              {
                icon: CheckCircle,
                step: "Step 2",
                title: "Submit Documents",
                description: "Submit required documents with form",
              },
              {
                icon: Users,
                step: "Step 3",
                title: "Admission Test",
                description: "Appear for the admission test",
              },
              {
                icon: CreditCard,
                step: "Step 4",
                title: "Complete Payment",
                description: "Pay fees and complete admission",
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
      <section className="py-20 bg-muted/30">
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
                    <h3 className="font-bold mb-4 text-lg">Additional Requirements:</h3>
                    <ul className="space-y-3">
                      {[
                        "[Add any additional documents]",
                        "[Specific to your school]",
                        "[Required certificates]",
                        "[Special forms]",
                        "[Other documents]",
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

      {/* Fee Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fee Structure</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">English Medium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Admission Fee:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Monthly Tuition:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Annual Fee:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Books & Supplies:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">*Fees may vary by grade level</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Bangla Medium</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Admission Fee:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Monthly Tuition:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Annual Fee:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-muted-foreground">Books & Supplies:</span>
                  <span className="font-bold">[AMOUNT] BDT</span>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-2">*Fees may vary by grade level</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    { event: "Admission Form Available", date: "[DATE]" },
                    { event: "Last Date to Submit Form", date: "[DATE]" },
                    { event: "Admission Test Date", date: "[DATE]" },
                    { event: "Result Publication", date: "[DATE]" },
                    { event: "Final Admission Deadline", date: "[DATE]" },
                    { event: "Academic Year Starts", date: "[DATE]" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="font-medium">{item.event}</span>
                      </div>
                      <span className="text-muted-foreground">{item.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Forms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Download Forms</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Admission Form (English)", file: "admission-form-english.pdf" },
              { title: "Admission Form (Bangla)", file: "admission-form-bangla.pdf" },
              { title: "Prospectus 2025", file: "prospectus-2025.pdf" },
            ].map((form, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-4">{form.title}</h3>
                  <Button className="w-full bg-transparent" variant="outline">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Have Questions?</h2>
            <p className="text-center text-muted-foreground mb-12">
              Fill out the form below and we'll get back to you soon
            </p>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Student Name *</Label>
                      <Input id="name" placeholder="Enter student name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade Applying For *</Label>
                      <Input id="grade" placeholder="e.g., Grade 8" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent">Parent/Guardian Name *</Label>
                      <Input id="parent" placeholder="Enter parent name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="01XXXXXXXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message/Questions</Label>
                    <Textarea id="message" placeholder="Any questions or special requirements?" rows={4} />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
