import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Terms() {
  const { t } = useTranslation();
  const sections = t("legal.terms.sections", { returnObjects: true }) as Array<{ title: string; content: string }>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {t("legal.terms.badge")}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">{t("legal.terms.title")}</h1>
            <p className="text-muted-foreground text-lg">{t("legal.terms.updated")}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="p-8 rounded-xl border border-primary/20 bg-primary/5 mb-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("legal.terms.intro")}
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="border-b border-border/30 pb-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
