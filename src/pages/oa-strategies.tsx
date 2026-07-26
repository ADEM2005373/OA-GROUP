import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { TrendingUp, BarChart3, Globe, Zap, Users, Target, CheckCircle, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const services = [
  { icon: TrendingUp, titleKey: "oaStrategies.servicesItems.0.title", descKey: "oaStrategies.servicesItems.0.description" },
  { icon: Target, titleKey: "oaStrategies.servicesItems.1.title", descKey: "oaStrategies.servicesItems.1.description" },
  { icon: Globe, titleKey: "oaStrategies.servicesItems.2.title", descKey: "oaStrategies.servicesItems.2.description" },
  { icon: BarChart3, titleKey: "oaStrategies.servicesItems.3.title", descKey: "oaStrategies.servicesItems.3.description" },
  { icon: Zap, titleKey: "oaStrategies.servicesItems.4.title", descKey: "oaStrategies.servicesItems.4.description" },
  { icon: Layers, titleKey: "oaStrategies.servicesItems.5.title", descKey: "oaStrategies.servicesItems.5.description" },
  { icon: Users, titleKey: "oaStrategies.servicesItems.6.title", descKey: "oaStrategies.servicesItems.6.description" },
  { icon: Globe, titleKey: "oaStrategies.servicesItems.7.title", descKey: "oaStrategies.servicesItems.7.description" },
];

const approach = [
  { number: "01", titleKey: "oaStrategies.approach.0.title", descKey: "oaStrategies.approach.0.description" },
  { number: "02", titleKey: "oaStrategies.approach.1.title", descKey: "oaStrategies.approach.1.description" },
  { number: "03", titleKey: "oaStrategies.approach.2.title", descKey: "oaStrategies.approach.2.description" },
  { number: "04", titleKey: "oaStrategies.approach.3.title", descKey: "oaStrategies.approach.3.description" },
  { number: "05", titleKey: "oaStrategies.approach.4.title", descKey: "oaStrategies.approach.4.description" },
];

export default function OaStrategies() {
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
              <span className="text-sm font-medium text-primary tracking-wider uppercase border border-primary/20 rounded-full px-3 py-1 bg-primary/5">{t("oaStrategies.hero.eyebrow")}</span>
            </div>
            <div className="mb-8">
              <img src="/logo-oa-group.png" alt="OADIGI Strategy" className="h-32 w-auto object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight sr-only">
              OADIGI Strategy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              {t("oaStrategies.hero.description")}
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="strat-hero-cta">
                <Link href="/contact">{t("oaStrategies.hero.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/40">
                <Link href="/vision">{t("oaStrategies.hero.secondary")}</Link>
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
                badge={t("oaStrategies.philosophy.badge")}
                title={t("oaStrategies.philosophy.title")}
                subtitle={t("oaStrategies.philosophy.subtitle")}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("oaStrategies.philosophy.body1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("oaStrategies.philosophy.body2")}
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
          <SectionHeader badge={t("oaStrategies.services.badge")} title={t("oaStrategies.services.title")} subtitle={t("oaStrategies.services.subtitle")} />
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
                <h3 className="font-semibold mb-2">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey)}</p>
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
                badge={t("oaStrategies.digitalTransformation.badge")}
                title={t("oaStrategies.digitalTransformation.title")}
                subtitle={t("oaStrategies.digitalTransformation.subtitle")}
              />
              <div className="space-y-4">
                {(t("oaStrategies.digitalTransformation.items", { returnObjects: true }) as string[]).map((point) => (
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
                  {t("oaStrategies.startup.badge")}
                </div>
                <h2 className="text-3xl font-bold mb-6">{t("oaStrategies.startup.title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("oaStrategies.startup.subtitle")}
                </p>
                <Button asChild className="rounded-full bg-primary text-primary-foreground" data-testid="startup-cta">
                  <Link href="/contact">{t("oaStrategies.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
              <div className="space-y-4">
                {(t("oaStrategies.startup.items", { returnObjects: true }) as string[]).map((point) => (
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
          <SectionHeader badge={t("oaStrategies.approachSection.badge")} title={t("oaStrategies.approachSection.title")} subtitle={t("oaStrategies.approachSection.subtitle")} />
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
            <h2 className="text-4xl font-bold mb-6">{t("oaStrategies.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-10">{t("oaStrategies.cta.subtitle")}</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="strat-contact-cta">
              <Link href="/contact">{t("oaStrategies.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
