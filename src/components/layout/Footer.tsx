import { SocialLinks } from '../ui/SocialLinks';
import { ThemeToggle } from '../ui/ThemeToggle';
import { siteContent } from '../../content';

export function Footer() {
  const { footer, author } = siteContent;

  return (
    <footer 
      id="contacto"
      className="bg-slate-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Author Name */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold mb-2">
              {author.name}
            </h3>
            <p className="text-slate-400 text-sm">
              Autor de Paternidad
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks links={footer.socialLinks} size="md" />
          </div>
          
          {/* Theme Toggle */}
          <div className="flex justify-center md:justify-end">
            <ThemeToggle />
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            {footer.copyright}
          </p>
          <p className="text-slate-400 text-sm mt-2 flex items-center justify-center gap-1">
            Hecho con ❤️ 🇬🇹 por{' '}
            <a 
              href="https://engadi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              engadi.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}