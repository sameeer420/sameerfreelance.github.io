"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my portfolio site, your go-to resource for <span className="font-medium">SEO expertise</span> and 
      <span className="font-medium"> digital marketing</span> insights. With a solid foundation in <span className="italic">search engine
      optimization</span>, I help businesses enhance their online presence and reach
      their audience more effectively. My goal is to <span className="font-bold">deliver results-driven
      strategies tailored to each client’s unique needs</span>, focusing on measurable
      growth and long-term success. As I expand my services, I’m committed to
      building a <span className="font-extrabold">full-scale digital marketing</span> company to offer comprehensive
      solutions across <span className="italic">SEO, content marketing, social media, and more</span>. Let’s
      grow your brand together in the digital world!
      </p>
      
    </motion.section>
  );
}
