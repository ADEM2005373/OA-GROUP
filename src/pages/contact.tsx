import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const FORM_ACTION_URL = "https://formspree.io/f/mlgzyegd";

const services = [
  "Web Applications",
  "Mobile Applications",
  "SaaS Platforms",
  "AI Integration",
  "Cybersecurity",
  "Cloud & DevOps",
  "Business Consulting",
  "Digital Transformation",
  "Startup Analysis",
  "Market Analysis",
  "Other",
];

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const response = await fetch(FORM_ACTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {t("contact.hero.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
              {t("contact.hero.title")} <span className="text-primary">{t("contact.hero.titleAccent")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("contact.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <a
                  href="mailto:oa.for.dev@gmail.com"
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group block"
                  data-testid="contact-email"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t("contact.cards.email")}</p>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">oa.for.dev@gmail.com</p>
                  </div>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <a
                  href="tel:+21625679772"
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group block"
                  data-testid="contact-phone-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">+216 25 679 772</p>
                  </div>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <a
                  href="tel:+21629763603"
                  className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all group block"
                  data-testid="contact-phone-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">+216 29 763 603</p>
                  </div>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t("contact.cards.location")}</p>
                    <p className="font-medium text-sm">Tunisia</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{t("contact.cards.locationText")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="p-6 rounded-xl border border-primary/20 bg-primary/5"
              >
                <p className="text-sm font-medium mb-2">{t("contact.cards.responseTime")}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("contact.cards.responseText")}
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 md:p-10 rounded-2xl border border-border/50 bg-card">
                <h2 className="text-2xl font-bold mb-8">{t("contact.form.title")}</h2>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 mb-8"
                    data-testid="form-success"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm font-medium">{t("contact.form.success")}</p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 mb-8"
                    data-testid="form-error"
                  >
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <p className="text-sm">{t("contact.form.error")}</p>
                  </motion.div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">{t("contact.form.fullName")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contact.form.fullNamePlaceholder")}
                                className="bg-background border-border/50 focus:border-primary/50 rounded-lg"
                                data-testid="input-fullName"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">{t("contact.form.companyName")}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t("contact.form.companyNamePlaceholder")}
                                className="bg-background border-border/50 focus:border-primary/50 rounded-lg"
                                data-testid="input-companyName"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">{t("contact.form.email")}</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={t("contact.form.emailPlaceholder")}
                                className="bg-background border-border/50 focus:border-primary/50 rounded-lg"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">{t("contact.form.phone")}</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder={t("contact.form.phonePlaceholder")}
                                className="bg-background border-border/50 focus:border-primary/50 rounded-lg"
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">{t("contact.form.service")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border/50 focus:border-primary/50 rounded-lg" data-testid="select-service">
                                <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border/50">
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>{s}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">{t("contact.form.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.messagePlaceholder")}
                              rows={5}
                              className="bg-background border-border/50 focus:border-primary/50 rounded-lg resize-none"
                              data-testid="input-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 h-auto"
                      data-testid="button-submit"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          {t("contact.form.submitting")}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          {t("contact.form.submit")}
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t("contact.form.privacy")} {" "}
                      <a href="/privacy" className="text-primary hover:underline">{t("contact.form.privacyLink")}</a>.
                      {t("contact.form.privacyNote")}
                    </p>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
