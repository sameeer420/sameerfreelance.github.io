import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Dgital Marketer",
    location: "Lahore",
    description:
      "After six months of graduation I immediately found a job as a digital marketer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "SEO Expert",
    location: "Lahore",
    description:
      "I worked as an SEO expert for 2 years in 1 job and 1 year in another job. I also honed my skills as an SEO Expert.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Wordpress Expert",
    location: "Lahore",
    description:
      "I'm now an SEO and Wordpress Expert working as a freelancer. My specialities include SEO Expert, wordpress expert and a skilled Digital Marketer. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Global Tech Solutions",
    description:
      "Developed and implemented effective SEO strategies that increased organic traffic by 150% within six months. Conducted thorough keyword research and optimized on-page content to improve search engine rankings.",
    tags: [],
    imageUrl: corpcommentImg,
  },
  {
    title: "Innovative Marketing Agency",
    description:
      "Analyzed website performance using Google Analytics, identifying key areas for improvement. Collaborated with cross-functional teams to develop comprehensive digital marketing strategies that aligned with business goals.",
    tags: [],
    imageUrl: rmtdevImg,
  },
  {
    title: "NextGen Marketing Group",
    description:
      "Analyzed website performance using Google Analytics, identifying key areas for improvement. Collaborated with cross-functional teams to develop comprehensive digital marketing strategies that aligned with business goals.",
    tags: [],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Search Engine Optimization (SEO)",
  "Keyword Research & Analysis",
  "On-Page & Off-Page Optimization",
  "Technical SEO",
  "Content Marketing",
  "Link Building Strategies",
  "Local SEO",
  "SEO Auditing",
  "Google Analytics & SEO Reporting",
  "Competitor Analysis",
  "Conversion Rate Optimization (CRO)",
  "Social Media Marketing",
  "Pay-Per-Click (PPC) Managements",
  "Digital Marketing Strategy Development",
  "Web Traffic Analysis & Growth",
] as const;
