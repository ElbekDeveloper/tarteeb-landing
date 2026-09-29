import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lingo Pro LC - Bukhara",
      role: "SEO",
      company: "Lingo Pro LC - Bukhara",
      image: "/api/placeholder/40/40",
      rating: 5,
      text: "Never have I thought that tarteeb website would be of so much importance to the way we do our job. rarely a day passes without parents being notified about how successful their children are doing in our center.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Lead",
      company: "Smart School - Farg'ona",
      image: "/api/placeholder/40/40",
      rating: 5,
      text: "Tarteeb is a thoughtfully designed platform built to streamline the work of educational centers. It helps us stay closely connected with students and their parents, making it the smart choice for both",
    },
    {
      name: "Emily Watson",
      role: "Marketing Director",
      company: "Buxoro School - Tashkent",
      image: "/api/placeholder/40/40",
      rating: 5,
      text: "This platform has brought great value to our educational center, and our students’ parents couldn’t be happier. They receive automatic updates on their child’s attendance, even without internet access, directly to their mobile phones. With new features added regularly based on feedback, the platform keeps making our work easier every day.",
    },
  ];

  return (
    <section id="testimonials" className="py-10 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Users
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what teams around the world are saying about Tarteeb
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <p className="text-sm text-[#111] font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
