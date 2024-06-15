import { nanoid } from "nanoid";

import ubIcon from "../experienceIcons/UBIcon.png";
import esriIcon from "../experienceIcons/esriIcon.jpg";
import foodpandaIcon from "../experienceIcons/foodpandaIcon.png";
import ncsLogo from "../experienceIcons/ncsLogo.png";

import { IoHome, IoPersonOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

import htmlIcon from "../skillsIcons/html.png";
import cssIcon from "../skillsIcons/css.png";
import jsIcon from "../skillsIcons/js.png";
import tailwindIcon from "../skillsIcons/tailwind.png";
import reactIcon from "../skillsIcons/react.png";
import reduxIcon from "../skillsIcons/redux.png";
import reactQueryIcon from "../skillsIcons/reactquery.png";
import tsIcon from "../skillsIcons/ts.png";
import framerIcon from "../skillsIcons/framer.png";
import nodeJsIcon from "../skillsIcons/node-js.png";
import mysqlIcon from "../skillsIcons/mysql.png";
import goIcon from "../skillsIcons/go.png";
import javaIcon from "../skillsIcons/java.png";
import pythonIcon from "../skillsIcons/python.png";
import dojoToolKitIcon from "../skillsIcons/dojotoolkit.png";
import mongoDBIcon from "../skillsIcons/mongoDBIcon.png";

export const links = [
  { id: nanoid(), href: "#home", text: "Home", icon: IoHome },
  { id: nanoid(), href: "#about", text: "About", icon: IoPersonOutline },
  { id: nanoid(), href: "#experience", text: "Experience", icon: MdWork },
  { id: nanoid(), href: "#skills", text: "Skills", icon: FaFileCode },
  { id: nanoid(), href: "#projects", text: "Projects", icon: GrProjects },
];

export const aboutMe = `
<p>
Hey there! I'm a <span style="color: #FF5722;">nature enthusiast</span> and adventure seeker who found
my way into the exciting world of tech. I studied <span style="color: #FF5722;">Geographic
Information Science</span> at the University at Buffalo, Sim Campus,
where I learned to appreciate the beauty of our <span style="color: #009688;">planet</span> and its
data-driven wonders.<br><br>
When I'm not exploring the great <span style="color: #FF5722;">outdoors</span>,
you'll likely find me immersed in the virtual world of video
games, especially Teamfight Tactics. Gaming isn't just a hobby for
me; it's a way to unwind and sharpen my strategic skills.<br><br>
After graduation, I dived headfirst into software development, spending
almost<span style="color: #FF5722;"> two years </span> crafting code and solving problems. While I
enjoyed the full spectrum of development, my heart belongs to
front-end work. There's something magical about bringing designs
to life and creating seamless user experiences.<br><br>
Outside of work,
I'm a <span style="color: #FF5722;">gym enthusiast</span>, dedicated to maintaining a healthy body and
mind. And of course, I'm always on the lookout for opportunities
to level up my front-end development skills. Let's connect and
create something awesome together!
</p>
`;

//Experience ✨
const createExperience = (position, company, description, icon, date) => ({
  position,
  company,
  description,
  icon,
  date,
});

export const experiencesData = [
  [
    createExperience(
      "Software Engineer",
      "NCS",
      "Fullstack Software Engineer at NCS, assigned to the Attorney General's Chambers project",
      ncsLogo,
      "May 2023 - Present"
    ),
    createExperience(
      "Software Engineer Trainee",
      "foodpanda",
      "Back-End Developer Trainee for the Ordering Domain (Order Tracking and Checkout Team)",
      foodpandaIcon,
      "Oct 2023 - Mar 2023"
    ),
    createExperience(
      "Associate Front End Developer",
      "ESRI Singapore",
      "Front-End Developer for the Geospace Sea Web Application for the Maritime Port and Authority (MPA) of Singapore",
      esriIcon,
      "Feb 2022 - Oct 2022"
    ),
    createExperience(
      "Student",
      "University at Buffalo, SIM Campus",
      "Graduated with a Bachelor of Science degree in Geographic Information Science with honors (Cum Laude)",
      ubIcon,
      "Aug 2019 - Aug 2022"
    ),
  ],
];

//Skills ✨
const createSkill = (name, image, width = 60, height = 60) => ({
  skill_name: name,
  Image: image,
  width,
  height,
});

export const skillsData = [
  createSkill("Html 5", htmlIcon),
  createSkill("Css", cssIcon, 70, 70),
  createSkill("Java Script", jsIcon),
  createSkill("Tailwind Css", tailwindIcon),
  createSkill("React", reactIcon),
  createSkill("Redux", reduxIcon),
  createSkill("React Query", reactQueryIcon),
  createSkill("Type Script", tsIcon),
  createSkill("Framer Motion", framerIcon),
  createSkill("MongoDB", mongoDBIcon, 70, 70),
  createSkill("My SQL", mysqlIcon),
  createSkill("Java", javaIcon),
  createSkill("Node js", nodeJsIcon),
  createSkill("Go", goIcon),
  createSkill("Python", pythonIcon),
  createSkill("DojoToolKit", dojoToolKitIcon, 65, 65),
];

const createProject = (img, url, github, title, text) => ({
  id: nanoid(),
  img,
  url,
  github,
  title,
  text,
});

// Projects Data
export const projectsData = [
  createProject(
    "",
    "",
    "https://github.com/Jedrek1996/MoneyGoWhere_Frontend",
    "MoneyGoWhere",
    "A money tracking expense similar to SplitWise. Users are able to add friends and split their expenses. A dashboard is rendered based on the expense categories. Created with Python and Reactjs."
  ),
  createProject(
    "",
    "https://jedpomdoro.netlify.app/",
    "https://github.com/Jedrek1996/PomodoroTimer",
    "Pomdoro Timer",
    "A Pomdoro Timer application. Created with Next.js and Typescript."
  ),
  createProject(
    "",
    "https://taskmanagernode.onrender.com/",
    "https://github.com/Jedrek1996/TaskManagerNode",
    "Task Manager",
    "A task manager featuring CRUD operations, fully integrated with Google OAuth and JWT. Created with Node.js and MongoDB."
  ),
  createProject(
    "",
    "",
    "https://github.com",
    "Pet Spa Website (In Progress)",
    "Nil"
  ),
  createProject("", "", "https://github.com/", "Job Website (To Do)", "Nil"),
];
