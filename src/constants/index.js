import { Mail, Instagram, Facebook, Linkedin, Youtube, Phone } from "lucide-react";

export const socialLinks = [
  {
    id: 6,
    Icon: Phone,
    link: "tel:+919673929867",
    gradient: ["#00ff00", "#66ff66"], // green shades
  },
  {
    id: 1,
    Icon: Mail,
    link: "mailto:bgadkane@gmail.com",
    gradient: ["#ff9900", "#ffcc00"], // orange-yellow
  },
  {
    id: 2,
    Icon: Instagram,
    link: "https://instagram.com/",
    gradient: ["#feda75", "#d62976"], // light orange to pink
  },
  {
    id: 3,
    Icon: Facebook,
    link: "https://facebook.com/",
    gradient: ["#1877F2", "#3b5998"], // FB blues
  },
  {
    id: 4,
    Icon: Linkedin,
    link: "https://linkedin.com/in/",
    gradient: ["#0077b5", "#00a0dc"], // LinkedIn blues
  },
  {
    id: 5,
    Icon: Youtube,
    link: "https://youtube.com/",
    gradient: ["#ff0000", "#cc0000"], // red tones
  },
];


export const NAV_LINKS = [
  { label: "Home", key: "hero" },
  { label: "About Me", key: "about" },
  { label: "Work", key: "work" },
  { label: "Testimonials", key: "testimonials" },
  { label: "Contact", key: "contact" },
];

export const WORK_DATA = [
  {
    suffix: "+",
    value: "10",
    label: "Years of Experience",
  },
  {
    suffix: "+",
    value: "8",
    label: "Worked Projects",
  },
  {
    suffix: "+",
    value: "100",
    label: "No of Clients",
  },
  {
    suffix: "%",
    value: "90",
    label: "Client Statisfaction",
  }
];

export const servicesLeft = [
  "Product Design",
  "User Experience Design",
  "Interaction Design"
];

export const servicesRight = [
  "Branding & Visual Identity Design",
  "Brand & Product Strategy",
  "Research & testing"
];

export const experiences = [
  {
    title: "QA/QC Engineer",
    company_name: "Expert Business Solutions",
    icon: "/company/enfinity.svg",
    iconBg: "#fff",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Test Engineer",
    company_name: "WebRelier Software Solutions Pvt. Ltd.",
    icon: "/company/webrelier.png",
    iconBg: "#fff",
    date: "Aug 2020 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "YES Bank Ltd.",
    icon: "/company/yesbank.png",
    iconBg: "#fff",
    date: "Mar 2017 - Jul 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "HDFC Bank Ltd.",
    icon: "/company/hdfc.png",
    iconBg: "#fff",
    date: "Mar 2015 - Mar 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const steps = [
        {
            title: "HRMS",
            description:
                "A comprehensive and user-friendly platform for all your HR needs. It simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
            link: "Need more details?",
            href: "https://www.onenfinity.com/hrms",
            bg: "bg-indigo-500/10",
            icon: "/product/hrms.svg",
        },
        {
            title: "ERP",
            description:
                'Empowering businesses with innovative, scalable cloud ERP. A cloud-based ERP solution is designed exclusively for the growth-minded businesses of today.',
            link: "Need more details?",
            href: "https://www.onenfinity.com/erp",
            bg: "bg-slate-500/20",
            icon: "/product/erp.svg",
        },
        {
            title: "crm",
            description:
                "CRM is a cutting-edge customer relationship management solution for business.",
            link: "Need more details?",
            href: "https://www.onenfinity.com/crm",
            bg: "bg-cyan-500/10",
            icon: "/product/crm.webp",
        },
        {
            title: "retail",
            description:
                "A comprehensive, scalable, and cloud - based POS.Improve sales and gain valuable retail analytics for increased footfalls, inventory management, and customer loyalty programs.",
            link: "Need more details?",
            href: "https://www.onenfinity.com/retail",
            bg: "bg-orange-400/10",
            icon: "/product/retail.svg",
        },
        {
            title: "Restaurant",
            description:
                "A cloud-based POS tailored for restaurants, reduce wastages, menu customization, and real - time inventory tracking and reporting.",
            link: "Need more details?",
            href: "https://www.onenfinity.com/restaurant",
            bg: "bg-lime-500/10",
            icon: "/product/restaurant.webp",
        },
        {
            title: "Subscription",
            description:
                "Manage your subscription billing end to end with user friendly software. Automate recurring charges and send out professional, tax compliant invoices effortlessly.",
            link: "Need more details?",
            href: "https://www.onenfinity.com/subscription",
            bg: "bg-purple-500/10",
            icon: "/product/subscription.svg",
        },
        {
            title: "Real Estate",
            description:
                "Automate rent collection, maintenance tracking, and tenant communication, resulting in higher efficiency and reduced workload.",
            link: "Need more details?",
            href: "https://www.onenfinity.com/real-estate",
            bg: "bg-red-500/10",
            icon: "/product/realestate.webp",
        },
        {
            title: "Loan Origination System",
            description:
                "Loan Origination System is a platform for centrally managing and automate the different stages of loan servicing cycle.",
            link: "Need more details?",
            href: "https://www.ltfinance.com/personal-loan",
            bg: "bg-fuchsia-500/10",
            icon: "/product/loan.svg",
        },
    ];



