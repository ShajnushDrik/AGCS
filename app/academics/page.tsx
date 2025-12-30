"use client" // Required for the search and pagination to work

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Search, 
  Calendar, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  FileText, 
  ArrowUpRight 
} from "lucide-react"

// --- FUTURE-PROOF DATA SYSTEM ---
// To add more notices in the future, just add a new object to this array.
const ALL_NOTICES = [
  {
    id: 1,
    date: "14 Dec 2025",
    title: "Admission Test Result Sheet (Bangla Medium Year - 2026)",
    category: "Admission",
    tag: "Result",
    link: "/docs/results-2026.pdf"
  },
  {
    id: 2,
    date: "27 Nov 2025",
    title: "Notice for Bangla Medium Students - Year End Instructions",
    category: "Bangla Medium",
    tag: "Academic",
    link: "#"
  },
  {
    id: 3,
    date: "24 Nov 2025",
    title: "Important notice for the missed examination",
    category: "General",
    tag: "Urgent",
    link: "#"
  },
  {
    id: 4,
    date: "23 Nov 2025",
    title: "Urgent Notice (English & Bangla Medium Combined)",
    category: "General",
    tag: "Safety",
    link: "#"
  },
  {
    id: 5,
    date: "18 Nov 2025",
    title: "Lower Shishu result sheet for new admission 2026",
    category: "Admission",
    tag: "Result",
    link: "#"
  },
  {
    id: 6,
    date: "16 Nov 2025",
    title: "Online class notice regarding security concerns",
    category: "Academic",
    tag: "Urgent",
    link: "#"
  }
];

export default function NoticeBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic to filter notices based on search
  const filteredNotices = ALL_NOTICES.filter(notice =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-20 pb-32 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mt-20" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-yellow-500/30">
            <Bell className="h-4 w-4 animate-bounce" />
            Official AGCS Notice Board
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="text-yellow-400">Announcements</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg opacity-80">
            Stay informed with real-time updates regarding admissions, examinations, 
            and school activities at A. G. Church School.
          </p>
        </div>
      </section>

      {/* Control Bar (Search & Filter) */}
      <section className="container mx-auto px-4 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 border flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search by title or category..." 
              className="pl-10 h-12 bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="text-sm font-medium text-gray-500 hidden md:block">
               Showing {currentNotices.length} of {filteredNotices.length} notices
             </div>
             <div className="h-8 w-[1px] bg-gray-200 hidden md:block" />
             <p className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded">EIIN: 900078</p>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-4">
          {currentNotices.length > 0 ? (
            currentNotices.map((notice) => (
              <Card key={notice.id} className="group hover:shadow-2xl transition-all duration-300 border-none shadow-sm overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Date Sidebar */}
                    <div className="md:w-32 bg-gray-50 p-6 flex flex-col items-center justify-center border-r border-gray-100">
                      <Calendar className="h-5 w-5 text-blue-900 mb-2" />
                      <span className="text-xl font-black text-blue-900 leading-none">
                        {notice.date.split(' ')[0]}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-gray-500 mt-1">
                        {notice.date.split(' ')[1]} {notice.date.split(' ')[2]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                          {notice.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-wider">
                          {notice.tag}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors leading-tight">
                        {notice.title}
                      </h3>
                    </div>

                    {/* Download Action */}
                    <div className="p-6 flex items-center justify-end border-t md:border-t-0 md:border-l border-gray-100 bg-white group-hover:bg-blue-900 transition-colors duration-300">
                      <Button variant="ghost" className="group-hover:text-white flex gap-2 font-bold">
                        <Download className="h-5 w-5" />
                        <span className="md:hidden lg:inline">View PDF</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed">
              <p className="text-gray-400">No notices found matching your search.</p>
            </div>
          )}

          {/* Functional Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 pt-10">
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-xl border-gray-200"
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
              <div className="text-sm font-bold text-blue-900">
                Page {currentPage} of {totalPages}
              </div>
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-xl border-gray-200"
              >
                Next <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Professional CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking for something else?</h2>
            <p className="text-blue-200 max-w-md">Download our academic calendar or view the 2026 prospectus.</p>
          </div>
          <div className="relative z-10 mt-8 md:mt-0 flex flex-wrap gap-4 justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 rounded-xl">
              <FileText className="mr-2 h-5 w-5" /> Download Prospectus
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-6 rounded-xl">
              Contact Admin <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
