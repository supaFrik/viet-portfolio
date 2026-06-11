import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Spring } from "@/components/ui/svgs/spring";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Cloudinary } from "@/components/ui/svgs/cloudinary";
import { Postman } from "@/components/ui/svgs/postman";
import { Swagger } from "@/components/ui/svgs/swagger";
import { Flyway } from "@/components/ui/svgs/flyway";
import { Hibernate } from "@/components/ui/svgs/hibernate";
import { Api } from "@/components/ui/svgs/api";
import { Shield } from "@/components/ui/svgs/shield";
import { Rbac } from "@/components/ui/svgs/rbac";
import { Template } from "@/components/ui/svgs/template";

export const DATA = {
  name: "Viet Portfolio",
  initials: "TV",
  url: "https://github.com/supaFrik",
  location: "Dinh Cong, Hoang Mai, Hanoi",
  locationLink: "https://www.google.com/maps/place/Dinh+Cong,+Hoang+Mai,+Hanoi",
  description:
    "Passionate about software development, backend engineering, and continuous learning through hands-on projects, with strong interest in scalable systems, problem solving, and gaining real-world experience in collaborative environments.",
  summary:
    "Backend-focused Java Intern passionate about building reliable systems and learning how real-world backend architectures work. Built hands-on e-commerce projects with Spring Boot and MySQL, explored authentication, payment flows, and transaction handling, and continuously experiment with new tools and technologies to strengthen practical engineering skills.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: Javascript },
    { name: "Spring Boot", icon: Spring },
    { name: "Spring MVC", icon: Spring },
    { name: "Spring Security", icon: Shield },
    { name: "Spring Data JPA", icon: Spring },
    { name: "Hibernate", icon: Hibernate },
    { name: "MySQL", icon: Mysql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker Compose", icon: Docker },
    { name: "Cloudinary", icon: Cloudinary },
    { name: "Postman", icon: Postman },
    { name: "Swagger", icon: Swagger },
    { name: "Flyway", icon: Flyway },
    { name: "RESTful APIs", icon: Api },
    { name: "Authorization", icon: Shield },
    { name: "RBAC", icon: Rbac },
    { name: "JSP/JSTL", icon: Template },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tqy2005tc@gmail.com",
    tel: "0394497187",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/supaFrik",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/viet-trinh-20a4333a7/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Gmail",
        url: "mailto:tqy2005tc@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tqy2005ct@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [] as Array<{
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }>,
  education: [
    {
      school: "Information Technology",
      href: "https://www.hanu.vn/",
      degree: "Hanoi University, major in Information Systems",
      logoUrl: "/hanu-logo.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Nike Ecommerce Web Application",
      href: "https://github.com/supaFrik/Nike-e-commerce-web-application",
      dates: "Personal Project",
      active: true,
      description:
        "Full-stack e-commerce web application inspired by Nike, built with Spring Boot for both customer shopping flows and back-office operations.",
      technologies: [
        "Java 17",
        "Spring Boot 3.2",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "MySQL",
        "JSP/JSTL",
        "Maven",
        "Docker Compose",
        "VNPay",
        "Cloudinary",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/supaFrik/Nike-e-commerce-web-application",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    {
      title: "License Plate Recognition",
      href: "https://github.com/supaFrik/License-Plate-Recognition",
      dates: "Personal Project",
      active: true,
      description:
        "A license plate recognition system built with Java and computer vision techniques, designed to detect and parse license plate numbers from images.",
      technologies: [
        "Java",
        "OpenCV",
        "Image Processing",
        "Machine Learning",
        "Spring Boot",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/supaFrik/License-Plate-Recognition",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/vietPlateAi.webm",
    },
    {
      title: "Viet Portfolio",
      href: "https://github.com/supaFrik/viet-portfolio",
      dates: "Personal Project",
      active: true,
      description:
        "Personal portfolio and blog built with Next.js, featuring profile sections, project cards, GitHub activity, theme switching, and MDX-powered writing.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MDX",
        "Content Collections",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/supaFrik/viet-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/vietPortfolio.webm",
    },
  ],
} as const;
