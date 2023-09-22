import React from "react";
import { RefObject, useEffect, useState } from 'react';

export const useChangeThemeOnIntersect = (ref: RefObject<HTMLElement>, theme: string, onChangeTheme: any, isSpecialSection: boolean = false) => {
  const [lastSection, setLastSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
          setLastSection(theme);
          onChangeTheme(theme);
        } else if (isSpecialSection) {
          // Only for the special section, do not change the theme until it's less than 50% visible
          if (theme === "light" && entry.intersectionRatio < 0.5) {
            onChangeTheme("dark");
          }
        } 
      });
    }, {
      threshold: [0.49, 0.5]
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, theme, onChangeTheme, lastSection, isSpecialSection]);
}

export function getCurrentYear() {
  return new Date().getFullYear();
}