import React from 'react';
import { 
  UserPlus, 
  TrendingUp, 
  Home, 
  Camera,
  HardHat
} from 'lucide-react';

export interface Division {
  slug: string;
  title: string;
  shortName: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  subServices: string[];
  caseStudy: {
    tag: string;
    title: string;
  };
  impactStat: {
    value: string;
    label: string;
  };
  testimonial: {
    quote: string;
    avatar: string;
    author: string;
    role: string;
  };
}

export const divisions: Division[] = [
  {
    slug: 'marketing-labs',
    title: 'Florente Marketing Labs LLP',
    shortName: 'Florente Marketing Labs',
    description: 'Florente Marketing Labs LLP specializes in promoting and selling a diverse range of high-quality products and services. Our portfolio includes insurance, Enagic wellness systems, TML water solutions, Hisense appliances, and hydroponic farming solutions.',
    icon: <HardHat size={32} />,
    image: '/Marketing Labs.png',
    heroBadge: '',
    heroTitle: '',
    heroSubtitle: '',
    subServices: ['Insurance', 'Enagic Wellness', 'TML Water Solutions', 'Hisense Appliances', 'Hydroponics'],
    caseStudy: {
      tag: 'Market Expansion',
      title: 'Established a dominant market presence for global appliance brands across major regions.',
    },
    impactStat: { value: '98%', label: 'reliable customer support rating' },
    testimonial: {
      quote: "Florente's expertise in market presence and customer support has been instrumental in our brand's sustainable growth.",
      avatar: '/avatar_robert_hayes_1775590403482.png',
      author: 'Robert Hayes',
      role: 'CEO, Global Appliances',
    }
  },
  {
    slug: 'properties',
    title: 'Florente PROPERTIES LLP',
    shortName: 'Florente Properties',
    description: 'Your premier real estate advisory firm bridging the gap between luxury living in Dubai and strategic investments in India.',
    icon: <Home size={32} />,
    image: '/properties.jpeg',
    heroBadge: '',
    heroTitle: '',
    heroSubtitle: '',
    subServices: ['Dubai Real Estate', 'Advisory', 'Emaar Partner', 'Investment'],
    caseStudy: {
      tag: 'Global Real Estate',
      title: 'Successfully portfolio-diversified top investors with high-yield Dubai properties.',
    },
    impactStat: { value: '22%', label: 'average annual portfolio growth' },
    testimonial: {
      quote: "Florente's insight into the Dubai market was invaluable for our international expansion.",
      avatar: '/avatar_mohamed_sultan_1775590419943.png',
      author: 'Mohamed Sultan',
      role: 'Director, Sultan Holdings',
    }
  },
  {
    slug: 'consultancy',
    title: 'Florente A CONSULTANT LLP',
    shortName: 'Florente Consultant',
    description: 'Florente A Consultant LLP provides manpower and placement services across key industries including insurance, banking, and software. We bridge the gap between skilled professionals and top organizations, ensuring mutual growth through ethical and efficient recruitment practices.',
    icon: <UserPlus size={32} />,
    image: '/A Consultant.png',
    heroBadge: '',
    heroTitle: '',
    heroSubtitle: '',
    subServices: ['Insurance', 'Banking', 'Software', 'Manpower', 'Placement Services'],
    caseStudy: {
      tag: 'Talent Acquisition',
      title: 'Built the foundational leadership team for a Fortune 500 Fintech branch in India.',
    },
    impactStat: { value: '500+', label: 'specialist roles placed in last 12 months' },
    testimonial: {
      quote: "The quality of talent provided by Florente has transformed our operational efficiency.",
      avatar: '/avatar_ananya_kapoor_1775590437503.png',
      author: 'Ananya Kapoor',
      role: 'HR Head, Global Finance',
    }
  },
  {
    slug: 'wealth-service',
    title: 'Florente WEALTH SERVICE LLP',
    shortName: 'Florente Wealth Service',
    description: 'Dedicated to helping individuals and families grow, protect, and manage their wealth through expert-led fund advisory.',
    icon: <TrendingUp size={32} />,
    image: '/Wealth Service.png',
    heroBadge: '',
    heroTitle: '',
    heroSubtitle: '',
    subServices: ['Mutual Funds', 'SIP', 'Retirement Planning', 'Monitoring'],
    caseStudy: {
      tag: 'Asset Management',
      title: 'Optimized retirement funds for 200+ HNI families with diverse risk-reward profiles.',
    },
    impactStat: { value: '₹150Cr+', label: 'assets under expert advisory' },
    testimonial: {
      quote: "Our family's financial future is secure thanks to the meticulous planning of Florente's wealth team.",
      avatar: '/avatar_vikram_reddy_1775590457878.png',
      author: 'Vikram Reddy',
      role: 'HNI Client',
    }
  },
  {
    slug: 'entertainments',
    title: 'Florente ENTERTAINMENTS LLP',
    shortName: 'Florente Entertainments',
    description: 'Transforming creative visions into cinematic masterpieces. Focused on meaningful content that captures the human experience.',
    icon: <Camera size={32} />,
    image: '/entertainment.jpeg',
    heroBadge: '',
    heroTitle: '',
    heroSubtitle: '',
    subServices: ['Film Production', 'KIRAYI Project', 'Storytelling', 'Cinema'],
    caseStudy: {
      tag: 'Media Production',
      title: 'Launched the KIRAYI Project, a national-level documentary series gaining critical acclaim.',
    },
    impactStat: { value: '1M+', label: 'combined viewership for KIRAYI series' },
    testimonial: {
      quote: "Florente's dedication to authentic storytelling is a breath of fresh air in the film industry.",
      avatar: '/avatar_sanjay_kumar_1775590475778.png',
      author: 'Sanjay Kumar',
      role: 'Creative Producer',
    }
  }
];
