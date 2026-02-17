import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Behind the Scenes
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Engineering with{" "}
            <span className="gradient-text italic">Precision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed font-body"
          >
            <p>
              I’m a backend specialist who lives in the terminal. While others
              focus on the buttons, I focus on what happens when they’re
              clicked—optimizing performance and ensuring every byte of data
              goes where it belongs.
            </p>
            <p>
              My philosophy? If you don't notice the backend, it's working. I
              build robust APIs and stable foundations that stay up when the
              traffic spikes. No fluff, just pure, optimized logic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "99.9%", label: "Uptime Mentality" },
              { num: "0ms", label: "Latency Goal" },
              { num: "10+", label: "Tech Stack" },
              { num: "Clean", label: "Architecture" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-lg p-6 text-center glow-box border border-white/5"
              >
                <p className="text-2xl font-display font-bold text-primary">
                  {stat.num}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
