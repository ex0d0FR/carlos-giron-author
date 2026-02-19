import { Instagram, Twitter, Facebook, Linkedin, Youtube, Mail } from 'lucide-react';
import { SocialLink } from '../../types';

interface SocialLinksProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  email: Mail,
};

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export function SocialLinks({ links, size = 'md' }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => {
        const IconComponent = iconMap[link.icon] || Mail;
        
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 rounded-full
              transition-all duration-300
              hover:bg-primary-500/10 dark:hover:bg-primary-400/10
              hover:text-primary-500 dark:hover:text-primary-400
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              dark:focus:ring-offset-dark-bg
            `}
            aria-label={link.name}
          >
            <IconComponent className={sizeClasses[size]} />
          </a>
        );
      })}
    </div>
  );
}
