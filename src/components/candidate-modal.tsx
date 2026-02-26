import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";
import { Candidate } from "@/lib/candidates-data";
import { StarRating } from "./star-rating";
import { toast } from "sonner";

interface CandidateModalProps {
  candidate: Candidate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CandidateModal({
  candidate,
  isOpen,
  onClose,
}: CandidateModalProps) {
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsPhoneRevealed(false);
    }
  }, [candidate?.id, isOpen]);

  if (!candidate) return null;

  const maskPhone = () => {
    return "••• ••• XXXX";
  };

  const handleDownloadCV = () => {
    toast.error("CV download is not available yet. Stay tuned for updates!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] md:!max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none bg-white font-archivo">
        <div className="sticky top-0 z-10 bg-white border-b p-8">
          <DialogHeader className="flex flex-row items-center gap-6 space-y-0">
            <div
              className="w-[100px] h-[100px] rounded-full flex items-center justify-center text-4xl font-bold text-white shrink-0"
              style={{ backgroundColor: candidate.avatar.bgColor }}
            >
              {candidate.avatar.initials}
            </div>
            <div className="flex flex-col gap-1">
              <DialogTitle className="text-3xl font-bold text-navy-dark">
                {candidate.name}
              </DialogTitle>
              <p className="text-lg text-purple-accent font-medium">
                {candidate.title}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {candidate.specialty}
              </p>
            </div>
          </DialogHeader>
        </div>

        <div className="p-8 space-y-10 leading-[1.8]">
          {/* Marks Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-cyan-accent pl-6 py-2 bg-cyan-accent/5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-navy-dark">Human Mark</h3>
                <StarRating rating={candidate.marks.human.score} showText />
              </div>
              <p className="text-sm text-slate-700">
                {candidate.marks.human.feedback}
              </p>
            </div>
            <div className="border-l-4 border-green-accent pl-6 py-2 bg-green-accent/5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-navy-dark">AI Mark</h3>
                <StarRating rating={candidate.marks.ai.score} showText />
              </div>
              <p className="text-sm text-slate-700">
                {candidate.marks.ai.feedback}
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <section>
            <h3 className="text-xl font-bold text-navy-dark mb-6">Skills & Proficiency</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...candidate.skills]
                .sort((a, b) => b.rating - a.rating)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <span className="font-medium text-slate-800">{skill.name}</span>
                    <StarRating rating={skill.rating} size={14} />
                  </div>
                ))}
            </div>
          </section>

          {/* Interview Section */}
          <section>
            <h3 className="text-xl font-bold text-navy-dark mb-6">Interview Insights</h3>
            <Accordion type="single" collapsible className="w-full">
              {candidate.interview.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-navy-dark hover:text-purple-accent transition-colors py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 py-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Info (Read-only) */}
          <section className="pt-4 border-t border-slate-100">
            <h3 className="text-xl font-bold text-navy-dark mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Email</p>
                  <p className="font-medium text-slate-800">{candidate.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Phone</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-slate-800">
                      {isPhoneRevealed
                        ? candidate.contact.phone
                        : maskPhone()}
                    </p>
                    {!isPhoneRevealed && (
                      <button
                        onClick={() => setIsPhoneRevealed(true)}
                        className="text-[10px] bg-navy-dark text-white px-2 py-1 rounded font-bold hover:bg-navy-dark/90 transition-colors"
                      >
                        Reveal
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 z-10 bg-gradient-to-t from-white via-white to-transparent border-cyan-light p-6 pt-10 flex justify-center">
          <Button
            onClick={handleDownloadCV}
            className="bg-green-accent hover:bg-[#1d9f7f] text-white font-archivo font-bold text-[14px] px-8 py-6 h-auto min-w-[150px] rounded-lg shadow-lg transition-all active:scale-95"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
