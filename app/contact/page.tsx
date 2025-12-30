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
          <p className="text-xl text-blue-100">We are here to help and answer any question you might have.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Information</h2>
            
            <Card className="border-none shadow-sm bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-sm text-slate-600">401/1, New Eskaton Road, Dhaka</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-sm text-slate-600">+880-2-41031641</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-900 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-slate-600">info@agcs.edu.bd</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-t-4 border-t-blue-900">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/mnjqyarg" method="POST" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 text-lg">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden h-[400px] shadow-inner border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.126588145219!2d90.3980183!3d23.7428456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89796696773%3A0x280e8f3ef6b43292!2sAssemblies%20of%20God%20Church%20School!5e0!3m2!1sen!2sbd!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  )
}
