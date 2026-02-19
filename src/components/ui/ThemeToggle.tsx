import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all duration-300 
                 hover:bg-slate-200 dark:hover:bg-slate-700
                 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 
                     ${theme === 'dark' 
                       ? 'opacity-0 rotate-90 scale-0' 
                       : 'opacity-100 rotate-0 scale-100 text-amber-500'}`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-300
                     ${theme === 'dark' 
                       ? 'opacity-100 rotate-0 scale-100 text-primary-400' 
                       : 'opacity-0 -rotate-90 scale-0'}`}
        />
      </div>
    </button>
  );
}
