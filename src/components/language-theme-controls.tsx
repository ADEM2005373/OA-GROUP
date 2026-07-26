import { useEffect, useState } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

type ThemeMode = "light" | "dark";

export function LanguageThemeControls() {
  const { i18n, t } = useTranslation();
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as ThemeMode | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const resolvedTheme = storedTheme ?? systemTheme;
    setTheme(resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.style.colorScheme = resolvedTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
  };

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    window.localStorage.setItem("language", value);
    document.documentElement.lang = value;
    document.documentElement.dir = value === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="flex items-center gap-2">
      <label className="sr-only" htmlFor="language-select">
        {t("nav.language")}
      </label>
      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-2 py-1.5 shadow-sm">
        <Globe className="h-4 w-4 text-muted-foreground" />
        <select
          id="language-select"
          value={i18n.language}
          onChange={(event) => handleLanguageChange(event.target.value)}
          className="bg-transparent text-sm font-medium text-foreground outline-none"
          aria-label={t("nav.language")}
        >
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
        </select>
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full border-border/50 bg-background/80 hover:border-primary/40 hover:text-primary"
        aria-label={t("nav.themeToggle")}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
}
