import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Distributed Saga Orchestrator",
    description:
      "A robust system designed to manage distributed transactions across microservices using the Saga pattern. It ensures data consistency and handles complex rollbacks in event-driven architectures.",
    tags: ["Node.js", "Kafka", "TypeScript", "Distributed Systems"],
    link: "https://github.com/riteshbamola/Distributed-Saga-Orchestrator",
  },
  {
    title: "Event Driven Notification System",
    description:
      "A scalable backend notification engine built using Node.js and Redis Streams, designed to process asynchronous events with consumer groups, retry handling, and fault tolerance. This project demonstrates real-world distributed system concepts such as message persistence, consumer coordination, pending message recovery, and retry mechanisms.",
    tags: ["Node.js", "Redis Streams", "Event-Driven", "Distributed Systems"],
    link: "https://github.com/riteshbamola/Event-Driven-Notification-System",
  },
  {
    title: "Scalable File Upload Service",
    description:
      "A high-performance file processing engine built to handle massive concurrent uploads. Integrates seamlessly with cloud storage while maintaining low-latency processing and secure access.",
    tags: ["Node.js", "AWS S3", "MongoDB", "Express"],
    link: "https://github.com/riteshbamola/Scalable-FIle-Upload-Service",
  },
  {
    title: "Cloud-Based IDE",
    description:
      "A real-time collaborative coding environment using containerized execution. Implemented secure sandbox environments for code execution with isolated resource management.",
    tags: ["Docker", "React", "Socket.io", "Node.js"],
    link: "https://github.com/riteshbamola/RealTimeCollaborativeCloudIDE",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            The Engine Room
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Core <span className="gradient-text italic">Builds</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group glass glow-box rounded-xl p-6 flex flex-col justify-between"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-display font-semibold flex items-center gap-2 mb-3 hover:text-primary transition-colors"
              >
                {project.title}
                <ExternalLink
                  size={16}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
