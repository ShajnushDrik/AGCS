import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import Image from "next/image"

export function MessagesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Messages from Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Chairman's Message */}
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/professional-portrait-chairman.jpg" alt="Chairman" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chairman's Message</h3>
                  <p className="text-sm text-muted-foreground">[Chairman Name]</p>
                  <p className="text-xs text-muted-foreground">Chairman, Governing Body</p>
                </div>
              </div>
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                [Replace with chairman's welcoming message. Share the vision, values, and commitment to providing
                quality education to all students...]
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Full Message →
              </Button>
            </CardContent>
          </Card>

          {/* Principal's Message */}
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/professional-portrait-principal.jpg" alt="Principal" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Principal's Message</h3>
                  <p className="text-sm text-muted-foreground">[Principal Name]</p>
                  <p className="text-xs text-muted-foreground">Principal</p>
                </div>
              </div>
              <Quote className="h-8 w-8 text-secondary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                [Replace with principal's message. Discuss academic programs, teaching philosophy, student development,
                and the school's commitment to excellence...]
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Full Message →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
