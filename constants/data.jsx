import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import ubIcon from "../src/assets/experienceIcons/UBIcon.png";
import esriIcon from "../src/assets/experienceIcons/esriIcon.jpg";
import foodpandaIcon from "../src/assets/experienceIcons/foodpandaIcon.png";
import ncsLogo from "../src/assets/experienceIcons/ncsLogo.png";

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-blue-400" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-400" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 text-blue-400" />,
    text: "Proficient in Tailwind CSS, a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-blue-400" />,
    text: "Skilled in Node.js, a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.",
  },
  {
    id: nanoid(),
    title: "Go",
    icon: <FaGolang className="h-16 w-16 text-blue-400" />,
    text: "Familiar with Go, also known as Golang, an open-source programming language that makes it easy to build simple, reliable, and efficient software.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-blue-400" />,
    text: "Experienced in Java, a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-blue-400" />,
    text: "Experienced in Java, a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
  },
  {
    id: nanoid(),
    title: "JSP",
    icon: <FaJava className="h-16 w-16 text-blue-400" />,
    text: "Knowledgeable in JavaServer Pages (JSP), a technology that helps software developers create dynamically generated web pages based on HTML, XML, or other document types.",
  },
];

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  // { id: nanoid(), href: "#experiences", text: "experiences" },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];

export const aboutMe = `
<p>
Hey there! I'm a nature enthusiast and adventure seeker who found
my way into the exciting world of tech. I studied Geographic
Information Science at the University at Buffalo, Sim Campus,
where I learned to appreciate the beauty of our planet and its
data-driven wonders.<br><br>
When I'm not exploring the great outdoors,
you'll likely find me immersed in the virtual world of video
games, especially Teamfight Tactics. Gaming isn't just a hobby for
me; it's a way to unwind and sharpen my strategic skills.<br><br>
After graduation, I dived headfirst into software development, spending
almost two years crafting code and solving problems. While I
enjoyed the full spectrum of development, my heart belongs to
front-end work. There's something magical about bringing designs
to life and creating seamless user experiences.<br><br>
Outside of work,
I'm a gym enthusiast, dedicated to maintaining a healthy body and
mind. And of course, I'm always on the lookout for opportunities
to level up my front-end development skills. Let's connect and
create something awesome together!\n
</p>
`;

const CustomIcon = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`w-8 h-8 ${className}`} />;
};

export const experiencesData = [
  [
    {
      position: "Software Engineer",
      company: "NCS",
      description:
        " Fullstack Software Engineer at NCS, assigned to the Attorney General's Chambers project",
      icon: ncsLogo,
      date: "May 2023 - Present",
    },
    {
      position: "Software Engineer Trainee",
      company: "foodpanda",
      description:
        "Back-End Developer Trainee for the Ordering Domain (Order Tracking and Checkout Team)",
      icon: foodpandaIcon,
      date: "Oct 2023 - Mar 2023",
    },
    {
      position: "Associate Front End Developer",
      company: "ESRI Singapore",
      description:
        "Front-End Developer for the Geospace Sea Web Application for the Maritime Port and Authority (MPA) of Singapore",
      icon: esriIcon,
      date: "Feb 2022 - Oct 2022",
    },
    {
      position: "Student",
      company: "University at Buffalo, SIM Campus",
      description:
        "Graduated with a Bachelor of Science degree in Geographic Information Science with honors (Cum Laude)",
      icon: ubIcon,
      date: "Aug 2019 - Aug 2022",
    },
  ],
];