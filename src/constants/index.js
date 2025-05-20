import { ReactComponent as EmailIcon } from "../assets/social/email.png";
import { ReactComponent as VimeoIcon } from "../assets/social/vimeo.png";
import { ReactComponent as InstagramIcon } from "../assets/social/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/social/facebook.png";
import { ReactComponent as LinkedInIcon } from "../assets/social/linkedin.png";

export const NAV_LINKS = [
  { label: "Home", key: "hero" },
  { label: "About Me", key: "about" },
  { label: "Work", key: "work" },  
  // { label: "Skills", key: "skills" },
  { label: "Testimonials", key: "testimonials" },
  { label: "Contact", key: "contact" },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
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

export const socialLinks = [
  {
    id: 1,
    icon: <EmailIcon className="w-8 h-8" />,
    link: "mailto:youremail@example.com",
  },
  {
    id: 2,
    icon: <InstagramIcon className="w-8 h-8" />,
    link: "https://instagram.com/yourprofile",
  },
  {
    id: 3,
    icon: <FacebookIcon className="w-8 h-8" />,
    link: "https://facebook.com/yourprofile",
  },
  {
    id: 4,
    icon: <LinkedInIcon className="w-8 h-8" />,
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    id: 5,
    icon: <VimeoIcon className="w-8 h-8" />,
    link: "https://youtube.com/yourchannel",
  },
];

