import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code2, Smartphone, Cloud, Bot, Shield, Server, TrendingUp, BarChart3, Globe, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const devServices = [
  { icon: Code2, title: "Web Applications", desc: "Full-stack web platforms built with modern architectures — performant, secure, and scalable by design." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile experiences that feel native, built for iOS and Android." },
  { icon: Server, title: "SaaS Platforms", desc: "End-to-end SaaS product development — from MVP to production-ready multi-tenant platforms." },
  { icon: Globe, title: "APIs & Backend Systems", desc: "Robust, well-documented APIs and backend infrastructure designed for reliability and scale." },
  { icon: Cloud, title: "Cloud Deployment", desc: "Cloud-native deployment, containerization, CI/CD pipelines, and infrastructure-as-code." },
  { icon: Bot, title: "AI Integration", desc: "Intelligent automation, machine learning pipelines, and LLM-powered features built into your product." },
  { icon: Shield, title: "Cybersecurity", desc: "Security audits, threat modeling, OWASP-aligned development, and secure infrastructure design." },
  { icon: Zap, title: "Maintenance & Support", desc: "Ongoing technical support, performance monitoring, and continuous improvement of live systems." },
];

const stratServices = [
  { icon: TrendingUp, title: "Business Consulting", desc: "Strategic guidance for organizations navigating complex decisions, market shifts, and growth phases." },
  { icon: BarChart3, title: "Startup Analysis", desc: "Structured analysis and actionable roadmaps for early-stage companies building their foundations." },
  { icon: Globe, title: "Digital Transformation", desc: "End-to-end transformation programs that modernize operations, processes, and technology stacks." },
  { icon: Users, title: "Market Analysis", desc: "Competitive intelligence, market sizing, and data-driven positioning strategies for your sector." },
  { icon: Zap, title: "Performance Optimization", desc: "Operational efficiency reviews and implementation plans that reduce friction and increase output." },
  { icon: Server, title: "Organizational Strategy", desc: "Structure, governance, and team design recommendations aligned with your growth trajectory." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              Full Service Catalog
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
              Services Across Our <span className="text-primary">Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From software engineering to executive strategy — OA GROUP offers a comprehensive range of services designed to move organizations forward intelligently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OA FOR DEV Services */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Technology Division</span>
              </div>
              <h2 className="text-4xl font-bold">OA FOR DEV</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-dev-cta">
              <Link href="/oa-for-dev">Full Division Overview <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/20 hover:bg-card/80 transition-all group"
                data-testid={`service-dev-${i}`}
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

      {/* OA STRATEGIES Services */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Strategy Division</span>
              </div>
              <h2 className="text-4xl font-bold">OA STRATEGIES & CONSULTING</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-strat-cta">
              <Link href="/oa-strategies">Full Division Overview <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stratServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/20 hover:bg-card/80 transition-all group"
                data-testid={`service-strat-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Not sure which service fits?</h2>
            <p className="text-muted-foreground text-lg mb-10">Reach out and we'll help you identify the right approach for your needs.</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="services-contact-cta">
              <Link href="/contact">Start a Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
