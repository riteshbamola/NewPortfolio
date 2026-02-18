import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Terminal, Twitter, X } from "lucide-react";

const links = ["About", "Projects", "Skills", "Contact"];
const NAV_HEIGHT = 64; // h-16

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/riteshbamola", label: "GitHub" },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/in/riteshbamola",
      label: "LinkedIn",
    },
    { Icon: Twitter, href: "https://x.com/RiteshBamola", label: "X (Twitter)" },
    { Icon: Mail, href: "mailto:riteshbamola121@gmail.com", label: "Email" },
  ] as const;

  const scrollTo = (id: string) => {
    const targetId = id.toLowerCase();
    const element = document.getElementById(targetId);
    if (!element) return;

    if (open) {
      setOpen(false);

      // Wait for animation to finish (match your motion duration)
      setTimeout(() => {
        smoothScroll(element);
      }, 300); // adjust if animation duration changes
    } else {
      smoothScroll(element);
    }
  };

  const smoothScroll = (element: HTMLElement) => {
    const offset = NAV_HEIGHT; // 64
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-bold text-primary flex items-center gap-2"
        >
          <Terminal size={18} className="text-primary" />
          <span className="tracking-tight">RB.root</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass px-6 pb-6 space-y-4 border-b border-white/5"
          >
            {links.map((l) => (
              <li key={l} className="pt-2">
                <button
                  onClick={() => scrollTo(l)}
                  className="block w-full text-left text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}

            <li className="pt-4">
              <div className="flex items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition-colors p-2"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
