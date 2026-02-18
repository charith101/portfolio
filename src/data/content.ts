import dataviz1 from "../assets/Data-Viz/Image 1.png";
import dataviz2 from "../assets/Data-Viz/Image 2.png";
import dataviz3 from "../assets/Data-Viz/Image 3.png";
import dataviz4 from "../assets/Data-Viz/Image 4.png";
import dataviz5 from "../assets/Data-Viz/Image 5.png";
import dataviz6 from "../assets/Data-Viz/Image 6.png";
import dataviz7 from "../assets/Data-Viz/Image 7.png";

import SN1 from "../assets/Sketch-Notes/SN 1.png"
import SN2 from "../assets/Sketch-Notes/SN 2.png"
import SN3 from "../assets/Sketch-Notes/SN 3.png"
import SN4 from "../assets/Sketch-Notes/SN 4.png"

import DSMS1 from "../assets/DSMS/DSMS 1.png"
import DSMS2 from "../assets/DSMS/DSMS 2.png"
import DSMS3 from "../assets/DSMS/DSMS 3.png"
import DSMS4 from "../assets/DSMS/DSMS 4.png"
import DSMS5 from "../assets/DSMS/DSMS 5.png"
import DSMS6 from "../assets/DSMS/DSMS 6.png"

import VA1 from "../assets/Vehicle-App/ss1.png"
import VA2 from "../assets/Vehicle-App/ss2.png"
import VA3 from "../assets/Vehicle-App/ss3.png"
import VA4 from "../assets/Vehicle-App/ss4.png"
import VA5 from "../assets/Vehicle-App/ss5.png"
import VA6 from "../assets/Vehicle-App/ss6.png"
import VA7 from "../assets/Vehicle-App/ss7.png"

export const tech = [
  { name: "JavaScript", icon: "js" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "Vite", icon: "vitejs" },
  { name: "Shadcn UI", icon: "shadcnui" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Bun", icon: "bunjs" },
  { name: "Boot Strap", icon: "bootstrap5" },
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
    id: 2,
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
    id: 3,
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
    id: 4,
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