import { Link } from "wouter";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <img
                src="/logo-oa-group.png"
                alt="OADIGI"
                className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:oa.for.dev@gmail.com" className="text-sm flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground">
                <Mail className="w-4 h-4" /> oa.for.dev@gmail.com
              </a>
              <a href="tel:+21625679772" className="text-sm flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground">
                <Phone className="w-4 h-4" /> +216 25 679 772
              </a>
              <a href="tel:+21629763603" className="text-sm flex items-center gap-2 hover:text-primary transition-colors text-muted-foreground">
                <Phone className="w-4 h-4" /> +216 29 763 603
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t("footer.ecosystem")}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/oa-for-dev" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  {t("footer.links.tech")}
                  <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/oa-strategies" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  {t("footer.links.strategy")}
                  <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  {t("footer.links.methodology")}
                  <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t("footer.company")}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.about")}</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.services")}</Link>
              </li>
              <li>
                <Link href="/vision" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.vision")}</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.contact")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t("footer.legal")}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.privacy")}</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.terms")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <p className="text-xs text-muted-foreground/60 text-center md:text-right max-w-md">
            {t("footer.statement")}
          </p>
        </div>
      </div>
    </footer>
  );
}
