"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40";

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
    <section id="contact" className="bg-gradient-to-br from-[#45d1db] to-[#28eaab] px-4 py-16 lg:py-28">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="text-[#004068]">
          <h2 className="text-3xl font-semibold text-[#004068] sm:text-4xl lg:text-5xl">
            Get your center set up.
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg text-[#004068]">
            Leave your name and phone number and our team will get in touch.
          </p>
        </div>

        <div className="rounded-2xl bg-card p-8 text-card-foreground shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)] sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={inputClass}
                placeholder="Aziza Karimova"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={inputClass}
                placeholder="+998 90 123 45 67"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="notes" className="text-sm font-medium">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="How many students and groups do you have?"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full text-base"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>

            <div aria-live="polite">
              {submitStatus === "success" && (
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Thank you! Your information has been submitted successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm font-medium text-destructive">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
