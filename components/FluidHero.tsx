"use client";

import { useEffect, useState } from "react";

import { GradientText } from "@/components/GradientText";
import SplashCursor from "@/components/SplashCursor";

const moltenPalette = [
  { r: 1.0, g: 0.92, b: 0.68 },
  { r: 0.98, g: 0.74, b: 0.28 },
  { r: 0.82, g: 0.5, b: 0.11 },
  { r: 0.56, g: 0.3, b: 0.07 },
];

export function FluidHero() {
  const year = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("page--home-locked");
    document.body.classList.add("page--home-locked");

    const revealTimer = window.setTimeout(() => {
      requestAnimationFrame(() => {
        setIsLoaded(true);
      });
    }, 320);

    return () => {
      window.clearTimeout(revealTimer);
      document.documentElement.classList.remove("page--home-locked");
      document.body.classList.remove("page--home-locked");
    };
  }, []);

  return (
    <main className="hero" data-loaded={isLoaded ? "true" : "false"}>
      <div className="hero__backdrop">
        <SplashCursor
          className="hero__splash"
          colors={moltenPalette}
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
          TRANSPARENT={false}
          SIM_RESOLUTION={70}
          DYE_RESOLUTION={960}
          DENSITY_DISSIPATION={2.5} //2.5
          VELOCITY_DISSIPATION={0.5}
          PRESSURE={0.001}
          PRESSURE_ITERATIONS={32}
          CURL={15} // 15
          SPLAT_RADIUS={0.7}
          SPLAT_FORCE={3000}
          COLOR_UPDATE_SPEED={40}
        />
      </div>
      <div className="hero__reveal" />
      <div className="hero__topline" />
      <div className="hero__vignette" />
      <div className="hero__grain" />

      <section className="hero__content">
        <p className="hero__eyebrow">Digital craft and immersive identity</p>
        <h1 className="hero__title">
          <GradientText
            as="span"
            className="hero__titleGradient"
            colors={["#fff8e7", "#f6d47a", "#c8841f", "#fff8e7"]}
            animationSpeed={12}
          >
            BOY STEVEN
          </GradientText>
        </h1>
        <p className="hero__subtitle">
          <GradientText
            as="span"
            className="hero__subtitleGradient"
            colors={["#fff7dd", "#e8c365", "#9a6619", "#fff7dd"]}
            animationSpeed={16}
          >
            FULL-STACK PROGRAMMER
          </GradientText>
        </p>

        <div className="hero__actions">
          <a className="hero__button" href="#selected-work">
            <span>Portfolio</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
      <section className="hero__footnote" id="selected-work">
        <p className="hero__meta">Copyright © {year} Boy Steven. All rights reserved.</p>
      </section>
    </main>
  );
}
