export type Project = {
  id: string;
  title: string;
  category:
    | "E-Commerce"
    | "Internal Tool"
    | "AI & Automation"
    | "Service"
    | "Corporate"
    | "Dashboard"
    | "Education";
  short: string;
  description: string[];
  impact?: string[];
  tech: string[];
  url?: string;
  img?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "bluestar",
    title: "Bluestar — Feedback Forms Platform",
    category: "Internal Tool",
    short:
      "Centralize Super admin dashboard to manage customer feedback and analytics.",
    description: [
      "Developed a super admin dashboard to automate and centralize Bluestar's customer feedback system, transforming manual survey processes into a data-driven platform.",
      "Implemented modules for collecting feedback directly from customers and generating analytics to enhance operational efficiency and data-driven decision-making.",
      "Reduced manual workload by 80% through process automation and real-time data visualization.",
    ],

    impact: [
      "80% reduction in manual workload",
      "Real-time analytics & summarization",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "AWS",
      "React Query",
      "Shadcn",
    ],
    img: "./images/projects/bluestar.png",
    featured: true,
  },
  {
    id: "salon-booking",
    title: "Services Booking — Salons",
    category: "Service",
    short: "Complete salon booking & admin management platform.",
    description: [
      "Designed and developed a complete salon management platform to manage bookings, customers, coupons, and service catalogues.",
      "Built an admin dashboard for tracking sales reports, booking analytics, and customer messages.",
      "Implemented an online booking system where users can schedule services and track booking status in their account, with bookings managed and approved by the admin.",
    ],
    impact: ["Automated 90% of booking workflows", "Improved client retention"],
    tech: ["Next.js", "TypeScript", "Node.js", "Appwrite", "Shadcn", "Vercel"],
    img: "./images/projects/vista.png",
    featured: true,
  },

  {
    id: "aurawear",
    title: "Aurawear — B2C E-Commerce Platform",
    category: "E-Commerce",
    short:
      "Headless Shopify/Wix commerce with loyalty programs and fulfillment tracking.",
    description: [
      "Developed a consumer-facing e-commerce platform using Shopify and Wix as headless CMS, built with Next.js, Shadcn, TypeScript, and React Query for fast and scalable performance.",
      "Implemented advanced features including inventory management, order tracking, POS system, abandoned cart recovery, loyalty points, gift cards, GA4 analytics, and role-based admin access.",
      "Designed and developed the Fulfillment Flow to streamline order packaging, shipment tracking, and printing, integrated with Razorpay for a secure checkout experience, and CMS-powered blogs for SEO and content marketing.",
    ],
    impact: [
      "+35% returning customers through loyalty points",
      "-28% cart abandonment via recovery automation",
      "35% faster order fulfillment using the custom F3 workflow",
    ],
    tech: [
      "Next.js",
      "Shopify",
      "Wix Headless",
      "Razorpay",
      "GA4",
      "TypeScript",
      "React Query",
      "Shadcn",
    ],
    img: "./images/projects/aurawear.png",
    featured: true,
  },
  {
    id: "optimix",
    title: "Optimix Opticals — B2B Vendor Portal",
    category: "E-Commerce",
    short: "Vendor-only wholesale platform for optical distributors.",
    description: [
      "Developed a secure B2B e-commerce portal for verified optical vendors using Wix as a headless CMS and Next.js for the front-end interface.",
      "Implemented vendor verification, bulk order functionality, and product management workflows tailored for wholesale operations.",
      "Integrated an admin dashboard via Wix for centralized control of product listings, vendor access, and reporting.",
    ],
    impact: [
      "60% reduction in manual order processing",
      "Improved vendor management efficiency and bulk purchase handling",
    ],
    tech: [
      "Next.js",
      "Wix Headless",
      "MongoDB",
      "TypeScript",
      "Shadcn",
      "React Query",
    ],
    img: "./images/projects/optimixopticals.png",
  },

  {
    id: "green",
    title: "Green — B2B Beauty E-Commerce Platform",
    category: "E-Commerce",
    short: "Wholesale platform for verified salons and beauty professionals.",
    description: [
      "Developed a B2B e-commerce platform for cosmetic and beauty product distribution.",
      "Implemented vendor verification, bulk ordering, and catalogue management designed for professional salons and spa vendors.",
      "Integrated an admin panel for managing product listings, vendor access, and discount modules tailored to B2B operations.",
    ],
    impact: [
      "Improved ordering efficiency and vendor management across professional clients",
      "Enabled streamlined access for verified vendors with personalized product visibility",
    ],
    tech: ["Next.js", "Wix Headless", "MongoDB", "TypeScript", "Shadcn"],
    img: "./images/projects/greencosmo.png",
  },

  {
    id: "venedor",
    title: "Venedor — Logistics & Finance Automation MVP",
    category: "AI & Automation",
    short: "MVP for AI-powered logistics, finance, and invoice automation.",
    description: [
      "Developed an MVP for an internal enterprise platform to automate logistics, finance, and operational workflows.",
      "Built core modules for invoice tracking, cash flow monitoring, and cross-currency ledgers integrated with OCR-based data extraction.",
      "Delivered AI-assisted analytics for reporting and insights, demonstrating efficiency gains through workflow automation.",
    ],
    impact: [
      "90% reduction in manual data entry during MVP testing",
      "Proved potential for improved financial accuracy and operational visibility",
    ],
    tech: [
      "Node.js",
      "OpenAI",
      "OCR",
      "MongoDB",
      "TypeScript",
      "Shadcn",
      "Vercel",
      "Next.js",
      "GCP",
    ],
    img: "/images/projects/venedor.png",
    featured: true,
  },

  {
    id: "codeledger",
    title: "CodeLedger — Enterprise Analytics Dashboard",
    category: "Dashboard",
    short:
      "Interactive analytics dashboard for enterprise data visualization and reporting.",
    description: [
      "Designed and developed scalable, user-friendly interfaces using React.js, Tailwind CSS, and Ant Design.",
      "Implemented dynamic and interactive data visualizations with Recharts, D3, and Nivo Charts to enhance analytical insights.",
      "Integrated REST APIs to enable seamless data flow and communication across multiple dashboard modules.",
    ],
    impact: [
      "Improved data interpretation and decision-making for enterprise users",
      "Enhanced user engagement with real-time, interactive chart components",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Ant Design",
      "D3.js",
      "Recharts",
      "Nivo Charts",
    ],
    img: "/images/projects/codeledger.png",
  },
  {
    id: "panlearn",
    title: "PanLearn — E-Learning Platform",
    category: "Education",
    short:
      "Responsive e-learning platform with CMS-powered content management.",
    description: [
      "Developed a responsive, engaging e-learning interface using Next.js, HTML, CSS, and JavaScript.",
      "Integrated Strapi CMS to streamline content creation, course management, and delivery workflows.",
      "Optimized the front-end for faster load times and improved accessibility across devices.",
    ],
    impact: [
      "Enabled educators to manage content more efficiently through CMS integration",
      "Delivered a smooth, user-friendly learning experience across devices",
    ],
    tech: ["Next.js", "Strapi CMS", "HTML", "CSS", "JavaScript"],
    img: "/images/projects/panlearn.png",
  },

  {
    id: "uptiza",
    title: "Uptiza — Heavy Machinery Rentals (UAE)",
    category: "Corporate",
    short: "Lead-generation platform for heavy machinery rentals in the UAE.",
    description: [
      "Developed a lead-focused platform for heavy equipment rentals featuring dynamic product showcases and integrated inquiry forms.",
      "Optimized landing pages and CTAs to improve user engagement and lead conversion rates across Dubai's construction industry.",
      "Delivered a fully responsive and SEO-optimized website to drive visibility and inbound rental inquiries.",
    ],
    impact: [
      "2.5x increase in lead generation",
      "Improved customer inquiry response rate",
    ],
    tech: ["Next.js", "Tailwind", "SEO", "Vercel"],
    img: "/images/projects/uptiza.png",
  },
  {
    id: "azcuit",
    title: "Azcuit — Tech Repair & PC Builds",
    category: "Service",
    short: "Tech repair and custom PC-building platform with lead management.",
    description: [
      "Built a service-based platform for managing PC repair requests and custom build inquiries.",
      "Developed interactive inquiry forms and a lead management dashboard to streamline customer communication and tracking.",
      "Enabled efficient service handling with clear workflows for request submission, response, and follow-up.",
    ],
    impact: ["Faster lead processing and improved service request tracking"],
    tech: ["React.js", "Tailwind CSS", "Strapi", "TypeScript"],
    img: "/images/projects/azcuit.png",
  },
  {
    id: "greenchip",
    title: "GreenChip — Corporate & Educational Portfolio",
    category: "Corporate",
    short:
      "Corporate and course catalog website with lead capture functionality.",
    description: [
      "Designed and developed a portfolio website showcasing services and educational courses for an electronics and training company.",
      "Implemented a CMS-driven architecture for easy content updates and course management.",
      "Integrated responsive layouts, course listings, and lead capture forms to improve user engagement and conversions.",
    ],
    impact: [
      "Enhanced brand visibility and lead engagement",
      "Improved content management efficiency via CMS",
    ],
    tech: ["React.js", "Tailwind CSS", "Strapi", "Tailwind"],
    img: "/images/projects/greenchip.png",
  },
];

export const CATEGORIES = [
  "All",
  "E-Commerce",
  "Internal Tool",
  "AI & Automation",
  "Service",
  "Corporate",
  "Dashboard",
  "Education",
];
