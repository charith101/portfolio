import dataviz1 from "../assets/Data-Viz/Image 1.webp";
import dataviz2 from "../assets/Data-Viz/Image 2.webp";
import dataviz3 from "../assets/Data-Viz/Image 3.webp";
import dataviz4 from "../assets/Data-Viz/Image 4.webp";
import dataviz5 from "../assets/Data-Viz/Image 5.webp";
import dataviz6 from "../assets/Data-Viz/Image 6.webp";
import dataviz7 from "../assets/Data-Viz/Image 7.webp";

import SN1 from "../assets/Sketch-Notes/SN 1.webp"
import SN2 from "../assets/Sketch-Notes/SN 2.webp"
import SN3 from "../assets/Sketch-Notes/SN 3.webp"
import SN4 from "../assets/Sketch-Notes/SN 4.webp"

import DSMS1 from "../assets/DSMS/DSMS 1.webp"
import DSMS2 from "../assets/DSMS/DSMS 2.webp"
import DSMS3 from "../assets/DSMS/DSMS 3.webp"
import DSMS4 from "../assets/DSMS/DSMS 4.webp"
import DSMS5 from "../assets/DSMS/DSMS 5.webp"
import DSMS6 from "../assets/DSMS/DSMS 6.webp"

import VA1 from "../assets/Vehicle-App/ss1.webp"
import VA2 from "../assets/Vehicle-App/ss2.webp"
import VA3 from "../assets/Vehicle-App/ss3.webp"
import VA4 from "../assets/Vehicle-App/ss4.webp"
import VA5 from "../assets/Vehicle-App/ss5.webp"
import VA6 from "../assets/Vehicle-App/ss6.webp"
import VA7 from "../assets/Vehicle-App/ss7.webp"

import MLPI1 from "../assets/ML-Project-Insurance/MLPI1.webp"
import MLPI2 from "../assets/ML-Project-Insurance/MLPI2.webp"
import MLPI3 from "../assets/ML-Project-Insurance/MLPI3.webp"
import MLPI4 from "../assets/ML-Project-Insurance/MLPI4.webp"
import MLPI5 from "../assets/ML-Project-Insurance/MLPI5.webp"

import DPPW1 from "../assets/DPPW/IMG 1.webp"
import DPPW2 from "../assets/DPPW/IMG 2.webp"
import DPPW3 from "../assets/DPPW/IMG 3.webp"

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
]

export const profile = {
  name: "Charith Wijesinghe",
  first: "Charith",
  last: "Wijesinghe",
  tagline: "Software that adds an extra layer to your life.",
  intro:
    "I'm Charith Wijesinghe, a full-stack software engineer based in Sri Lanka. I specialize in Machine Learning, Web Development, Mobile Apps, and Data Engineering. I build products that add an extra layer to everyday life — four crafts, one vision. What we build together will one day find its place in the world. Let's make it better.",
  email: "wijesinghecharith32@gmail.com",
  phone: "+94 72 781 2370",
  location: "Sri Lanka · Remote worldwide",
  github: "https://github.com/charith101",
  linkedin: "https://www.linkedin.com/in/charith-wijesinghe-031854289",
}

export const expertise = [
  {
    title: "Machine Learning & AI",
    icon: "brain",
    color: "bg-blue",
    dark: false,
    description:
      "Where does your product need intelligence? I start there, and make sure everything else flows from it: the models, the data, the interface. Data that doesn't decide anything is just noise.",
    link: "https://github.com/charith101",
    linkLabel: "More on this",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Data Analysis"],
  },
  {
    title: "Web Development",
    icon: "globe",
    color: "bg-orange",
    dark: false,
    description:
      "People judge your product before they've read a single line. Web development isn't decoration you add later: it's how your product stands in the world. Fast, accessible, and unmistakably yours.",
    link: "https://github.com/charith101",
    linkLabel: "More on this",
    tags: ["React", "TypeScript", "Vite", "Node.js", "Django", "Tailwind"],
  },
  {
    title: "Mobile Apps",
    icon: "smartphone",
    color: "bg-pink",
    dark: false,
    description:
      "Your product, in their pocket. Cross-platform apps built once, running everywhere — with notifications, realtime data and the polish that makes people come back.",
    link: "https://github.com/charith101",
    linkLabel: "More on this",
    tags: ["Flutter", "Dart", "Supabase", "Firebase", "Push Notifications"],
  },
  {
    title: "Data & Databases",
    icon: "database",
    color: "bg-plum",
    dark: true,
    description:
      "Data is your product offline — something to hold onto. The craft is in the details people don't always see but always feel: clean schemas, sane queries, visualizations that explain themselves.",
    link: "https://github.com/charith101",
    linkLabel: "More on this",
    tags: ["PostgreSQL", "MongoDB", "ETL", "Plotly", "Visualization"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "bg-yellow",
    dark: false,
    description:
      "You're online every day, in feeds, in inboxes, in deploys. I set up pipelines and infrastructure you run yourself, so your product stays recognizable without you starting over each time.",
    link: "https://github.com/charith101",
    linkLabel: "More on this",
    tags: ["Docker", "AWS", "GitHub Actions", "Linux", "CI/CD"],
  },
]

export const about = {
  pretitle: "About",
  title: "Who I am",
  text: "I'm Charith, a full-stack engineer who learned the craft by building products end to end — from machine learning models to production mobile apps. That same bar I bring to every project, big or small: no half work, every decision counts.",
  link: "https://github.com/charith101",
  linkLabel: "Read my story",
}

export const approach = {
  pretitle: "Approach",
  title: "How I work",
  text: "I don't work for you, I work with you. I design a thoughtful plan and take you along my process. No checkbox here and button there — the whole has to hold together. Clear communication, real deadlines, work you can build on.",
  link: "#contact",
  linkLabel: "Discover my approach",
}

export const approachSteps = [
  {
    n: "01",
    title: "Understand",
    text: "We start with the problem, not the technology. I ask the questions nobody else asks, until the goal is sharp enough to aim at.",
  },
  {
    n: "02",
    title: "Design",
    text: "A thoughtful plan before a single line of code. Architecture, data model, interface — everything mapped out so the build has a spine.",
  },
  {
    n: "03",
    title: "Build",
    text: "Short cycles, working software, your feedback in the loop. You never wait weeks to see progress; you see it every few days.",
  },
  {
    n: "04",
    title: "Launch & learn",
    text: "Shipping is the start, not the end. Deployments, monitoring, and iteration — your product keeps improving after it's live.",
  },
]

export const capabilities = [
  "Machine Learning",
  "Web Apps",
  "Mobile Apps",
  "Data Pipelines",
  "APIs",
  "Dashboards",
  "Automation",
  "Cloud & DevOps",
  "Product Thinking",
  "Realtime",
  "Auth & Security",
  "AI Features",
]

export const cta = {
  title: "Ready to build something that lasts?",
  text: "Let's have a chat. Tell me what you have in mind, and we'll both quickly feel if it clicks.",
  link: "#contact",
  linkLabel: "Start a project",
}

export const tech = [
  { name: "JavaScript", icon: "js" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "Vite", icon: "vitejs" },
  { name: "Shadcn UI", icon: "shadcnui" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Bun", icon: "bunjs" },
  { name: "Framer Motion", icon: "framer" },
  { name: "Webpack", icon: "webpack" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "expressjs" }, 
  { name: "Django", icon: "django" },
  { name: "Python", icon: "python" },
  { name: "Streamlit", icon: "streamlit" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Supabase", icon: "supabase" },
  { name: "Firebase", icon: "firebase" },
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
  { name: "Kotlin", icon: "kotlin" },
  { name: "Docker", icon: "docker" },
  { name: "GitHub", icon: "github" },
  { name: "AWS", icon: "aws" },
  { name: "Linux", icon: "linux" },
];

export const projects = [
  {
    id: 1,
    title: "Wikipedia Trending Topics Pipeline",
    description: "Automated ELT pipeline that tracks daily top Wikipedia articles and surfaces trending topics.",
    longDescription: "An automated ELT pipeline built end-to-end with the same stack used in production data teams. Every day it pulls the ~1,000 most-viewed English Wikipedia articles from the official Wikimedia API, loads them into BigQuery, and runs dbt models that compare each article's view count against its own 7-day rolling baseline — surfacing which topics are trending up or down versus their normal traffic. Orchestrated with GitHub Actions on a daily cron and visualized in a Data Studio dashboard.",
    MainImage: DPPW1,
    images: [DPPW1, DPPW2, DPPW3],
    tags: ["Python", "BigQuery", "dbt", "GitHub Actions", "Data Studio", "ETL"],
    category: "Data Engineering",
    github: "https://github.com/charith101/Data-Pipline-Project-Wikimedia",
    demo: "https://datastudio.google.com/reporting/904e9528-ae98-439c-b912-6d4c34906e69"
  },
  {
    id: 2,
    title: "Benchmarked Health Claim Predictor",
    description: "Machine Learning web application that predicts insurance charges based on customer information.",
    longDescription:"An end-to-end Machine Learning project built using Python, Pandas, NumPy, and Scikit-learn. The project involves data preprocessing, exploratory data analysis, feature engineering, model training, and evaluation to predict insurance charges. Multiple regression models were tested and compared, with the best-performing model serialized using Pickle and deployed through an interactive Streamlit web application. Users can input customer details and receive real-time insurance premium predictions through a clean and user-friendly interface.",
    MainImage: MLPI1,
    images: [MLPI1, MLPI2, MLPI3, MLPI4, MLPI5],
    tags: ["Python","Machine Learning","Scikit-Learn","Pandas","NumPy","Streamlit","Data Analysis"],
    category: "Machine Learning",
    github: "https://github.com/charith101/Benchmarked-Health-Claim-Predictor",
    demo: "https://benchmarked-health-claim-predictor.streamlit.app"
  },
  {
    id: 3,
    title: "Data-Viz",
    description: "A modular Data Analysis and Visualization tool built with Streamlit.",
    longDescription: "A powerful data analysis tool built with Python and Streamlit. This application allows users to upload raw CSV files and immediately generate interactive visualizations without writing code. It leverages Pandas for data manipulation and Plotly for rendering dynamic charts, making data insights accessible to non-technical users.",
    MainImage: dataviz1,
    images: [dataviz1, dataviz2, dataviz3, dataviz4, dataviz5, dataviz6, dataviz7],
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Numpy", "Matplotlib"],
    category: "Data Science",
    github:"https://github.com/charith101/Data-Viz"
  },
  {
    id: 4,
    title: "Vehicle Maintenance System",
    description: "A cross-platform Flutter app for managing and tracking vehicle maintenance tasks and records.",
    longDescription: "A cross-platform mobile application developed using Flutter for vehicle service stations. The app allows customers to book service appointments, track their vehicle's service history, and earn loyalty points for every visit. It features push notifications for service reminders and realtime data updates.",
    MainImage: VA1,
    images: [VA1,VA2,VA3,VA4,VA5,VA6,VA7],
    tags: ["Flutter", "Dart", "Supabase", "OneSignal", "Firebase","S3-Storage","Edge-Functions"],
    category: "Mobile App",
    github:"https://github.com/dulaj4067/vehicle-maintenance-system"
  },
  {
    id: 5,
    title: "Sketch-Notes",
    description: "Sketch-Notes is a full-stack web app for creating, sketching, and managing notes with AI features.",
    longDescription: "Sketch-Notes is a full stack web application for creating, storing, and managing notes with a sketch. It uses a Python backend (Django REST API with JSON Web Token authentication) and a React frontend powered by Vite and shadcn UI components for a modern, fast, and responsive user experience.",
    MainImage: SN3,
    images: [SN3, SN2, SN1, SN4],
    tags: ["Django", "Python", "JWT", "React Canvas", "Canvas API", "Vite", "Shadcn UI"],
    category: "Web & AI",
    github:"https://github.com/charith101/Sketch-Notes"
  },
  {
    id: 6,
    title: "Driving School Management System",
    description: "Comprehensive management system for driving school operations.",
    longDescription: "A full-stack management system designed to streamline driving school operations. It handles student scheduling, instructor allocation, payment tracking, and vehicle maintenance logs. The system includes role-based access control for administrators, instructors, and students, ensuring secure and efficient data management.",
    MainImage: DSMS1,
    images: [DSMS1, DSMS2, DSMS3, DSMS4, DSMS5, DSMS6],
    tags: ["Mongo DB", "Express JS", "React", "Node.js","Bootstrap","JSPdf"],
    category: "Web System",
    github:"https://github.com/charith101/DSMS"
  },

]

export type Project = (typeof projects)[number]