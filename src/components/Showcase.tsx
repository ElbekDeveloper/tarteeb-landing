import Image from "next/image";

export default function Showcase() {
  return (
    <section id="features" className="py-10 md:py-30 px-4 bg-gray-50 ">
      <div className="container mx-auto max-w-6xl">
        {/* Admin Panel Feature */}
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div
            className="w-full md:w-1/2 space-y-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Own AI Bot
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                An AI bot branded for your center accepts speaking and writing
                tasks. For advanced learners, Lexi and Alex in “Human Mode”
                develop natural speaking skills.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Speaking Made More Engaging
                  </h4>
                  <p className="text-gray-600">
                    Telegram Chat — For unstable internet or beginner students,
                    AI conducts audio Q&A with instant detailed feedback.
                  </p>
                  <br />
                  <p className="text-gray-600">
                    Human Mode — Advanced students practice face-to-face with
                    Lexi or Alex for natural English conversation skills. Note:
                    AI only asks teacher-enabled questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI Essay Feedback
                  </h4>
                  <p className="text-gray-600">
                    Essays are instantly analyzed with feedback based on
                    Cambridge and Oxford standards. All essays and results are
                    stored, allowing monthly and yearly progress tracking
                    anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="w-full md:w-[60%] space-y-6 flex relative items-start justify-center gap-6 md:gap-0">
            <div
              className="relative md:absolute -top-20 md:left-0 z-0 md:z-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                src="/images/lexi.webp"
                alt="Admin Panel Dashboard"
                width={600}
                height={300}
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
