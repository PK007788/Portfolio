import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-10 h-10 rounded-full bg-slate-accent/10 hover:bg-elegant-gold/20 text-elegant-gold transition-all duration-300"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="h-5 w-5 rotate-0 scale-100 transition-all text-elegant-gold" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
};
