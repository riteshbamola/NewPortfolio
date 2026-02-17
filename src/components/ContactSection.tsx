import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // 1️⃣ Send message to you
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // 2️⃣ Send auto reply to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Let's <span className="gradient-text italic">Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 glow-box"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-center text-muted-foreground">
                {status}
              </p>
            )}
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-border/50">
            <a
              href="mailto:riteshbamola121@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              riteshbamola121@gmail.com
            </a>

            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} />
              Dehradun, Uttarakhand
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
