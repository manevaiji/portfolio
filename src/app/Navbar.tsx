"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") || "dark";
      setTheme(stored);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(stored);
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between fixed top-0 left-0 z-50 backdrop-blur-lg bg-[color:rgba(55,27,88,0.85)] dark:bg-[color:rgba(55,27,88,0.85)] shadow-lg">
      <div className="font-bold text-xl tracking-tight text-primary">Vaijinath Mane, PhD</div>
      <div className="hidden md:flex space-x-6 text-base">
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#resume" className="hover:text-accent transition">Resume</a>
        <a href="#skills" className="hover:text-accent transition">Skills</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a href="#contact" className="hover:text-accent transition">Contact</a>
        <a href="#blog" className="hover:text-accent transition">Blog</a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="/Vaijinath_Mane_Resume.pdf"
          download
          className="bg-accent text-[color:#371B58] px-4 py-2 rounded font-semibold hover:bg-primary hover:text-accent-foreground transition border border-transparent hover:border-accent focus:outline-none"
        >
          Download Resume
        </a>
        <a href="https://www.linkedin.com/in/vaijinath-mane-ph-d-02719b77/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg height="24" width="24" fill="#64FFDA" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.27c-.96 0-1.25-.68-1.25-1.23 0-.56.3-1.22 1.28-1.22.97 0 1.25.66 1.25 1.22 0 .55-.28 1.23-1.28 1.23zm14.25 10.27h-3v-4.99c0-1.19-.43-2-1.52-2-.83 0-1.33.56-1.54 1.1-.08.19-.1.45-.1.71v5.18h-3s.04-8.41 0-9h3v1.27c.39-.6 1.1-1.46 2.7-1.46 1.97 0 3.45 1.29 3.45 4.06v5.13z"/></svg>
        </a>
        <button
          className="ml-4 px-2 py-1 rounded bg-primary-foreground hover:bg-primary focus:outline-none transition text-primary text-xl"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
      </div>
    </nav>
  );
}
