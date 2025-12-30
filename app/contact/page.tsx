import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/contact-hero.jpg" alt="Contact Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
            <p className="text-xl text-balance opacity-90">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Address</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          [Your School Address]
                          <br />
                          [City, Postal Code]
                          <br />
                          [Country]
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Phone Numbers</h3>
                        <p className="text-muted-foreground text-sm">
                          Main Office: [Phone Number]
                          <br />
                          Admission: [Phone Number]
                          <br />
                          Emergency: [Phone Number]
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 text-accent p-3 rounded-lg">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm">
                          General: [email@school.com]
                          <br />
                          Admissions: [admissions@school.com]
                          <br />
                          Principal: [principal@school.com]
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Office Hours</h3>
                        <p className="text-muted-foreground text-sm">
                          Monday - Friday: [TIME] - [TIME]
                          <br />
                          Saturday: [TIME] - [TIME]
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="pt-4">
                  <h3 className="font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="[Facebook URL]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-lg transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="[Instagram URL]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-lg transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="[YouTube URL]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-lg transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input id="contact-name" placeholder="Enter your name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input id="contact-email" type="email" placeholder="your.email@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input id="contact-phone" type="tel" placeholder="01XXXXXXXXX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input id="contact-subject" placeholder="What is this regarding?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea id="contact-message" placeholder="Type your message here..." rows={6} />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us Here</h2>
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9064094296497!2d90.39225451543203!3d23.750840384589724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAzLjAiTiA5MMKwMjMnNDAuNSJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">
            [Replace the iframe src with your school's actual Google Maps embed link]
          </p>
        </div>
      </section>
    </div>
  )
}
