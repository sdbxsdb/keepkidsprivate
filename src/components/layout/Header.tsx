import { useEffect, useState } from "react";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2, IconShield, IconX } from "@tabler/icons-react";
import { SITE_NAME } from "../../content/copy";
import { scrollToSection } from "../../utils/scroll";

const NAV_LINKS = [
  { label: "What they can learn", href: "what-you-posted" },
  { label: "What they can do", href: "what-ai-can-do" },
  { label: "The Reality", href: "dont-believe-us" },
  { label: "Share safely", href: "ten-second-check" },
  { label: "The Stats", href: "final-cta" },
  { label: "Help spread the word", href: "help-spread-the-word" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    close();
    setTimeout(() => scrollToSection(id), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <a
              href="#top"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 rounded-lg flex items-center gap-2.5 cursor-pointer"
              aria-label={`${SITE_NAME} — back to top`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("top");
              }}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-warm-500/10 border border-warm-500/25">
                <IconShield
                  size={18}
                  className="text-warm-400"
                  aria-hidden="true"
                />
              </span>
              <span className="font-semibold text-white text-sm sm:text-base tracking-tight">
                {SITE_NAME}
              </span>
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-0.5"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg cursor-pointer
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 transition-colors duration-150"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 transition-colors"
              aria-label={opened ? "Close menu" : "Open menu"}
              aria-expanded={opened}
              aria-controls="mobile-nav"
              onClick={open}
            >
              <IconMenu2 size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <Drawer
        id="mobile-nav"
        opened={opened}
        onClose={close}
        title={
          <span className="font-semibold text-white flex items-center gap-2">
            <IconShield
              size={18}
              className="text-warm-400"
              aria-hidden="true"
            />
            {SITE_NAME}
          </span>
        }
        size="xs"
        position="right"
        closeButtonProps={{
          icon: <IconX size={18} aria-hidden="true" />,
          "aria-label": "Close navigation menu",
        }}
        styles={{
          root: { "--drawer-bg": "#0a0f1a" },
          header: {
            background: "#0a0f1a",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid #1e293b",
          },
          body: { background: "#0a0f1a", padding: "1rem 1.25rem" },
          close: { color: "#94a3b8" },
        }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 mt-2"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              className="flex items-center px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-left w-full cursor-pointer
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 transition-colors"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </Drawer>

      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}
