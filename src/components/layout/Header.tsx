import { ThemeToggle } from '../ui/ThemeToggle';
import { siteContent } from '../../content';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 
                       bg-white/80 dark:bg-dark-bg/80 
                       backdrop-blur-md border-b 
                       border-slate-200 dark:border-dark-border
                       transition-colors duration-300">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a href="#" className="font-display text-xl md:text-2xl font-bold 
                                text-slate-900 dark:text-white
                                hover:text-primary-500 dark:hover:text-primary-400
                                transition-colors">
            {siteContent.author.name}
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#libro" 
               className="text-slate-600 dark:text-slate-300 
                          hover:text-primary-500 dark:hover:text-primary-400
                          transition-colors font-medium">
              El Libro
            </a>
            <a href="#autor" 
               className="text-slate-600 dark:text-slate-300 
                          hover:text-primary-500 dark:hover:text-primary-400
                          transition-colors font-medium">
              Sobre el Autor
            </a>
            <a href="#contacto" 
               className="text-slate-600 dark:text-slate-300 
                          hover:text-primary-500 dark:hover:text-primary-400
                          transition-colors font-medium">
              Contacto
            </a>
          </nav>
          
          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
