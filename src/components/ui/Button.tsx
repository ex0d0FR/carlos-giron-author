import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '',
  external = false 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center px-6 py-3 
    font-medium rounded-lg
    transition-all duration-300 ease-in-out
    transform hover:scale-105 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-primary-600 hover:bg-primary-700 
      text-white
      focus:ring-primary-500
    `,
    secondary: `
      border-2 border-primary-500 text-primary-500 
      hover:bg-primary-500 hover:text-white
      dark:border-primary-400 dark:text-primary-400
      dark:hover:bg-primary-400 dark:hover:text-white
      focus:ring-primary-500
    `
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedStyles}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
