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
  // { label: "Skills", key: "skills" },
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
    icon: "/src/assets/company/enfinity.svg",
    iconBg: "#383E56",
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
    icon: "/src/assets/company/webrelier.png",
    iconBg: "#E6DEDD",
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
    icon: "/src/assets/company/yesbank.png",
    iconBg: "#000",
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
    icon: "/src/assets/company/hdfc.png",
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



