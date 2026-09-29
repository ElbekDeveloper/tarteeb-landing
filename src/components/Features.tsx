import Image from "next/image";

export default function Features() {
  return (
    <section id="admin" className="py-0 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Admin Panel Feature */}
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-16">
          {/* Right Side - Images */}
          <div className="w-full md:w-[60%] space-y-6 flex relative items-start justify-center">
            <div
              className="relative md:absolute top-0 md:left-10 z-0 scale-x-[-1]"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <Image
                src="/images/admin-1.webp"
                alt="Admin Panel Dashboard"
                width={800}
                height={600}
                // layout="responsive"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div> */}
            </div>
          </div>
          {/* Left Side - Text Content */}
          <div
            className="lg:w-1/2 space-y-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Study Center Management
              </h3>
              {/* <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our admin panel gives you unprecedented control and visibility
                over every aspect of your study center operations. From student
                management to performance analytics, everything you need is just
                a click away.
              </p> */}
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Attendance & Parent SMS in Seconds
                  </h4>
                  <p className="text-gray-600">
                    Taking attendance and grading is now effortless. With one
                    click, parents get an instant SMS — no more calls or Excel
                    reports after class.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Student & Group Management — Stress-Free
                  </h4>
                  <p className="text-gray-600">
                    Register students, assign them to groups, and manage changes
                    with a single click. Quick, simple, and stress-free.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Monthly & Yearly Attendance at a Glance
                  </h4>
                  <p className="text-gray-600">
                    See each group’s monthly attendance in clear color-coded
                    tables. The yearly heatmap turns red as absences grow —
                    giving directors instant insight.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI + Teacher: Perfect Essay Evaluation
                  </h4>
                  <p className="text-gray-600">
                    AI Detection stops students from submitting copied work,
                    protecting both results and your reputation.
                    <br />
                    Final Word from the Teacher ensures every AI assessment is
                    checked and corrected when needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Speaking, Backed by Teacher Oversight
                  </h4>
                  <p className="text-gray-600">
                    AI analyzes every word for detailed scoring, while teachers
                    can listen, grade, and track progress. Activate questions
                    instantly and monitor improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
