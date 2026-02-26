import { useState } from "react";
import { candidates, Candidate } from "@/lib/candidates-data";
import { CandidateCard } from "@/components/candidate-card";
import { CandidateModal } from "@/components/candidate-modal";
import { Navbar } from "@/components/navbar";
import { MissionSection } from "@/components/mission-section";
import { motion } from "framer-motion";

export default function HomePage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-archivo">
      <Navbar />
      
      {/* Header Section */}
      <header className="pt-20 pb-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-tight max-w-4xl mx-auto">
              Discovering exceptional talent, elevated.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explore pre-vetted professionals assessed by AI and expert judgment. 
            Our multi-layered evaluation ensures you find the perfect match for your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              {candidates.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                  style={{ backgroundColor: c.avatar.bgColor }}
                >
                  {c.avatar.initials}
                </div>
              ))}
              {candidates.length > 5 && (
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm">
                  +{candidates.length - 5}
                </div>
              )}
            </div>
            <span className="text-sm font-medium text-slate-500">
              Join 500+ companies hiring through our platform
            </span>
          </motion.div>
        </div>
      </header>

      {/* Leaderboard Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-navy-dark">Top Rated Professionals</h2>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-accent animate-pulse" />
            Live Rankings
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CandidateCard
                candidate={candidate}
                onClick={() => handleOpenModal(candidate)}
              />
            </motion.div>
          ))}
        </div>
      </main>

      <MissionSection />

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-4">
          <div className="flex items-center">
            <img 
              src="/logo-white.png" 
              alt="Tarteeb Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <p className="text-slate-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Tarteeb Solutions LLC. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Detail Modal */}
      <CandidateModal
        candidate={selectedCandidate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
