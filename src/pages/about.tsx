import { motion } from "framer-motion";
import { Shield, Target, Eye, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

export default function About() {
  const { t } = useTranslation();
  const values = t("about.valuesItems", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {t("about.hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              {t("about.hero.title")} <span className="text-primary">{t("about.hero.titleAccent")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("about.hero.subtitle")}
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
                badge={t("about.story.badge")}
                title={t("about.story.title")}
                subtitle={t("about.story.subtitle")}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.story.body1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.story.body2")}
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
            <SectionHeader badge={t("about.values.badge")} title={t("about.values.title")} align="center" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card text-center hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                  {i % 4 === 0 ? <Shield className="w-6 h-6 text-primary" /> : i % 4 === 1 ? <Target className="w-6 h-6 text-primary" /> : i % 4 === 2 ? <Eye className="w-6 h-6 text-primary" /> : <Layers className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
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
                badge={t("about.ecosystem.badge")}
                title={t("about.ecosystem.title")}
                subtitle={t("about.ecosystem.subtitle")}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.ecosystem.body1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.ecosystem.body2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">{t("about.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-10">{t("about.cta.subtitle")}</p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="about-services-cta">
                <Link href="/services">{t("about.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/40">
                <Link href="/contact">{t("about.cta.secondary")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
