import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">About [SCHOOL NAME]</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                [Replace with your school's mission statement and introduction. Talk about your school's history,
                values, and what makes you unique.]
              </p>
              <p className="text-lg leading-relaxed">
                [Add more details about your educational philosophy, teaching methods, and commitment to student
                success.]
              </p>
              <div className="pt-4">
                <p className="text-sm font-semibold text-foreground mb-2">Our Motto:</p>
                <p className="text-base italic text-primary">"[Add your school motto here]"</p>
              </div>
            </div>
            <Button className="mt-6 group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/school-building-exterior.png" alt="School Building" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">[XX]+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
