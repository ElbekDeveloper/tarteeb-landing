import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CircleAlert } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-20 px-4 bg-white" id="solutions">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="rounded-4xl text-[#111] text-sm md:text-md shadow-sm px-4 py-2 inline-block mb-4">
            Comparison
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Challenges vs. Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turning Teaching Struggles into Success Stories
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative w-full">
          <div className="flex flex-col md:flex-row  justify-center gap-4 md:gap-8 w-full items-stretch">
            {/* Before Tarteeb */}
            <Card
              className="bg-gray-50 border-gray-200 w-full md:w-[40%]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <CardHeader className="text-center pb-0 md:pb-4">
                <CardTitle className="text-lg md:text-2xl font-bold text-gray-700">
                  Before Tarteeb
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-4">
                {[
                  "Students were not very motivated",
                  "No clear way to track attendance",
                  "Mock tests for reading and listening were costly and external.",
                  "No proper system to track writing progress",
                  "Little to no control over homework completion",
                  "Homework status never reached the director",
                  "No academic performance insights",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleAlert className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* After Tarteeb */}
            <Card
              className="bg-purple-50 border-purple-200 w-full md:w-[40%]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <CardHeader className="text-center pb-0 md:pb-4">
                <CardTitle className="text-lg md:text-2xl font-bold text-purple-700">
                  After Tarteeb
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-4">
                {[
                  "Students are more motivated to study on their own",
                  "Attendance is tracked with clear statistics, and parents are notified",
                  "Mock tests are built into the system",
                  "Writing progress is tracked by both AI (objective) and teachers (subjective)",
                  "AI reminds students to complete their homework",
                  "Directors can see homework completion at a glance through graphs",
                  "Academic performance is available instantly with one click",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
