import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code2, Smartphone, Cloud, Bot, Shield, Server, Globe, Zap, GitBranch, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const services = [
  { icon: Code2, title: "Web Applications", desc: "Modern, performant web platforms built with React, Next.js, and scalable backend architectures." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Cross-platform mobile apps that deliver native experiences on iOS and Android." },
  { icon: Server, title: "SaaS Platforms", desc: "Multi-tenant SaaS products from concept to production, designed for scale." },
  { icon: Globe, title: "APIs & Backend Systems", desc: "RESTful and GraphQL APIs built for reliability, documentation, and third-party integration." },
  { icon: Cloud, title: "Cloud Deployment", desc: "AWS, GCP, and Azure deployments with Kubernetes, Docker, and CI/CD automation." },
  { icon: Bot, title: "AI Integration", desc: "LLM integration, machine learning pipelines, intelligent automation, and AI-powered features." },
  { icon: Shield, title: "Cybersecurity", desc: "Security audits, OWASP compliance, penetration testing guidance, and secure-by-default development." },
  { icon: Zap, title: "Maintenance & Support", desc: "Long-term technical partnership — monitoring, updates, performance optimization, and support." },
];

const techStack = [
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue.js"] },
  { category: "Backend", techs: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"] },
  { category: "Mobile", techs: ["React Native", "Expo", "Flutter", "Swift", "Kotlin"] },
  { category: "Cloud & DevOps", techs: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions"] },
  { category: "AI & Data", techs: ["OpenAI API", "LangChain", "TensorFlow", "scikit-learn", "Pandas"] },
  { category: "Security", techs: ["OWASP", "OAuth 2.0", "JWT", "SSL/TLS", "WAF"] },
];

const processSteps = [
  { number: "01", title: "Discovery & Analysis", desc: "We study your requirements, constraints, and goals before writing a single line of code. Understanding comes first." },
  { number: "02", title: "Architecture & Planning", desc: "We design a scalable, maintainable architecture and define the technology stack best suited to your context." },
  { number: "03", title: "Development & Iteration", desc: "Agile delivery in focused sprints. You see progress frequently and can provide feedback at every stage." },
  { number: "04", title: "Security & Quality Review", desc: "Code review, security checks, and performance testing are built into every release — not added at the end." },
  { number: "05", title: "Deployment & Launch", desc: "Production-grade deployment with monitoring, logging, and rollback procedures in place." },
  { number: "06", title: "Maintenance & Growth", desc: "We stay engaged after launch — supporting, improving, and scaling your product as your needs evolve." },
];

export default function OaForDev() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-medium text-primary tracking-wider uppercase border border-primary/20 rounded-full px-3 py-1 bg-primary/5">Technology Division</span>
            </div>
            <div className="mb-8">
              <img src="/logo-oa-dev.png" alt="OA FOR DEV" className="h-32 w-auto object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight sr-only">
              OA FOR DEV
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              We engineer software products, AI systems, and digital infrastructure for organizations that understand the importance of building things right the first time.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="dev-hero-cta">
                <Link href="/contact">Work With Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/40">
                <Link href="/projects">Our Methodology</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80"
              alt="Software engineering environment"
              className="rounded-2xl object-cover w-full h-80 md:h-[450px] border border-border/50"
              data-testid="img-dev-hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="What We Build" title="Services & Capabilities" subtitle="A full range of software engineering and technology services, delivered with precision." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all group"
                data-testid={`dev-service-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="AI Integration"
                title="Intelligence Built Into Your Product"
                subtitle="We help organizations move beyond AI hype into practical implementation — systems that actually work in production."
              />
              <div className="space-y-4">
                {[
                  "LLM-powered features integrated into existing platforms",
                  "Intelligent data processing and automation pipelines",
                  "Custom AI workflows tailored to your domain",
                  "Responsible AI implementation with privacy and security in mind",
                  "AI roadmap consulting for non-technical leadership",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
                alt="AI technology visualization"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-ai"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                alt="Cybersecurity"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-security"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="Cybersecurity"
                title="Security Is Not Optional"
                subtitle="We build with security as a first principle — not a final checkbox. Every project includes security considerations from day one."
              />
              <div className="space-y-4">
                {[
                  "OWASP Top 10 compliance and secure development practices",
                  "Security architecture review for new systems",
                  "Vulnerability assessment and remediation guidance",
                  "Secure authentication, authorization, and data handling",
                  "CSP headers, rate limiting, and infrastructure hardening",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DevOps & Cloud */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeader badge="Cloud & DevOps" title="Infrastructure for Scale" subtitle="We provision, configure, and maintain cloud infrastructure that grows with you." align="center" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: "Cloud Architecture", desc: "Purpose-designed cloud environments on AWS, GCP, or Azure — optimized for performance, cost, and reliability." },
              { icon: GitBranch, title: "CI/CD Pipelines", desc: "Automated testing and deployment workflows that enable teams to ship with confidence and speed." },
              { icon: Layers, title: "Container Orchestration", desc: "Docker and Kubernetes setups that make scaling predictable and operational complexity manageable." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Technology Stack" title="Our Technical Terrain" subtitle="We work with modern, battle-tested technologies chosen for each project's specific requirements." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border/50 bg-card"
              >
                <h3 className="font-semibold text-primary mb-4 text-sm tracking-wider uppercase">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Engineering Process" title="How We Work" subtitle="A structured, transparent engineering process that keeps clients informed and projects on track." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-8 rounded-xl border border-border/50 bg-card"
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6">{step.number}</span>
                <h3 className="text-lg font-semibold mb-3 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to build something?</h2>
            <p className="text-muted-foreground text-lg mb-10">Tell us about your project and we'll discuss the best path forward.</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="dev-contact-cta">
              <Link href="/contact">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
