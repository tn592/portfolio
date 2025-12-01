import { RiDiscordLine } from "react-icons/ri";
import { Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Whether you're offering a role or exploring collaboration, I’m open to
          opportunities that help me grow as a software engineer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            {/* Email */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:cl1075023@gmail.com"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    cl1075023@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4">Find Me Online</h4>
              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/tanzina-akter-12ab2b395/"
                  target="_blank"
                  className="p-2 rounded-full bg-card shadow-sm hover:text-primary hover:shadow-md transition"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://x.com/tn5942"
                  target="_blank"
                  className="p-2 rounded-full bg-card shadow-sm hover:text-primary hover:shadow-md transition"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="https://discord.com/users/760576934320668672"
                  target="_blank"
                  className="p-2 rounded-full bg-card shadow-sm hover:text-primary hover:shadow-md transition"
                >
                  <RiDiscordLine size={24} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-md border border-border/50"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="user@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I’d like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
