import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp, Shield, Globe, Cpu, BarChart3, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/2 rounded-full blur-3xl" />
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(184 100% 50%) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(184 100% 50%) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32 pb-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8 tracking-wider uppercase"
            >
              A Modern Commercial Ecosystem
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
            >
              Building Intelligent
              <br />
              <span className="text-primary">Digital Futures</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              OA GROUP combines technology, strategy, and digital transformation
              to help businesses evolve intelligently and securely.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base"
                data-testid="hero-explore"
              >
                <Link href="/services">
                  Explore Our Ecosystem <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border/50 text-foreground hover:border-primary/50 font-semibold text-base"
                data-testid="hero-discover"
              >
                <Link href="/services">Discover Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 text-muted-foreground hover:text-foreground font-semibold text-base"
                data-testid="hero-contact"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              The Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Two Specialized Divisions.
              <br />One Vision.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              OA GROUP is designed as a synergistic ecosystem where technology and strategy converge to drive lasting transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* OA FOR DEV Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary tracking-wider uppercase border border-primary/20 rounded-full px-3 py-1 bg-primary/5">
                    Technology Division
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">OA FOR DEV</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our technology arm specializes in software engineering, AI integration, cloud infrastructure, and cybersecurity. We build scalable digital products designed for the future.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Web Applications", "AI Integration", "Cloud & DevOps", "Cybersecurity", "SaaS Platforms", "Mobile Apps"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary" data-testid="card-oa-for-dev">
                  <Link href="/oa-for-dev">
                    Explore OA FOR DEV <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* OA STRATEGIES Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary tracking-wider uppercase border border-primary/20 rounded-full px-3 py-1 bg-primary/5">
                    Strategy Division
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">OA STRATEGIES</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our consulting division delivers executive-level strategic guidance, startup mentorship, market intelligence, and organizational transformation at every scale.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Business Consulting", "Startup Analysis", "Digital Transformation", "Market Research", "Org. Strategy", "Growth Consulting"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary" data-testid="card-oa-strategies">
                  <Link href="/oa-strategies">
                    Explore OA STRATEGIES <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why OA GROUP */}
      <section className="py-32 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl">
              Built for the Next Generation of Digital Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Growth-Oriented",
                description: "Every service we offer is designed with scalability in mind — from the first line of code to the final strategic recommendation."
              },
              {
                icon: Shield,
                title: "Security-First",
                description: "We embed security thinking into every engagement. Cybersecurity is not an afterthought — it's a foundation."
              },
              {
                icon: Cpu,
                title: "Innovation-Focused",
                description: "We stay ahead of emerging technologies so our clients don't have to. AI, cloud, and modern architectures are our native terrain."
              },
              {
                icon: BarChart3,
                title: "Analytically Rigorous",
                description: "Decisions at OA GROUP are data-informed and strategically grounded — no guesswork, no shortcuts."
              },
              {
                icon: TrendingUp,
                title: "Long-Term Thinking",
                description: "We focus on sustainable digital transformation, not quick fixes. Our relationships are built to last."
              },
              {
                icon: Code2,
                title: "Technically Excellent",
                description: "Clean code, modern architectures, and industry best practices are the baseline — not the aspiration."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Teaser */}
      <section className="py-32 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-16 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-primary/10 blur-3xl rounded-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                Vision 2025 & Beyond
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We're Just Getting Started
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                OA GROUP is an emerging force in the digital ecosystem. We're building the foundation for something significant — a company that will define the next decade of digital transformation in the region and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="vision-cta">
                  <Link href="/vision">
                    Our Vision <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/30 hover:border-primary/60 text-foreground">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
