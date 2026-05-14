import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Search, Lightbulb, Code2, CheckCircle, Repeat, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const principles = [
  { icon: Search, title: "Discovery First", desc: "Every engagement starts with understanding — the business context, the users, the constraints, and the goals. We never skip this step." },
  { icon: Lightbulb, title: "Clarity Before Execution", desc: "We define what we're building and why before we build it. Ambiguity at the start compounds into expensive problems later." },
  { icon: Code2, title: "Iterative Delivery", desc: "We deliver in stages — frequent, testable increments that give clients visibility and the ability to course-correct early." },
  { icon: CheckCircle, title: "Quality by Default", desc: "Code reviews, security checks, and testing are built into our process — not added at the end as an afterthought." },
  { icon: Repeat, title: "Feedback Loops", desc: "We create structured opportunities for feedback at every stage so that what we build always reflects real needs." },
  { icon: Users, title: "Transparent Communication", desc: "Clients are never left wondering about the status of their project. Regular, honest updates are part of how we work." },
];

const phases = [
  {
    number: "01",
    title: "Intake & Discovery",
    duration: "Week 1–2",
    activities: [
      "Stakeholder interviews and goal alignment",
      "Existing system and process audit",
      "Constraint and risk identification",
      "Initial scope definition and prioritization",
    ],
  },
  {
    number: "02",
    title: "Planning & Architecture",
    duration: "Week 2–3",
    activities: [
      "Technical architecture design",
      "Project roadmap and milestone planning",
      "Technology stack selection",
      "Resource and timeline estimation",
    ],
  },
  {
    number: "03",
    title: "Design & Prototyping",
    duration: "Week 3–4",
    activities: [
      "UX and information architecture design",
      "Interface prototyping and validation",
      "Technical proof-of-concept where needed",
      "Client review and approval",
    ],
  },
  {
    number: "04",
    title: "Development & Delivery",
    duration: "Ongoing sprints",
    activities: [
      "Agile sprint-based development",
      "Continuous integration and testing",
      "Regular client demos and reviews",
      "Incremental deployment to staging environments",
    ],
  },
  {
    number: "05",
    title: "Launch & Stabilization",
    duration: "Final 2 weeks",
    activities: [
      "Production deployment and go-live",
      "Performance monitoring and optimization",
      "Documentation and handover",
      "Post-launch support window",
    ],
  },
  {
    number: "06",
    title: "Ongoing Partnership",
    duration: "Continuous",
    activities: [
      "Maintenance and monitoring",
      "Feature development and iteration",
      "Security updates and dependency management",
      "Strategic product advisory",
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              Projects & Methodology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              How We <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Our methodology is built on transparency, rigor, and genuine collaboration. Here's how every engagement at OA GROUP unfolds — from first conversation to long-term partnership.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1400&q=80"
              alt="Project methodology and planning"
              className="rounded-2xl object-cover w-full h-80 md:h-[400px] border border-border/50"
              data-testid="img-methodology"
            />
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Core Principles" title="What Guides Every Project" subtitle="These principles aren't aspirational — they're operational. They define how we work on every engagement, every time." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Engagement Model" title="The Project Journey" subtitle="A structured, phased approach that gives clients clarity and control at every stage." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-8 rounded-xl border border-border/50 bg-card"
                data-testid={`phase-${phase.number}`}
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6">{phase.number}</span>
                <div className="relative z-10">
                  <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary mb-3">
                    {phase.duration}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.activities.map((act) => (
                      <li key={act} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Commitment */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="Our Commitment"
                title="A Partnership, Not a Transaction"
                subtitle="We measure success not by project completion but by the impact our work has on the organizations we serve."
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                OA GROUP is structured to support long-term relationships. We want to be the firm you call when something important needs to be figured out — not just when a task needs to be executed.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This means we invest in understanding your business deeply, communicate proactively when things need to change, and build systems that your team can own and operate confidently after we're done.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="methodology-contact-cta">
                <Link href="/contact">Start a Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Collaborative team work"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-collaboration"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
