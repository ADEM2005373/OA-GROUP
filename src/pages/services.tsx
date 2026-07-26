import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Code2, Smartphone, Cloud, Shield, Server, TrendingUp, BarChart3, Globe, Zap, Users, ArrowRight, Target, Layers, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const devServices = [
  { icon: Globe, titleKey: "services.tech.items.0.title", descKey: "services.tech.items.0.description" },
  { icon: Users, titleKey: "services.tech.items.1.title", descKey: "services.tech.items.1.description" },
  { icon: BarChart3, titleKey: "services.tech.items.2.title", descKey: "services.tech.items.2.description" },
  { icon: Code2, titleKey: "services.tech.items.3.title", descKey: "services.tech.items.3.description" },
  { icon: TrendingUp, titleKey: "services.tech.items.4.title", descKey: "services.tech.items.4.description" },
  { icon: Shield, titleKey: "services.tech.items.5.title", descKey: "services.tech.items.5.description" },
  { icon: Zap, titleKey: "services.tech.items.6.title", descKey: "services.tech.items.6.description" },
  { icon: Cloud, titleKey: "services.tech.items.7.title", descKey: "services.tech.items.7.description" },
];

const stratServices = [
  { icon: Code2, titleKey: "services.strategy.items.0.title", descKey: "services.strategy.items.0.description" },
  { icon: Smartphone, titleKey: "services.strategy.items.1.title", descKey: "services.strategy.items.1.description" },
  { icon: Server, titleKey: "services.strategy.items.2.title", descKey: "services.strategy.items.2.description" },
  { icon: Cloud, titleKey: "services.strategy.items.3.title", descKey: "services.strategy.items.3.description" },
  { icon: Zap, titleKey: "services.strategy.items.4.title", descKey: "services.strategy.items.4.description" },
  { icon: Shield, titleKey: "services.strategy.items.5.title", descKey: "services.strategy.items.5.description" },
  { icon: Globe, titleKey: "services.strategy.items.6.title", descKey: "services.strategy.items.6.description" },
  { icon: TrendingUp, titleKey: "services.strategy.items.7.title", descKey: "services.strategy.items.7.description" },
];

const conseilServices = [
  { icon: Target, titleKey: "services.consulting.items.0.title", descKey: "services.consulting.items.0.description" },
  { icon: Layers, titleKey: "services.consulting.items.1.title", descKey: "services.consulting.items.1.description" },
  { icon: CheckCircle, titleKey: "services.consulting.items.2.title", descKey: "services.consulting.items.2.description" },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {t("services.hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
              {t("services.hero.title")} <span className="text-primary">{t("services.hero.titleAccent")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("services.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* OADIGI Tech Services */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wider uppercase">{t("services.tech.badge")}</span>
              </div>
              <h2 className="text-4xl font-bold">{t("services.tech.title")}</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-dev-cta">
              <Link href="/oa-for-dev">{t("services.tech.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
                <h3 className="font-semibold mb-2">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OADIGI Strategy Services */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wider uppercase">{t("services.strategy.badge")}</span>
              </div>
              <h2 className="text-4xl font-bold">{t("services.strategy.title")}</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-strat-cta">
              <Link href="/oa-strategies">{t("services.strategy.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{stratServices.map((s, i) => (
              <motion.div
                key={s.titleKey}
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
                <h3 className="font-semibold mb-3">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSEIL DIGITAL */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary tracking-wider uppercase">{t("services.consulting.badge")}</span>
              </div>
              <h2 className="text-4xl font-bold">{t("services.consulting.title")}</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-conseil-cta">
              <Link href="/vision">{t("services.consulting.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{conseilServices.map((s, i) => (
              <motion.div
                key={s.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/20 hover:bg-card/80 transition-all group"
                data-testid={`service-conseil-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{t(s.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">{t("services.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-10">{t("services.cta.subtitle")}</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="services-contact-cta">
              <Link href="/contact">{t("services.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
