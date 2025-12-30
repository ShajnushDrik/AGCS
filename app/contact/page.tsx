import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Facebook, Youtube, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[300px] bg-blue-900 flex items-center justify-center overflow-hidden">
        <Image
          src="https://agcs.edu.bd/storage/images/sliders/1707033925_03.jpg"
          alt="Contact AGCS"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-2">Get In Touch</h1>
          <p className="text-blue-100">We are ready to assist you</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">Have a question? Feel free to reach out to the school administration office during working hours.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-xl text-white shadow-lg"><MapPin /></div>
                <div>
                  <p className="font-bold text-lg">Location</p>
                  <p className="text-slate-600">401/1, New Eskaton Road, Dhaka-1217</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-xl text-white shadow-lg"><Phone /></div>
                <div>
                  <p className="font-bold text-lg">Call Us</p>
                  <p className="text-slate-600">+880-2-41031641, +880-2-41032356</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-xl text-white shadow-lg"><Mail /></div>
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <p className="text-slate-600">info@agcs.edu.bd</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form (Build-Safe Version) */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl">
            <form action="https://formspree.io/f/mnjqyarg" method="POST" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input name="name" type="text" className="w-full p-3 rounded-xl border border-slate-200" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input name="email" type="email" className="w-full p-3 rounded-xl border border-slate-200" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Subject</label>
                <input name="subject" type="text" className="w-full p-3 rounded-xl border border-slate-200" required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea name="message" rows={5} className="w-full p-3 rounded-xl border border-slate-200" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="h-[400px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
            <iframe 
              src="http://googleusercontent.com/maps.google.com/5" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
