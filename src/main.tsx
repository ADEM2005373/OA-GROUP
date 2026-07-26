import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@/i18n";
import { changeLanguage } from "@/i18n";

const storedTheme = window.localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const theme = storedTheme ?? systemTheme;

document.documentElement.classList.toggle("dark", theme === "dark");
document.documentElement.style.colorScheme = theme;

const initialLanguage = window.localStorage.getItem("language") ?? "fr";
changeLanguage(initialLanguage);

createRoot(document.getElementById("root")!).render(<App />);
