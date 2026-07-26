import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Eye, Globe, Cpu, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const visionItems = [
  { icon: Globe, titleKey: "visionPage.section.items.0.title", descKey: "visionPage.section.items.0.description" },
  { icon: Cpu, titleKey: "visionPage.section.items.1.title", descKey: "visionPage.section.items.1.description" },
  { icon: TrendingUp, titleKey: "visionPage.section.items.2.title", descKey: "visionPage.section.items.2.description" },
  { icon: Shield, titleKey: "visionPage.section.items.3.title", descKey: "visionPage.section.items.3.description" },
];

const priorities = [
  { titleKey: "visionPage.priorities.0.title", descKey: "visionPage.priorities.0.description" },
  { titleKey: "visionPage.priorities.1.title", descKey: "visionPage.priorities.1.description" },
  { titleKey: "visionPage.priorities.2.title", descKey: "visionPage.priorities.2.description" },
  { titleKey: "visionPage.priorities.3.title", descKey: "visionPage.priorities.3.description" },
  { titleKey: "visionPage.priorities.4.title", descKey: "visionPage.priorities.4.description" },
  { titleKey: "visionPage.priorities.5.title", descKey: "visionPage.priorities.5.description" },
];

export default function Vision() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {t("visionPage.hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              {t("visionPage.hero.title")} <span className="text-primary">{t("visionPage.hero.titleAccent")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("visionPage.hero.subtitle")}
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
                badge={t("visionPage.section.badge")}
                title={t("visionPage.section.title")}
                subtitle={t("visionPage.section.subtitle")}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("visionPage.section.body1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("visionPage.section.body2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("visionPage.section.body3")}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {visionItems.map((item, i) => (
                <motion.div
                  key={item.titleKey}
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
                    <h3 className="font-semibold mb-1">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
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
            <SectionHeader badge={t("visionPage.priorities.badge")} title={t("visionPage.priorities.title")} align="center" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {priorities.map((item, i) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card"
              >
                <div className="w-8 h-0.5 bg-primary mb-5" />
                <h3 className="text-lg font-semibold mb-3">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
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
                {t("visionPage.cta.title")}
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                {t("visionPage.cta.subtitle")}
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="vision-contact-cta">
                <Link href="/contact">{t("visionPage.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
