export const navItems = [
  { name: "Stack", link: "#stack" },
  { name: "Projects", link: "#projects" },
  // { name: "Experience", link: "#experience" },
  // { name: "Showcase", link: "#showcase" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const techStack = [
  {
    id: 1,
    title: "Frontend",
    stacks: ["React", "Next.js", "Typescript", "Javascript"],
  },
  {
    id: 2,
    title: "Styling",
    stacks: [
      "TailwindCSS",
      "CSS",
      "SASS",
      "Styled Components",
      "Framer Motion",
      "Shadcn",
    ],
  },
  {
    id: 3,
    title: "Utilities",
    stacks: [
      "Zustand",
      "React Query",

      "React Hook Form",
      "Zod",
      "Clerk",
      "Next Auth",
    ],
  },
  {
    id: 4,
    title: "Databases",
    stacks: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: 5,
    title: "Backend",
    stacks: ["Nodejs", "Firebase", "Supabase"],
  },
  {
    id: 6,
    title: "Content Management Systems (CMS): ",
    stacks: ["WordPress", "Sanity"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Printeaze",
    des: "Printeaze is a platform that aims to help simplify printing for campus students. Students upload their files from anywhere, customize settings, get a code, print.",
    img: "/printeaze.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://printeaze.com/",
  },
  {
    id: 2,
    title: "SyncGram Website",
    des: "Designed and Developed the website for SyncGram.",
    img: "/syncgram.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://sync-gram.com",
  },
  {
    id: 3,
    title: "Link Vault Chrome Extension",
    des: "A Chrome Extension that allows  users to save, organize, and manage their links efficiently",
    img: "/linkvault1.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/chrome.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      // "/stream.svg",
      // "/c.svg",
    ],
  },
  {
    id: 4,
    title: "3D Merch Picker",
    des: "A 3D merch picker that allows users to view and come up with a merch in a 3D environment.",
    img: "/merchpicker.png",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg", "/framer.svg"],
    link: "https://3dmerch.netlify.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Founder, Printeaze",
    desc: "Printeaze is a revolutionary platform that aims to help simplify printing for campus students. Students upload their files from anywhere, customize settings, get a code, print.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer at SyncGram ",
    desc: "Worked at SyncGram, a startup that is focused on helping telegram community owners to manage their telegram communities. I developed and managed the website, dashboard, and admin dashboard independently.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 1,
  //   title: "Frontend Developer at Qhub",
  //   desc: "Worked as the Frontend Developer for the QHUB LMS project which is an LMS platform for organizations. Its customizable for all kinds of organizations, so they don’t need to build their own LMS. I Worked alongside other developers and professionals",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp1.svg",
  // },
  {
    id: 3,
    title: "Founder, Sparksites Studios",
    desc: "Sparksites Studios is a web development agency that helps businesses to create a strong online presence.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Enactus Technical Director",
    desc: "I lead the media and digital efforts that bring our team’s impactful projects to life. In this role, I’m responsible for documenting our initiatives through visuals and storytelling, ensuring that our mission to enable human progress through entrepreneurial action reaches a broad audience",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
import learnact from "@/assets/learnact.png";
import hoobank from "@/assets/hoobank.png";
import intask from "@/assets/intask.png";
import deapshoppingcenter from "@/assets/deapshoppingcenter.png";
import wiseupsolutions from "@/assets/wiseupsolutions.png";
import space from "@/assets/space.png";
import syncgram from "@/assets/syncgram.png";
import syncgramdash from "@/assets/syncgramdash.png";
import lyncs from "@/assets/lyncs.png";
import qhub from "@/assets/qhub.png";
import unesco from "@/assets/unesco.png";
import syncgramdashadmin from "@/assets/syncgramdashadmin.png";
import printeaze from "@/assets/printeaze.png";
export const products = [
  {
    title: "SyncGram Admin Dashboard",
    link: "https://sync-gram.com",
    thumbnail: syncgramdashadmin,
  },

  {
    title: "Printeaze",
    link: "https://printeaze.com/",
    thumbnail: printeaze,
  },
  {
    title: "Unesco Youth Club CU",
    link: "https://unesco-youth-club.netlify.app",
    thumbnail: unesco,
  },

  {
    title: "Intask",
    link: "https://intaskweb.netlify.app/",
    thumbnail: intask,
  },

  {
    title: "Lyncs",
    link: "https://lyncs.vercel.app/",
    thumbnail: lyncs,
  },
  {
    title: "SyncGram",
    link: "https://sync-gram.com",
    thumbnail: syncgram,
  },
  // {
  //   title: "Unesco Youth Club CU",
  //   link: "https://unesco-youth-club.netlify.app",
  //   thumbnail: unesco,
  // },
  {
    title: "Space Tourism Website",
    link: "https://h00bankweb.netlify.app/",
    thumbnail: space,
  },
  {
    title: "Learnact",
    link: "https://thelearnact.com",
    thumbnail: learnact,
  },
  {
    title: "SyncGram Dashboard",
    link: "https://sync-gram.com",
    thumbnail: syncgramdash,
  },
];

export const testimonials = [
  {
    quote:
      "This guy is literally a beast. He's a genius, his works are always damn good, he is very innovative and also has a good work ethic.",
    name: "Bolu Dada",
    title: "CEO/Founder SyncGram",
  },
  {
    quote:
      "This guy is good, I love his works. We still have a lot of work to do together.",
    name: "Oluwaseun Suleman",
    title: "Co-Founder/Frontend Developer at Lyncs",
  },
  {
    quote: "He is a very good developer, I love working with him.",
    name: "Akinyera Damilare",
    title: "Project Manager at Qhub",
  },
  {
    quote:
      "He is one of the best Frontend Developers I have ever worked with. He is very good at what he does.",
    name: "Marvellous",
    title: "Backend Developer",
  },
  {
    quote:
      "This guy's ui is always dope asf. He is just excelletn in what he does",
    name: "Mosky",
    title: "Entrepreneur",
  },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];

export const companies = [
  {
    id: 1,
    name: "Printeaze",
    img: "/printeaze.svg",
    link: "https://printeaze.com/",
  },
  {
    id: 2,
    name: "SyncGram",
    img: "/syngramlogo.svg",
    link: "https://sync-gram.com",
    // nameImg: "/pname.svg",
  },

  {
    id: 3,
    name: "Lyncs",
    img: "/lyncslogo.svg",
    link: "https://www.lyncs.africa/",
    // nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Sparksites Studios",
    img: "/sss.svg",
    link: "https://sparksitesstudios.netlify.app/",
    // nameImg: "/sss2.svg",
  },
];
