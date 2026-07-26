import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Code2, TrendingUp, Shield, Globe, Cpu, BarChart3, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
              {t("home.hero.badge")}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]"
            >
              {t("home.hero.title")}
              <br />
              <span className="text-primary">{t("home.hero.titleAccent")}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              {t("home.hero.subtitle")}
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
                  {t("home.hero.buttons.explore")} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border/50 text-foreground hover:border-primary/50 font-semibold text-base"
                data-testid="hero-discover"
              >
                <Link href="/services">{t("home.hero.buttons.discover")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 text-muted-foreground hover:text-foreground font-semibold text-base"
                data-testid="hero-contact"
              >
                <Link href="/contact">{t("home.hero.buttons.contact")}</Link>
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
              {t("home.ecosystem.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {t("home.ecosystem.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t("home.ecosystem.subtitle")}
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
                    {t("home.ecosystem.tech.eyebrow")}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">OADIGI Tech</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("home.ecosystem.tech.description")}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {(t("home.ecosystem.tech.items", { returnObjects: true }) as string[]).map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary" data-testid="card-oa-for-dev">
                  <Link href="/oa-for-dev">
                    {t("home.ecosystem.tech.button")} <ArrowRight className="w-4 h-4 ml-2" />
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
                    {t("home.ecosystem.strategy.eyebrow")}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">OADIGI Strategy</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("home.ecosystem.strategy.description")}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {(t("home.ecosystem.strategy.items", { returnObjects: true }) as string[]).map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary" data-testid="card-oa-strategies">
                  <Link href="/oa-strategies">
                    {t("home.ecosystem.strategy.button")} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
              {t("home.philosophy.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl">
              {t("home.philosophy.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {(t("home.philosophy.items", { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  {i % 3 === 0 ? <Globe className="w-5 h-5 text-primary" /> : i % 3 === 1 ? <Shield className="w-5 h-5 text-primary" /> : <Cpu className="w-5 h-5 text-primary" />}
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
                {t("home.vision.badge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("home.vision.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                {t("home.vision.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="vision-cta">
                  <Link href="/vision">
                    {t("home.vision.button")} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/30 hover:border-primary/60 text-foreground">
                  <Link href="/contact">{t("home.vision.secondary")}</Link>
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
