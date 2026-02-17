import { Github, Linkedin, Mail } from "lucide-react"; // Swapped Twitter for Mail

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border/50">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-body">
        © 2026 <span className="text-primary font-semibold">Ritesh Bamola</span>
        . Built for scale.
      </p>
      <div className="flex gap-6">
        {[
          { Icon: Github, href: "https://github.com/riteshbamola" },
          { Icon: Linkedin, href: "https://linkedin.com/in/riteshbamola" },
          { Icon: Mail, href: "mailto:riteshbamola121@gmail.com" },
        ].map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
