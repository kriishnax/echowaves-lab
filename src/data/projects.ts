import webAgency from "../assets/projects/web-agency.jpg";
import uiDashboard from "../assets/projects/ui-dashboard.jpg";
import branding from "../assets/projects/brand-identity.jpg";
import photography from "../assets/projects/photography.jpg";
import videoEdit from "../assets/projects/video-edit.jpg";
import landingPage from "../assets/projects/landing-page.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  tag: string;
  shortDesc: string;
  image: string;

  challenge: string;
  approach: string;
  outcome: string;

  techStack: string[];
};


export const projects: Project[] = [
  {
  id: "modern-business-website",
  title: "Modern Business Website",
  category: "Web",
  tag: "Web Design & Development",
  shortDesc: "A clean, modern website built to establish a strong digital presence.",
  image: webAgency,

  challenge:
    "The client needed a professional website that clearly communicated their services.",
  approach:
    "We focused on clean UI, responsive design, and performance optimization.",
  outcome:
    "The website improved brand presence and user engagement.",

  techStack: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Responsive Design",
  "Vercel"
],
},

  {
    id: "ui-dashboard",
    title: "UI Dashboard Design",
    category: "Design",
    tag: "UI/UX Design",
    shortDesc:
      "A user-friendly dashboard interface designed for data clarity.",
    image: uiDashboard,
    challenge:
      "The client required a dashboard that presented complex data in a simple and intuitive way.",
    approach:
      "We focused on visual hierarchy, clean layouts, and accessibility to ensure ease of use across devices.",
    outcome:
      "The dashboard improved usability, reduced user friction, and enhanced decision-making efficiency.",
      techStack: [
  "Figma",
  "UI/UX Design",
  "Design Systems",
  "Wireframing",
  "Prototyping"
],

  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    category: "Design",
    tag: "Branding",
    shortDesc:
      "A cohesive brand identity including logo, colors, and visual language.",
    image: branding,
    challenge:
      "The brand lacked a consistent visual identity across platforms.",
    approach:
      "We developed a complete branding system covering logo design, typography, color palette, and usage guidelines.",
    outcome:
      "The new identity strengthened brand recognition and provided consistency across all touchpoints.",
      techStack: [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Brand Strategy",
  "Typography",
  "Color Systems"
],

  },
  {
  id: "product-photography",
  title: "Product Photography",
  category: "Photo",
  tag: "Photography",
  shortDesc: "High-quality product photography for digital marketing.",
  image: photography,

  challenge:
    "The brand needed professional visuals for online marketing.",
  approach:
    "We planned studio shots with controlled lighting and composition.",
  outcome:
    "The visuals elevated the brand’s presentation.",

  techStack: ["DSLR Camera", "Studio Lighting", "Adobe Lightroom", "Photoshop"],
},

  {
    id: "promotional-video",
    title: "Promotional Video Edit",
    category: "Video",
    tag: "Videography",
    shortDesc:
      "A dynamic promotional video crafted for brand storytelling.",
    image: videoEdit,
    challenge:
      "The brand wanted to communicate their message in a short, engaging video format.",
    approach:
      "We combined strong storytelling, smooth transitions, and sound design to create impact.",
    outcome:
      "The final video improved audience engagement and strengthened brand messaging.",
      techStack: [
  "Adobe Premiere Pro",
  "After Effects",
  "Color Grading",
  "Sound Design",
  "Motion Graphics"
],

  },
  {
    id: "startup-landing-page",
    title: "Startup Landing Page",
    category: "Web",
    tag: "Web Development",
    shortDesc:
      "A conversion-focused landing page for a startup launch.",
    image: landingPage,
    challenge:
      "The startup needed a landing page that clearly explained their product and converted visitors.",
    approach:
      "We built a fast-loading, responsive layout with clear CTAs and concise messaging.",
    outcome:
      "The landing page improved sign-ups and provided a strong launch foundation.",
      techStack: [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Conversion Optimization",
  "SEO Basics"
],

  },
];
