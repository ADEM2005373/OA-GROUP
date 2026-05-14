import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Eye, Globe, Cpu, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

export default function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              Vision & Strategy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              Where We're <span className="text-primary">Going</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              OA GROUP was built with a long-range perspective. Our vision is not a destination — it's a direction. And we're committed to moving in it consistently, decisively, and transparently.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80"
              alt="Digital future vision"
              className="rounded-2xl object-cover w-full h-80 md:h-[450px] border border-border/50"
              data-testid="img-vision-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge="Our Vision"
                title="A Digital Ecosystem Built to Last"
                subtitle="We're not building a company for the next quarter. We're building an institution for the next decade."
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                OA GROUP envisions a future where technology and strategic intelligence are seamlessly integrated — where organizations in our region and beyond can access world-class digital capabilities without compromise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are at the beginning of that journey. As an emerging company, we are building our reputation on quality, honesty, and long-term thinking — not on inflated claims or short-term wins.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every service we offer today is designed with tomorrow in mind. Every client relationship is treated as a long-term partnership, not a transaction.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {[
                { icon: Globe, title: "Regional Leadership", desc: "Becoming a recognized force in digital transformation and technology consulting across North Africa and beyond." },
                { icon: Cpu, title: "Technical Excellence", desc: "Maintaining the highest standards of engineering quality as we grow — never trading speed for integrity." },
                { icon: TrendingUp, title: "Scalable Impact", desc: "Building systems and methodologies that create compounding value for our clients over time." },
                { icon: Shield, title: "Trusted Partnership", desc: "Being known as the firm that tells clients what they need to hear — not just what they want to hear." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionHeader badge="Strategic Priorities" title="How We Think About the Future" align="center" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Depth Over Breadth",
                desc: "We'd rather be exceptional at a focused set of services than passable at many. Specialization compounds. Generalism dilutes."
              },
              {
                title: "Trust Is the Business",
                desc: "In consulting and technology, trust is the only real moat. We invest in it deliberately — through transparency, quality, and honesty in every interaction."
              },
              {
                title: "Technology Serves People",
                desc: "We build and advise with human impact in mind. The best digital solutions are the ones that genuinely make things better for the people who use them."
              },
              {
                title: "Emerging Markets, Global Standards",
                desc: "We believe our region deserves access to the same quality of digital services available anywhere in the world. That's what we're building toward."
              },
              {
                title: "Long-Term Relationships",
                desc: "The most valuable client relationships are built over years, not engagements. We structure how we work to support continuity and trust over time."
              },
              {
                title: "Continuous Learning",
                desc: "Technology evolves constantly. We invest deliberately in staying current — not to chase trends, but to serve our clients with the best available tools."
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card"
              >
                <div className="w-8 h-0.5 bg-primary mb-5" />
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <Eye className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                "We're not trying to be the biggest.<br />We're trying to be the most trusted."
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                That's the standard we hold ourselves to — in every engagement, every deliverable, every conversation.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="vision-contact-cta">
                <Link href="/contact">Start a Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
