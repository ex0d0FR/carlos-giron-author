import { User } from 'lucide-react';
import { siteContent } from '../../content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function About() {
  const { author } = siteContent;
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="autor"
      className="animate-on-scroll section-padding bg-slate-50 dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Author Photo */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 
                           bg-primary-500/10 dark:bg-primary-400/10 
                           rounded-full mb-6">
              <User className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                Sobre el Autor
              </span>
            </div>
            
            {/* Title */}
            <h2 className="heading-lg text-slate-900 dark:text-white mb-6">
              {author.name}
            </h2>
            
            {/* Bio */}
            <div className="text-body text-slate-600 dark:text-slate-300 space-y-4">
              {author.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
          
          {/* Author Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 
                             border-2 border-primary-500/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 
                             border-2 border-primary-500/20 rounded-xl" />
              
              {/* Image Container */}
              <div className="relative aspect-square max-w-md mx-auto 
                              rounded-2xl overflow-hidden shadow-xl
                              transform group-hover:scale-[1.02] 
                              transition-transform duration-500">
                <img 
                  src={author.photo}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                               from-primary-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}