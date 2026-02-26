import { motion } from "framer-motion";
import { StarRating } from "./star-rating";
import { Candidate } from "@/lib/candidates-data";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CandidateCardProps {
  candidate: Candidate;
  onClick: () => void;
}

export function CandidateCard({ candidate, onClick }: CandidateCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-cyan-light hover:border-cyan-accent transition-all group flex flex-col h-full cursor-pointer"
      onClick={onClick}
    >
      {/* Avatar & Basic Info */}
      <div className="flex flex-col items-center text-center mb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-inner"
          style={{ backgroundColor: candidate.avatar.bgColor }}
        >
          {candidate.avatar.initials}
        </div>
        <h3 className="text-[18px] font-bold text-navy-dark leading-tight mb-1">
          {candidate.name}
        </h3>
        <p className="text-[14px] text-purple-accent font-medium">
          {candidate.title}
        </p>
      </div>

      {/* Marks Summary */}
      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-center justify-between p-2 rounded-lg bg-cyan-light/10 border border-cyan-light/20">
          <span className="text-xs font-bold text-navy-dark uppercase tracking-wider">Human Mark</span>
          <div className="flex items-center gap-2">
            <StarRating rating={candidate.marks.human.score} size={12} />
            <span className="text-xs font-bold text-navy-dark">{candidate.marks.human.score}</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-green-accent/5 border border-green-accent/10">
          <span className="text-xs font-bold text-navy-dark uppercase tracking-wider">AI Mark</span>
          <div className="flex items-center gap-2">
            <StarRating rating={candidate.marks.ai.score} size={12} />
            <span className="text-xs font-bold text-navy-dark">{candidate.marks.ai.score}</span>
          </div>
        </div>
      </div>

      {/* Top Skills */}
      <div className="mb-6">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Top Expertise</p>
        <div className="space-y-2">
          {candidate.skills.slice(0, 3).map((skill) => (
            <div key={skill.name} className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">{skill.name}</span>
              <StarRating rating={skill.rating} size={10} />
            </div>
          ))}
        </div>
      </div>

      {/* Action */}
      <Button 
        className="w-full bg-cyan-accent hover:bg-green-accent text-white hover:text-navy-dark font-bold transition-all group-hover:shadow-md"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        View Full Profile
        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
}
