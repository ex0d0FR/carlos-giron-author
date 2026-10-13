import { ExternalLink, BookOpen } from 'lucide-react';
import { siteContent } from '../../content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Book() {
  const { book } = siteContent;
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="libro"
      className="animate-on-scroll section-padding bg-white dark:bg-dark-card transition-colors duration-300"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book Cover */}
          <div className="relative group">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 
                              rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 
                              transition-opacity duration-500" />
              
              {/* Book Image Container */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden 
                              shadow-2xl transform group-hover:scale-[1.02] 
                              transition-transform duration-500">
                <img 
                  src={book.coverImage}
                  alt={`Portada de ${book.title}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
          
          {/* Book Info */}
          <div className="text-center lg:text-left">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 
                           bg-primary-500/10 dark:bg-primary-400/10 
                           rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                El Libro
              </span>
            </div>
            
            {/* Title */}
            <h2 className="heading-lg text-slate-900 dark:text-white mb-4">
              {book.title}
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-6">
              {book.subtitle}
            </p>
            
            {/* Description */}
            <div className="text-body text-slate-600 dark:text-slate-300 mb-8 space-y-4">
              {book.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
            
            {/* CTA Button */}
            <a 
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Comprar en Amazon
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
