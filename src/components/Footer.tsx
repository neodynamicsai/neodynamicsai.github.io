import { Github, Linkedin, type LucideProps } from "lucide-react";

const XIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" {...props}>
    <path
      d="M18.244 2H21l-7.98 8.975L21.564 22h-6.212l-5.618-7.09L3.11 22H0l8.468-9.478L0.373 2h6.37l5.086 6.604L18.244 2Z"
      fill="currentColor"
    />
  </svg>
);

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/neodynamicsai", icon: Linkedin },
  { label: "X", href: "https://x.com/neodynamics_ai", icon: XIcon },
  { label: "GitHub", href: "https://github.com/neodynamicsai/", icon: Github },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span className="text-center sm:text-left">© 2025 NeoDynamics</span>
          <nav className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
