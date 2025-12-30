import { Facebook, Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">[School Name]</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              [Brief description of your school and its mission]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-background/80 hover:text-background transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-background/80 hover:text-background transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/80 hover:text-background transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-background/80">[School Address]</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-background/80">[Phone Number]</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-background/80">[Email Address]</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="[Facebook URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="[Instagram URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="[YouTube URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=[YOUR_FB_PAGE]&tabs=timeline&width=280&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                width="280"
                height="200"
                className="border-none rounded-lg"
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/80">© {new Date().getFullYear()} [School Name]. All rights reserved.</p>
          <p className="text-xs text-background/60 mt-2">Redesigned with ❤️ by a passionate 7th grader</p>
        </div>
      </div>
    </footer>
  )
}
