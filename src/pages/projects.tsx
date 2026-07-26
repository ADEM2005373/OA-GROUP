import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { ArrowRight, Search, Lightbulb, Code2, CheckCircle, Repeat, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const principlesKeys = [
  { icon: Search, titleKey: "projects.principles.0.title", descKey: "projects.principles.0.description" },
  { icon: Lightbulb, titleKey: "projects.principles.1.title", descKey: "projects.principles.1.description" },
  { icon: Code2, titleKey: "projects.principles.2.title", descKey: "projects.principles.2.description" },
  { icon: CheckCircle, titleKey: "projects.principles.3.title", descKey: "projects.principles.3.description" },
  { icon: Repeat, titleKey: "projects.principles.4.title", descKey: "projects.principles.4.description" },
  { icon: Users, titleKey: "projects.principles.5.title", descKey: "projects.principles.5.description" },
];

export default function Projects() {
  const { t } = useTranslation();

  const phases = t("projects.phases", { returnObjects: true }) as Array<{
    number: string;
    title: string;
    duration: string;
    activities: string[];
  }>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {t("projects.hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              {t("projects.hero.title")} <span className="text-primary">{t("projects.hero.titleAccent")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("projects.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1400&q=80"
              alt="Project methodology and planning"
              className="rounded-2xl object-cover w-full h-80 md:h-[400px] border border-border/50"
              data-testid="img-methodology"
            />
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge={t("projects.principles.badge")} title={t("projects.principles.title")} subtitle={t("projects.principles.subtitle")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principlesKeys.map((p, i) => (
              <motion.div
                key={p.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{t(p.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(p.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge={t("projects.engagement.badge")} title={t("projects.engagement.title")} subtitle={t("projects.engagement.subtitle")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-8 rounded-xl border border-border/50 bg-card"
                data-testid={`phase-${phase.number}`}
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6">{phase.number}</span>
                <div className="relative z-10">
                  <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary mb-3">
                    {phase.duration}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.activities.map((act) => (
                      <li key={act} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Commitment */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                badge={t("projects.commitment.badge")}
                title={t("projects.commitment.title")}
                subtitle={t("projects.commitment.subtitle")}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("projects.commitment.body1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("projects.commitment.body2")}
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="methodology-contact-cta">
                <Link href="/contact">{t("projects.cta.button")} <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Collaborative team work"
                className="rounded-2xl object-cover w-full aspect-[4/3] border border-border/50"
                data-testid="img-collaboration"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
