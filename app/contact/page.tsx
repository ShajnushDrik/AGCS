"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Youtube, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[350px] bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://agcs.edu.bd/storage/images/sliders/1707033925_03.jpg"
            alt="Contact AGCS"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We&apos;d love to hear from you. We are here to help and answer any questions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Office</h2>
            
            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-lg text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    401/1, New Eskaton Road<br />
                    Dhaka - 1217, Bangladesh
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-lg text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone Numbers</h3>
                  <p className="text-slate-600">
                    +880-2-41031641<br />
                    +880-2-41032356
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6">
              <h3 className="font-bold mb-4 text-blue-900">Follow Our Updates</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/61553904477115" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@AGCSDhaka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formspree Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-none">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6 text-blue-900">Send a Message</h2>
                <form action="https://formspree.io/f/mnjqyarg" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="John Doe" required className="bg-slate-50 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-slate-50 border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" placeholder="Admission Inquiry, Transcript, etc." required className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" placeholder="How can we help you?" rows={6} required className="bg-slate-50 border-slate-200" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white h-14 text-lg font-semibold shadow-lg">
                    <Send className="mr-2 h-5 w-5" /> Send Official Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Map Section - Focused on AGCS Dhaka */}
      <section className="pb-20 container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center uppercase tracking-widest">Campus Location</h2>
        <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl border-8 border-white relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.016335345638!2d90.4005!3d23.7468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8979e8e5f2b%3A0x86338b340003000!2sAssemblies%20of%20God%20Church%20School!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  )
}
