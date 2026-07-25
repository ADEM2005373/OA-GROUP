import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code2, Smartphone, Cloud, Shield, Server, TrendingUp, BarChart3, Globe, Zap, Users, ArrowRight, Target, Layers, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

const devServices = [
  { icon: Globe, title: "SEO Local", desc: "Optimisation Google Maps et Google My Business pour être visible là où vos clients vous cherchent." },
  { icon: Users, title: "Réseaux Sociaux", desc: "Stratégie, contenu et animation sur Facebook, Instagram et LinkedIn pour engager votre audience." },
  { icon: BarChart3, title: "Publicité", desc: "Campagnes Facebook Ads et Google Ads ciblées pour générer du trafic et des conversions mesurables." },
  { icon: Code2, title: "Content", desc: "Création de photos, vidéos et copywriting pour donner vie à votre marque sur tous les canaux." },
  { icon: TrendingUp, title: "Analytics", desc: "Suivi des performances avec Google Analytics et rapports clairs pour piloter vos actions." },
  { icon: Shield, title: "E-réputation", desc: "Gestion des avis clients et réponses structurées pour renforcer la confiance et l’image de marque." },
  { icon: Zap, title: "Emailing", desc: "Newsletters et campagnes email conçues pour convertir et fidéliser votre audience." },
  { icon: Cloud, title: "Influence", desc: "Partenariats et ambassadeurs pour amplifier votre visibilité et crédibilité en ligne." },
];

const stratServices = [
  { icon: Code2, title: "Sites Web", desc: "Vitrines, e-commerce et sites responsive conçus pour une présence digitale professionnelle." },
  { icon: Smartphone, title: "Applications", desc: "Applications mobiles iOS/Android et web apps performantes, intuitives et connectées." },
  { icon: Server, title: "Logiciels", desc: "Solutions sur mesure, CRM et ERP adaptées à vos process et enjeux métiers." },
  { icon: Cloud, title: "Cloud", desc: "Hébergement, SaaS et infrastructures cloud scalables pour soutenir votre croissance." },
  { icon: Zap, title: "Maintenance", desc: "Support technique, mises à jour et supervision pour garantir la fiabilité de vos services." },
  { icon: Shield, title: "Sécurité", desc: "Audit, firewall et sauvegarde pour protéger vos données et votre continuité d’activité." },
  { icon: Globe, title: "Conseil", desc: "Architecture IT et digitalisation pour aligner vos systèmes avec vos objectifs métiers." },
  { icon: TrendingUp, title: "Formation", desc: "Accompagnement à l’utilisation des outils et aux bonnes pratiques digitales internes." },
];

const conseilServices = [
  { icon: Target, title: "Audit digital", desc: "Analyse complète de votre présence digitale pour identifier les leviers de performance." },
  { icon: Layers, title: "Stratégie de transformation", desc: "Feuille de route claire pour faire évoluer votre organisation vers le numérique." },
  { icon: CheckCircle, title: "Formation", desc: "Sessions pratiques pour renforcer les compétences de vos équipes sur les outils digitaux." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              Full Service Catalog
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
              Services Across Our <span className="text-primary">Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From software engineering to executive strategy — OADIGI offers a comprehensive range of services designed to move organizations forward intelligently.
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
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Technology Division</span>
              </div>
              <h2 className="text-4xl font-bold">OADIGI Tech</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-dev-cta">
              <Link href="/oa-for-dev">Full Division Overview <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Strategy Division</span>
              </div>
              <h2 className="text-4xl font-bold">OADIGI Strategy</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-strat-cta">
              <Link href="/oa-strategies">Full Division Overview <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stratServices.map((s, i) => (
              <motion.div
                key={s.title}
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
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
                <span className="text-sm font-medium text-primary tracking-wider uppercase">Conseil Digital</span>
              </div>
              <h2 className="text-4xl font-bold">Conseil Digital</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 text-primary self-start md:self-auto" data-testid="services-conseil-cta">
              <Link href="/vision">Découvrez Notre Approche <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conseilServices.map((s, i) => (
              <motion.div
                key={s.title}
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
                <h3 className="font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Not sure which service fits?</h2>
            <p className="text-muted-foreground text-lg mb-10">Reach out and we'll help you identify the right approach for your needs.</p>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground" data-testid="services-contact-cta">
              <Link href="/contact">Start a Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
