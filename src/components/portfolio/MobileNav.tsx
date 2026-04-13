import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  navItems: string[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const MobileNav = ({ navItems, activeSection, onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div className="md:hidden flex items-center gap-4">
      <ThemeToggle />
      
      <button
        onClick={toggleMenu}
        className="relative z-[101] w-10 h-10 flex items-center justify-center text-elegant-gold"
        aria-label="Toggle Menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col justify-center px-12"
          >
            <div className="space-y-8">
              {navItems.map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.toLowerCase());
                      setIsOpen(false);
                    }}
                    className={cn(
                      "text-4xl font-playfair font-bold transition-all duration-300 block",
                      activeSection === item.toLowerCase()
                        ? "text-elegant-gold translate-x-4"
                        : "text-muted-foreground hover:text-elegant-gold hover:translate-x-4"
                    )}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-border/50"
            >
              <p className="text-sm tracking-widest text-elegant-gold uppercase opacity-60">
                Prajnan Kumar Sarma
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                B.Tech Information Technology · AI/ML Enthusiast
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
