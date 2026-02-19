export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface BookInfo {
  title: string;
  subtitle: string;
  description: string;
  amazonUrl: string;
  coverImage: string;
}

export interface AuthorInfo {
  name: string;
  bio: string;
  photo: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  book: BookInfo;
  author: AuthorInfo;
  footer: {
    copyright: string;
    socialLinks: SocialLink[];
  };
}
