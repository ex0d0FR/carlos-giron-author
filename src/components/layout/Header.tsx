import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { siteContent } from '../../content';

const navLinks = [
  { href: '#libro', label: 'El Libro' },
  { href: '#autor', label: 'Sobre el Autor' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when a nav link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50
                       bg-white/80 dark:bg-dark-bg/80
                       backdrop-blur-md border-b
                       border-slate-200 dark:border-dark-border
                       transition-colors duration-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-bold
                       text-slate-900 dark:text-white
                       hover:text-primary-600 dark:hover:text-primary-400
                       transition-colors"
          >
            {siteContent.author.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-600 dark:text-slate-300
                           hover:text-primary-600 dark:hover:text-primary-400
                           transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-full
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-100 dark:hover:bg-slate-800
                         transition-colors"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="section-container pb-4 flex flex-col gap-1
                        border-t border-slate-200 dark:border-dark-border pt-3">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg font-medium
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-100 dark:hover:bg-slate-800
                         hover:text-primary-600 dark:hover:text-primary-400
                         transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
