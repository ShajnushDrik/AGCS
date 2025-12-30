import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033925_03.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
            <p className="text-xl text-balance opacity-90">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        401/1, New Eskaton Road<br />Dhaka, Bangladesh
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
                        +880-2-41031641<br />+880-2-41032356
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
                      <p className="text-muted-foreground text-sm">info@agcs.edu.bd</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-4">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/61553904477115" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-lg transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/@AGCSDhaka" target="_blank" rel="noopener noreferrer" className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-lg transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: The Fixed Formspree Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <Card>
                <CardContent className="p-8">
                  <form action="https://formspree.io/f/mnjqyarg" method="POST" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Your Name *</Label>
                        <Input id="contact-name" name="name" placeholder="Enter your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-surname">Your Surname</Label>
                        <Input id="contact-surname" name="surname" placeholder="Enter your surname" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input id="contact-email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input id="contact-subject" name="subject" placeholder="What is this regarding?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea id="contact-message" name="message" placeholder="Type your message here..." rows={6} required />
                    </div>

                    <Button type="submit" className="w-full bg-blue-900 text-white" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us Here</h2>
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.183422119106!2d90.4001!3d23.7408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88ec54979e3%3A0x6a0a09e05697669d!2sNew%20Eskaton%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
