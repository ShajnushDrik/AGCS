import { Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://www.agcs.edu.bd/storage/images/settings/1747110409_New%20AGCS%20Logo%20PNG.png"
                alt="AGCS Logo"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <h3 className="font-bold text-lg">AGCS Dhaka</h3>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Providing quality education for the children of all communities since 1956. Train up a child in the way
              he/she should go.
            </p>
            <p className="text-xs text-background/60 mt-2">EIIN: 900078</p>
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

          {/* Contact Info - Real Data */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-background/80">401/1, New Eskaton Road, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-background/80">+880-2-41031641</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-background/80">info@agcs.edu.bd</span>
              </li>
            </ul>
          </div>

          {/* Social Media - Real Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/61553904477115"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@AGCSDhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F61553904477115&tabs=timeline&width=280&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
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
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Assemblies of God Church School, Dhaka. All rights reserved.
          </p>
          <p className="text-xs text-background/60 mt-2">Redesigned with care by a passionate 7th grader</p>
        </div>
      </div>
    </footer>
  )
}
