"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "ho creato con react il mio sito portfolio personale. il frontend è stato gestito da react in modo da avere animazioni e un design pulito",
    image: "/images/projects/reactportfolio.PNG",  //inserire immagini
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Acciarino-XVII",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Giochi online website 2fa",
    description: "progetto di tpsit/informatica. la pagina web è scritta in php css html e implementa l'autenticazione 2fa via email ",
    image: "/images/projects/2fawebsite.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Acciarino-XVII",
    previewUrl: "karimacciaro.altervista.org",
  },
  {
    id: 3,
    title: "esp32 diy marauder",
    description: "grazie ad un esp32 ed un firmware che è possibile trovare su github ho assemblato un 'tool' da pentester con il quale è possibile eseguire sniffing di rete e lanciare diversi pacchetti sia wifi che bt",
    image: "/images/projects/esp32marauder.png",
    tag: ["All", "hardware"],
    gitUrl: "https://github.com/Acciarino-XVII",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "esp8266 Deauther",
    description: "questo semplice tool è un esp8255 che spammando pacchetti di deauth può far scollegare un host da una rete, oltre a questo il deauther può spammare pacchetti di beacon per creare falsi ssid randomici o cloni di ssid esistenti",
    image: "/images/projects/deauther.jpg",
    tag: ["All", "hardware"],
    gitUrl: "https://github.com/Acciarino-XVII",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        i Miei progetti
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="hardware"
          isSelected={tag === "hardware"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;