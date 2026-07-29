export interface TrackRecordStat {
  value: string;
  label: string;
}

export interface PartnerLogo {
  name: string;
  logo: string;
}

export interface DomainExpertise {
  id: string;
  title: string;
  iconName: string;
}

export interface CourseSegmentation {
  id: string;
  title: string;
  tags: string;
  image: string;
}

export interface StrategicTarget {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DeliveryStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  category: string;
  items: FAQItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

export const TRACK_RECORD_STATS: TrackRecordStat[] = [
  {
    value: "10K+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    label: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    label: "Active Learners Engaged In Dynamic Courses",
  },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    name: "Reliance Industries Limited",
    logo: "/accredian/imgi_3_rel.png",
  },
  {
    name: "HCL Technologies",
    logo: "/accredian/imgi_4_hcl.png",
  },
  {
    name: "IBM",
    logo: "/accredian/imgi_5_ibm.png",
  },
  {
    name: "CRIF",
    logo: "/accredian/imgi_6_crif.png",
  },
  {
    name: "ADP",
    logo: "/accredian/imgi_7_adp.svg",
  },
  {
    name: "Bayer",
    logo: "/accredian/imgi_8_bayer.svg",
  },
];

export const DOMAIN_EXPERTISE: DomainExpertise[] = [
  {
    id: "product-innovation",
    title: "Product & Innovation Hub",
    iconName: "Lightbulb",
  },
  {
    id: "gen-ai-mastery",
    title: "Gen-AI Mastery",
    iconName: "Brain",
  },
  {
    id: "leadership-elevation",
    title: "Leadership Elevation",
    iconName: "Users",
  },
  {
    id: "tech-data-insights",
    title: "Tech & Data Insights",
    iconName: "BarChart3",
  },
  {
    id: "operations-excellence",
    title: "Operations Excellence",
    iconName: "Settings",
  },
  {
    id: "digital-enterprise",
    title: "Digital Enterprise",
    iconName: "Globe",
  },
  {
    id: "fintech-innovation",
    title: "Fintech Innovation Lab",
    iconName: "Wallet",
  },
];

export const COURSE_SEGMENTATION: CourseSegmentation[] = [
  {
    id: "program-specific",
    title: "Program Specific",
    tags: "Certificate, Executive, Post Graduate Certificate",
    image: "/accredian/imgi_11_project-management-v2.webp",
  },
  {
    id: "industry-specific",
    title: "Industry Specific",
    tags: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/accredian/imgi_12_digital-transformation-v2.webp",
  },
  {
    id: "topic-specific",
    title: "Topic Specific",
    tags: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/accredian/imgi_13_data-science-v2.webp",
  },
  {
    id: "level-specific",
    title: "Level Specific",
    tags: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/accredian/imgi_14_senior-management-v2.webp",
  },
];

export const STRATEGIC_TARGETS: StrategicTarget[] = [
  {
    id: "tech-prof",
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    iconName: "MonitorCheck",
  },
  {
    id: "non-tech-prof",
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    iconName: "MonitorX",
  },
  {
    id: "emerging-prof",
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    iconName: "GraduationCap",
  },
  {
    id: "senior-prof",
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    iconName: "Briefcase",
  },
];

export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    id: "step-1",
    stepNumber: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    iconName: "TrendingUp",
  },
  {
    id: "step-2",
    stepNumber: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    iconName: "Monitor",
  },
  {
    id: "step-3",
    stepNumber: "3",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    iconName: "Tv",
  },
];

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "course",
    category: "About the Course",
    items: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer: "Accredian offers custom corporate training in Product Management, GenAI, Data Science, AI, Leadership, and Digital Transformation tailored to executive and workforce upskilling needs.",
      },
      {
        question: "What domain specializations are available?",
        answer: "Our specializations cover Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation.",
      },
      {
        question: "Can programs be customized for our company's specific stack?",
        answer: "Yes, all curriculum modules are tailored after a thorough Skill Gap Analysis to align with your organization's tools, workflows, and industry goals.",
      },
    ],
  },
  {
    id: "delivery",
    category: "About the Delivery",
    items: [
      {
        question: "How are the training sessions delivered?",
        answer: "Programs are delivered via Live Virtual Cohorts, On-Premise Executive Workshops, or Hybrid learning models led by global industry experts.",
      },
      {
        question: "What is the typical duration of an enterprise cohort?",
        answer: "Durations range from 2-day intensive executive masterclasses to 3-month comprehensive corporate upskilling programs.",
      },
    ],
  },
  {
    id: "misc",
    category: "Miscellaneous",
    items: [
      {
        question: "How do we get started with Accredian Enterprise?",
        answer: "Click 'Enquire Now' anywhere on this page, fill out your organization's details, and an Accredian Enterprise Advisor will contact you within 24 hours.",
      },
      {
        question: "Are certificates provided upon completion?",
        answer: "Yes, all successful participants receive Accredian Industry-Recognized Credentials and digital badges upon program completion.",
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Accredian's tailored executive programs enabled our leadership teams to adopt AI-driven strategy seamlessly across our operational hubs.",
    author: "Rahul Sharma",
    role: "VP of Human Resources",
    company: "ADP",
    logo: "/accredian/imgi_7_adp.svg",
  },
  {
    id: "2",
    quote: "The practical case studies and expert mentorship provided our tech division with immediate, high-impact ROI in data analytics.",
    author: "Priya Nair",
    role: "Head of Learning & Development",
    company: "Bayer",
    logo: "/accredian/imgi_8_bayer.svg",
  },
  {
    id: "3",
    quote: "Our workforce capability elevated significantly within weeks. Accredian's structured CAT Framework is unmatched in corporate upskilling.",
    author: "Amitabh Verma",
    role: "Chief Digital Officer",
    company: "Reliance Industries",
    logo: "/accredian/imgi_3_rel.png",
  },
];
