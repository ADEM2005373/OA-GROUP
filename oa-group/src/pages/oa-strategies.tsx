import { motion } from "framer-motion";
import { Link } from "wouter";
import { TrendingUp, BarChart3, Globe, Zap, Users, Target, CheckCircle, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const services = [
  { icon: TrendingUp, title: "Business Consulting", desc: "Strategic guidance for organizations at critical inflection points — growth phases, restructuring, or market expansion." },
  { icon: Target, title: "Startup Analysis", desc: "Structured analysis of your business model, market fit, and growth trajectory. Actionable insights for early-stage teams." },
  { icon: Globe, title: "Digital Transformation", desc: "End-to-end transformation programs that modernize how organizations operate, communicate, and deliver value." },
  { icon: BarChart3, title: "Market Analysis", desc: "Competitive intelligence, market sizing, and positioning strategies grounded in real data and sector knowledge." },
  { icon: Zap, title: "Performance Optimization", desc: "Operational efficiency reviews that identify friction, reduce waste, and unlock capacity within existing structures." },
  { icon: Layers, title: "Organizational Strategy", desc: "Structure, governance, and team design recommendations aligned with where your organization needs to go." },
  { icon: Users, title: "Business Growth Consulting", desc: "Revenue growth strategy, customer acquisition planning, and go-to-market refinement for scaling businesses." },
  { icon: Globe, title: "Executive Advisory", desc: "Ongoing strategic counsel for leadership teams navigating complex, fast-moving business environments." },
];

const approach = [
  { number: "01", title: "Situation Assessment", desc: "We begin by deeply understanding your current state — your goals, constraints, competitive context, and internal dynamics." },
  { number: "02", title: "Analytical Framework", desc: "We apply structured analytical models to assess your market, organization, and opportunities without bias." },
  { number: "03", title: "Strategic Options", desc: "We develop a set of strategic options with clear trade-offs, so leadership can make informed decisions." },
  { number: "04", title: "Recommendation & Roadmap", desc: "We deliver a clear, prioritized recommendation with an actionable implementation roadmap." },
  { number: "05", title: "Implementation Support", desc: "We stay engaged through execution — coaching, monitoring progress, and adapting the strategy as conditions change." },
];

export default function OaStrategies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-medium text-primary tracking-wider uppercase border border-primary/20 rounded-full px-3 py-1 bg-primary/5">Strategy Division</span>
            </div>
            <div className="mb-8">
              <img src="/logo-oa-consulting.png" alt="OA STRATEGIES & CONSULTING" className="h-32 w-auto object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight sr-only">
              OA STRATEGIES &amp; CONSULTING
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Executive-level strategic consulting for organizations that demand more than generic advice. We help businesses think clearly, decide confidently, and transform intelligently.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="strat-hero-cta">
                <Link href="/contact">Engage With Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/40">
                <Link href="/vision">Our Vision</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"
              alt="Executive consulting session"
              className="rounded-2xl object-cover w-full h-80 md:h-[450px] border border-border/50"
              data-testid="img-strat-hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="Our Philosophy"
                title="Strategy Without Clarity is Just Opinion"
                subtitle="We believe great consulting isn't about producing reports — it's about helping leadership teams see their situation more clearly and act more decisively."
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                OA STRATEGIES & CONSULTING was built on a conviction that businesses — especially emerging ones — deserve access to serious strategic thinking, not just industry templates and generic frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with our clients to understand their specific context, their specific challenges, and their specific ambitions. The result is strategy that actually fits — not a playbook borrowed from someone else's situation.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Strategic analysis and consulting"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-strat-analysis"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Services" title="What We Offer" subtitle="A comprehensive range of strategic consulting services for businesses at every stage." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all group"
                data-testid={`strat-service-${i}`}
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

      {/* Digital Transformation */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Digital transformation"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-digital-transform"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="Digital Transformation"
                title="From Legacy to Leadership"
                subtitle="Digital transformation isn't about technology — it's about rethinking how your organization creates and delivers value in a digital world."
              />
              <div className="space-y-4">
                {[
                  "Process digitization and workflow automation assessment",
                  "Technology adoption roadmap tailored to your sector",
                  "Change management planning and communication strategy",
                  "Digital capability gap analysis and upskilling recommendations",
                  "Vendor selection and implementation oversight",
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

      {/* Startup Support */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                  Startup Advisory
                </div>
                <h2 className="text-3xl font-bold mb-6">Built for Founders Who Think Long-Term</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Early-stage companies face decisions that shape everything that follows. Our startup advisory practice provides rigorous, honest strategic counsel — without the fluff.
                </p>
                <Button asChild className="rounded-full bg-primary text-primary-foreground" data-testid="startup-cta">
                  <Link href="/contact">Talk to Our Team <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  "Business model validation and iteration",
                  "Competitive positioning and differentiation strategy",
                  "Go-to-market planning and channel selection",
                  "Financial modeling and planning frameworks",
                  "Investor readiness and pitch preparation",
                  "Scaling strategy and organizational design",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-muted-foreground text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Approach" title="How We Engage" subtitle="A clear, disciplined engagement model that respects your time and delivers real results." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, i) => (
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
            <h2 className="text-4xl font-bold mb-6">Let's think through your challenge together.</h2>
            <p className="text-muted-foreground text-lg mb-10">A focused initial conversation is often where the real strategic clarity begins.</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="strat-contact-cta">
              <Link href="/contact">Request a Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
