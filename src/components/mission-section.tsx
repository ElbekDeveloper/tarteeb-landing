export function MissionSection() {
  return (
    <section className="w-full border-t border-cyan-light bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-15">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN - Mission Text */}
          <div className="space-y-6">
            <h2 className="font-archivo text-2xl font-bold text-navy-dark sm:text-[28px]">
              Our Mission
            </h2>
            
            <div className="space-y-4 font-archivo text-base leading-[1.8] text-near-black">
              <p>
                We believe education and talent discovery should go hand-in-hand.
              </p>
              <p>
                At tarteeb.uz, we're fostering a new generation of professionals through AI-powered learning and assessment. Our AI mentors, Lexi and Alex, engage candidates in meaningful conversations—asking insightful questions, providing real-time feedback, and supporting continuous growth.
              </p>
              <p>
                The professionals featured here are the living proof of this approach. They've invested time in learning, engaged authentically with our AI agents, and demonstrated measurable growth.
              </p>
              <p>
                This is talent assessment reimagined. Not based on CVs alone, but on actual learning journeys and demonstrated capability through interaction history with Lexi and Alex.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="font-archivo text-base font-bold text-purple-accent">
                Meet Our AI Mentors
              </h3>
            </div>
          </div>

          {/* RIGHT COLUMN - AI Images */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative overflow-hidden rounded-xl border-2 border-cyan-accent shadow-[0_4px_12px_rgba(0,64,104,0.12)]">
              <img 
                src="/ais.png" 
                alt="AI Mentors Lexi and Alex" 
                className="h-auto w-full max-w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
