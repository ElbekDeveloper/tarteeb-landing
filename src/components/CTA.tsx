"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const nameParts = formData.name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const id = crypto.randomUUID();

      const payload = {
        id: id,
        firstName,
        lastName,
        phone: formData.phone,
        otherDetails: formData.notes,
        createdDate: new Date().toISOString(),
        companyId: "a9c94c1b-53f7-40a0-abdb-c3d7c0f96064",
      };

      const response = await fetch(
        "https://tarteeb-portal-prod.azurewebsites.net/companies/a9c94c1b-53f7-40a0-abdb-c3d7c0f96064/instagram-leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", notes: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 relative">
      {/* <section className="py-20 px-4 bg-gradient-to-br from-[#97F6F6] to-[#1DFCC8] relative"> */}
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main CTA Content */}
        <div className="text-white mb-12 z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <br />
            Your Workflow?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who have already revolutionized their
            productivity with Tarteeb.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto z-10 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2 items-start">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label
                htmlFor="phone"
                className="block text-white text-sm font-medium mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label
                htmlFor="notes"
                className="block text-white text-sm font-medium mb-2"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </Button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-green-300 text-sm font-medium">
                Thank you! Your information has been submitted successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-300 text-sm font-medium">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 opacity-3 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-white/10 opacity-2 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/10  w-64 h-64 bg-white/10 opacity-2 rounded-full animate-pulse delay-500 z-0"></div>
      </div>
    </section>
  );
}
