/**
 * Client-side SEO metadata manager for Vue SPA.
 * Updates document title, meta tags, Open Graph, Twitter cards, and canonical links.
 */

export interface SeoRouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://amankumarpro.netlify.app';
const DEFAULT_IMAGE = `${BASE_URL}/photo.png`;
const DEFAULT_IMAGE_ALT = 'Aman Kumar — Data Science and Software Engineering Student at IIT Madras';

export const routeSeoMap: Record<string, SeoRouteMeta> = {
  home: {
    title: 'Aman Kumar | Portfolio — Data Science & Software Engineering | IITM BS',
    description: 'Official portfolio of Aman Kumar (Aman Kumar Pro) — BS in Data Science and Applications at IIT Madras (IITM). Explore projects in software engineering, AI, PyPI packages, and aerospace research.',
    canonicalPath: '/',
    ogType: 'website',
  },
  projects: {
    title: 'Projects | Aman Kumar Portfolio — Software Systems & PyPI Packages',
    description: 'Explore software engineering, data science, and AI projects by Aman Kumar (IITM), including the Nopper AI CLI on PyPI, JEE Counselling Platform, and Trekking Management System.',
    canonicalPath: '/projects',
    ogType: 'website',
  },
  education: {
    title: 'Education & IITM BS Degree | Aman Kumar Portfolio — IIT Madras',
    description: 'Academic education, formal credentials, and progressive coursework of Aman Kumar pursuing a BS in Data Science and Applications at IIT Madras (IITM).',
    canonicalPath: '/education',
    ogType: 'website',
  },
  experience: {
    title: 'Experience & Research | Aman Kumar Portfolio — AVASYA Aerospace & IITM',
    description: 'Chronological research experience of Aman Kumar at AVASYA Aerospace Society (IIT Madras), selection for GCI World 2026 at The University of Tokyo, and entrepreneurial initiatives.',
    canonicalPath: '/experience',
    ogType: 'website',
  },
  profiles: {
    title: 'Coding Profiles & Ratings | Aman Kumar Pro — Codeforces, AtCoder, GitHub',
    description: 'Competitive programming ratings and developer profiles for Aman Kumar (Aman Kumar Pro) across Codeforces, AtCoder, CodeChef, GitHub, PyPI, and Kaggle.',
    canonicalPath: '/profiles',
    ogType: 'profile',
  },
  contact: {
    title: 'Contact Aman Kumar | Software Engineering & Research Inquiries',
    description: 'Connect with Aman Kumar (IIT Madras BS in Data Science) for software engineering internships, AI research collaborations, and open-source opportunities.',
    canonicalPath: '/contact',
    ogType: 'website',
  },
  notFound: {
    title: 'Page Not Found | Aman Kumar Portfolio',
    description: 'The requested page could not be found.',
    canonicalPath: '/',
    noindex: true,
  },
};

export function updateSeo(meta: SeoRouteMeta): void {
  if (typeof document === 'undefined') return;

  // 1. Update Title
  document.title = meta.title;

  // Helper for <meta> tags
  const setMeta = (attributeName: 'name' | 'property', attributeValue: string, content: string) => {
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Helper for <link> tags
  const setLink = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  const canonicalUrl = meta.canonicalPath === '/' 
    ? `${BASE_URL}/` 
    : `${BASE_URL}${meta.canonicalPath.startsWith('/') ? meta.canonicalPath : '/' + meta.canonicalPath}`.replace(/\/$/, '');

  // 2. Primary Meta Tags
  setMeta('name', 'description', meta.description);

  // 3. Robots
  if (meta.noindex) {
    setMeta('name', 'robots', 'noindex, nofollow');
  } else {
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  // 4. Canonical URL
  setLink('canonical', canonicalUrl);

  // 5. Open Graph / Facebook / LinkedIn
  setMeta('property', 'og:site_name', 'Aman Kumar Portfolio');
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', meta.ogType || 'website');
  setMeta('property', 'og:image', meta.ogImage || DEFAULT_IMAGE);
  setMeta('property', 'og:image:alt', meta.ogImageAlt || DEFAULT_IMAGE_ALT);
  setMeta('property', 'og:locale', 'en_US');

  // 6. Twitter / X Card
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  setMeta('name', 'twitter:url', canonicalUrl);
  setMeta('name', 'twitter:image', meta.ogImage || DEFAULT_IMAGE);
  setMeta('name', 'twitter:image:alt', meta.ogImageAlt || DEFAULT_IMAGE_ALT);
}

