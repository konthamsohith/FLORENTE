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
    title: 'FISrente Marketing Labs LLP',
    shortName: 'Marketing Labs',
    description: 'A leading player in sustainable energy and infrastructure development, providing end-to-end solutions for a greener future.',
    icon: <HardHat size={32} />,
    image: '/marketing_labs_solar_energy_1775411828713.png',
    subServices: ['Solar Energy', 'Infrastructure', 'MEP', 'Interior Design'],
    caseStudy: {
      tag: 'Sustainable Energy',
      title: 'Guided EcoGreen Power in meeting sustainability goals, increasing efficiency by 35%.',
    },
    impactStat: { value: '45%', label: 'improvement in sustainability ratings' },
    testimonial: {
      quote: "Their commitment to sustainability has helped us align our financial goals with environmental responsibility.",
      avatar: '/avatar_robert_hayes_1775590403482.png',
      author: 'Robert Hayes',
      role: 'COO, EcoGreen Power',
    }
  },
  {
    slug: 'properties',
    title: 'FISrente PROPERTIES LLP',
    shortName: 'Properties',
    description: 'Your premier real estate advisory firm bridging the gap between luxury living in Dubai and strategic investments in India.',
    icon: <Home size={32} />,
    image: '/properties_dubai_luxury_realestate_1775411853341.png',
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
    title: 'FISrente A CONSULTANT LLP',
    shortName: 'Consultancy',
    description: 'Connecting top-tier talent with world-class organizations across insurance, banking, and software industries.',
    icon: <UserPlus size={32} />,
    image: '/consultant_recruitment_banking_1775411878440.png',
    subServices: ['Manpower', 'Recruitment', 'Banking', 'Software Personnel'],
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
    title: 'FISrente WEALTH SERVICE LLP',
    shortName: 'Wealth Service',
    description: 'Dedicated to helping individuals and families grow, protect, and manage their wealth through expert-led fund advisory.',
    icon: <TrendingUp size={32} />,
    image: '/wealth_service_financial_planning_1775411901441.png',
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
    title: 'FISrente ENTERTAINMENTS LLP',
    shortName: 'Entertainments',
    description: 'Transforming creative visions into cinematic masterpieces. Focused on meaningful content that captures the human experience.',
    icon: <Camera size={32} />,
    image: '/entertainment_film_production_set_1775411922771.png',
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
