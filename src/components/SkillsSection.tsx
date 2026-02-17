import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Database, Server, Cpu, Layers, Cloud } from "lucide-react";

const skills = [
  {
    icon: Terminal,
    title: "Core Backend",
    description: "Node.js, TypeScript, Express",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "PostgreSQL, MongoDB, Redis, SQL",
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Microservices, Saga Pattern, REST APIs",
  },
  {
    icon: Server,
    title: "Event Streaming",
    description: "Kafka, RabbitMQ, Real-time Processing",
  },
  {
    icon: Cloud,
    title: "Cloud / DevOps",
    description: "AWS (S3/EC2), Docker, Linux, Git",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Query Optimization, Scalability, Low-Latency",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Technical <span className="gradient-text italic">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glow-box transition-shadow duration-500 group"
            >
              <skill.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
              <h3 className="font-display font-semibold mb-1">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
