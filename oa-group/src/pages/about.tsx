import { motion } from "framer-motion";
import { Shield, Target, Eye, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              About OA GROUP
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              A New Kind of <span className="text-primary">Digital Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              OA GROUP is a modern commercial holding company built around two specialized divisions — united by a shared belief that technology and strategy must evolve together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="Our Story"
                title="Built with Purpose from Day One"
                subtitle="OA GROUP was founded with a clear conviction: businesses in the digital age need both technical excellence and strategic clarity — not one or the other."
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                As an emerging company, we've chosen to build our reputation on transparency, quality, and honest communication. We don't claim decades of experience or thousands of clients — we claim a rigorous commitment to doing things right and a genuine passion for the work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement we take on is an opportunity to demonstrate that modern digital services can be delivered with precision, integrity, and long-term perspective.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern office environment"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-office"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionHeader badge="Core Values" title="What We Stand For" align="center" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Transparency", desc: "We communicate honestly about what we can and cannot do. No overpromising, no vague claims." },
              { icon: Target, title: "Precision", desc: "Our work is deliberate and measured. We prefer doing fewer things exceptionally well over many things passably." },
              { icon: Eye, title: "Vision", desc: "We think long-term. Every recommendation and product we build is designed to scale and endure." },
              { icon: Layers, title: "Integrity", desc: "Client confidentiality, ethical data handling, and responsible practices are non-negotiable at OA GROUP." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card text-center hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem explanation */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-team"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="The Ecosystem Model"
                title="Why an Ecosystem?"
                subtitle="Most companies are either technology vendors or consultancies. OA GROUP is designed to be both — with two distinct but deeply connected divisions."
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                OA FOR DEV handles the technical execution — the code, the infrastructure, the AI, the security. OA STRATEGIES & CONSULTING provides the strategic layer — helping businesses understand where they need to go and how to get there intelligently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Together, they offer clients a complete journey: from strategic vision to technical realization. This is what we mean by a digital ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to learn more?</h2>
            <p className="text-muted-foreground text-lg mb-10">Explore our services or reach out directly — we'd love to discuss how OA GROUP can support your goals.</p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="about-services-cta">
                <Link href="/services">View Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/40">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
