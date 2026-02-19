import { ChevronDown } from 'lucide-react';
import { siteContent } from '../../content';

export function Hero() {
  const { hero, book } = siteContent;

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-dark-bg via-slate-900 to-slate-800
                 dark:from-dark-bg dark:via-slate-900 dark:to-slate-800
                 light:from-white light:via-slate-50 light:to-slate-100
                 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 
                      bg-primary-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 
                      bg-primary-600/20 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '-3s' }} />
      
      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="heading-xl text-white dark:text-white light:text-slate-900
                         mb-6 animate-fade-in">
            <span className="text-gradient">{hero.title}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 dark:text-slate-300 
                        light:text-slate-600 mb-8 animate-fade-in"
             style={{ animationDelay: '0.2s' }}>
            {hero.subtitle}
          </p>
          
          {/* Author Name */}
          <p className="text-lg text-slate-400 dark:text-slate-400 
                        light:text-slate-500 mb-10 animate-fade-in"
             style={{ animationDelay: '0.3s' }}>
            Por <span className="text-primary-400 dark:text-primary-400 
                                 light:text-primary-600 font-semibold">
              {siteContent.author.name}
            </span>
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#libro"
              className="btn-primary text-lg px-8 py-4"
            >
              {hero.cta}
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
                        animate-bounce">
          <a href="#libro" className="text-slate-400 hover:text-primary-400 
                                      transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
