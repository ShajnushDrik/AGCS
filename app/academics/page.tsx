import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Bell, Calendar, Download, FileText, ExternalLink, Filter } from "lucide-react"

// --- REAL AGCS DATA FROM OFFICIAL SITE ---
const officialNotices = [
  {
    date: "14 Dec 2025",
    title: "Admission Test Result Sheet (Bangla Medium Year - 2026)",
    category: "Bangla Medium",
    priority: "High",
  },
  {
    date: "27 Nov 2025",
    title: "Notice for Bangla Medium Students - Year End Instructions",
    category: "Bangla Medium",
    priority: "Normal",
  },
  {
    date: "24 Nov 2025",
    title: "Important notice for the missed examination",
    category: "General",
    priority: "Urgent",
  },
  {
    date: "23 Nov 2025",
    title: "Urgent Notice (English & Bangla Medium Combined)",
    category: "General",
    priority: "Urgent",
  },
  {
    date: "18 Nov 2025",
    title: "Lower Shishu result sheet for new admission 2026",
    category: "Admission",
    priority: "High",
  },
  {
    date: "16 Nov 2025",
    title: "Online class notice regarding security concerns",
    category: "Academic",
    priority: "Urgent",
  },
  {
    date: "06 Nov 2025",
    title: "School Newsletter (Issue: 11 November 2025)",
    category: "General",
    priority: "Normal",
  }
]

export default function AGCSNoticeBoard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* AGCS Official Header Style */}
      <section className="bg-blue-900 py-12 border-b-4 border-yellow-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">AGCS Notice Board</h1>
              <p className="text-blue-100 italic">"Train up a child in the way he should go"</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                English Medium
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Bangla Medium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Notice Board Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Filter / Search Bar */}
            <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <Filter className="h-5 w-5" />
                <span>Filter by Year: 2025</span>
              </div>
              <p className="text-sm text-muted-foreground italic">EIIN: 900078</p>
            </div>

            {/* The Notice Table - Styled like agcs.edu.bd */}
            <Card className="shadow-lg border-none">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b">
                        <th className="p-4 font-bold text-blue-900 uppercase text-xs tracking-wider">Date</th>
                        <th className="p-4 font-bold text-blue-900 uppercase text-xs tracking-wider">Notice Heading</th>
                        <th className="p-4 font-bold text-blue-900 uppercase text-xs tracking-wider">Category</th>
                        <th className="p-4 font-bold text-blue-900 uppercase text-xs tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {officialNotices.map((notice, index) => (
                        <tr key={index} className="hover:bg-blue-50/50 transition-colors group">
                          <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                              <Calendar className="h-4 w-4 text-blue-800" />
                              {notice.date}
                            </div>
                          </td>
                          <td className="p-4">
                            <h3 className="font-semibold text-slate-800 group-hover:text-blue-900 transition-colors">
                              {notice.title}
                            </h3>
                            {notice.priority === 'Urgent' && (
                                <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase animate-pulse">
                                    Urgent
                                </span>
                            )}
                          </td>
                          <td className="p-4">
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                                notice.category === 'Admission' ? 'bg-green-100 text-green-700' : 
                                notice.category === 'Bangla Medium' ? 'bg-amber-100 text-amber-700' :
                                'bg-slate-100 text-slate-600'
                            }`}>
                              {notice.category}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm" className="text-blue-900 hover:bg-blue-100">
                              <Download className="h-4 w-4 mr-2" /> PDF
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Pagination / Footer Info */}
            <div className="mt-8 flex justify-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" className="bg-blue-900 text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Contact Info Footer Hook */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Official Documentation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                For legal inquiries or hard copies of these notices, please visit the Administrative Office at 401/1, New Eskaton Road, Dhaka.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-900 flex gap-2">
                    <FileText className="h-4 w-4" /> Download Prospectus
                </Button>
                <Button variant="outline" className="border-blue-900 text-blue-900 flex gap-2">
                    <ExternalLink className="h-4 w-4" /> Odhyyon Portal
                </Button>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
