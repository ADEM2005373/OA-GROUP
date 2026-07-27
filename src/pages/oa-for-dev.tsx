import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Code2, Smartphone, Cloud, Bot, Shield, Server, Globe, Zap, GitBranch, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const services = [
  { icon: Code2, titleKey: "oaForDev.servicesItems.0.title", descKey: "oaForDev.servicesItems.0.description" },
  { icon: Smartphone, titleKey: "oaForDev.servicesItems.1.title", descKey: "oaForDev.servicesItems.1.description" },
  { icon: Server, titleKey: "oaForDev.servicesItems.2.title", descKey: "oaForDev.servicesItems.2.description" },
  { icon: Globe, titleKey: "oaForDev.servicesItems.3.title", descKey: "oaForDev.servicesItems.3.description" },
  { icon: Cloud, titleKey: "oaForDev.servicesItems.4.title", descKey: "oaForDev.servicesItems.4.description" },
  { icon: Bot, titleKey: "oaForDev.servicesItems.5.title", descKey: "oaForDev.servicesItems.5.description" },
  { icon: Shield, titleKey: "oaForDev.servicesItems.6.title", descKey: "oaForDev.servicesItems.6.description" },
  { icon: Zap, titleKey: "oaForDev.servicesItems.7.title", descKey: "oaForDev.servicesItems.7.description" },
];

const processSteps = [
  { number: "01", titleKey: "oaForDev.process.steps.0.title", descKey: "oaForDev.process.steps.0.description" },
  { number: "02", titleKey: "oaForDev.process.steps.1.title", descKey: "oaForDev.process.steps.1.description" },
  { number: "03", titleKey: "oaForDev.process.steps.2.title", descKey: "oaForDev.process.steps.2.description" },
  { number: "04", titleKey: "oaForDev.process.steps.3.title", descKey: "oaForDev.process.steps.3.description" },
  { number: "05", titleKey: "oaForDev.process.steps.4.title", descKey: "oaForDev.process.steps.4.description" },
  { number: "06", titleKey: "oaForDev.process.steps.5.title", descKey: "oaForDev.process.steps.5.description" },
];

export default function OaForDev() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-medium text-primary tracking-wider uppercase border border-primary/20 rounded-full px-3 py-1 bg-primary/5">{t("oaForDev.hero.eyebrow")}</span>
            </div>
            <div className="mb-8">
              <img src="/logo-oa-group.png" alt="OADIGI Tech" className="h-32 w-auto object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight sr-only">
              OADIGI Tech
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              {t("oaForDev.hero.description")}
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="dev-hero-cta">
                <Link href="/contact">{t("oaForDev.hero.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/40">
                <Link href="/projects">{t("oaForDev.hero.secondary")}</Link>
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
          <SectionHeader badge={t("oaForDev.services.badge")} title={t("oaForDev.services.title")} subtitle={t("oaForDev.services.subtitle")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.titleKey}
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
                <h3 className="font-semibold mb-2">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey)}</p>
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
                badge={t("oaForDev.ai.badge")}
                title={t("oaForDev.ai.title")}
                subtitle={t("oaForDev.ai.subtitle")}
              />
              <div className="space-y-4">
                {(t("oaForDev.ai.items", { returnObjects: true }) as string[]).map((point) => (
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
                badge={t("oaForDev.security.badge")}
                title={t("oaForDev.security.title")}
                subtitle={t("oaForDev.security.subtitle")}
              />
              <div className="space-y-4">
                {(t("oaForDev.security.items", { returnObjects: true }) as string[]).map((point) => (
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
            <SectionHeader badge={t("oaForDev.cloud.badge")} title={t("oaForDev.cloud.title")} subtitle={t("oaForDev.cloud.subtitle")} align="center" />
          </div>
<div className="grid md:grid-cols-3 gap-8">
            {(t("oaForDev.cloud.items", { returnObjects: true }) as Array<{title: string; description: string}>).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  {i === 0 ? <Cloud className="w-6 h-6 text-primary" /> : i === 1 ? <GitBranch className="w-6 h-6 text-primary" /> : <Layers className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge={t("oaForDev.techStack.badge")} title={t("oaForDev.techStack.title")} subtitle={t("oaForDev.techStack.subtitle")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t("oaForDev.techStack.categories", { returnObjects: true }) as Array<{category: string; techs: string[]}>).map((cat, i) => (
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
          <SectionHeader badge={t("oaForDev.process.badge")} title={t("oaForDev.process.title")} subtitle={t("oaForDev.process.subtitle")} />
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
                <h3 className="text-lg font-semibold mb-3 relative z-10">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{t(step.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">{t("oaForDev.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-10">{t("oaForDev.cta.subtitle")}</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="dev-contact-cta">
              <Link href="/contact">{t("oaForDev.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
